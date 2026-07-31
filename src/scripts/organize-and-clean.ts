import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const skillsDir = path.join(rootDir, 'skills');

console.log('=== Izanagi AI Framework Organizer & Cleaner ===\n');

// 1. Organizar skills soltas em skills/*.md para skills/<name>/SKILL.md
if (fs.existsSync(skillsDir)) {
  const items = fs.readdirSync(skillsDir);
  for (const item of items) {
    if (item.endsWith('.md') && item !== 'INDEX.md') {
      const skillName = item.replace(/\.md$/, '');
      const srcPath = path.join(skillsDir, item);
      const destDir = path.join(skillsDir, skillName);
      const destPath = path.join(destDir, 'SKILL.md');

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      if (!fs.existsSync(destPath)) {
        const content = fs.readFileSync(srcPath, 'utf-8');
        fs.writeFileSync(destPath, content, 'utf-8');
        console.log(`✔ Moved loose skill: ${item} -> skills/${skillName}/SKILL.md`);
      }
      fs.unlinkSync(srcPath);
    }
  }
}

// 2. Limpar referências indesejadas (Enterprise, Associações específicas)
const searchDirs = [rootDir];
const excludeDirs = ['node_modules', '.git', 'dist', 'site'];

function cleanFiles(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (excludeDirs.includes(entry.name)) continue;
      cleanFiles(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.json') || entry.name.endsWith('.ts'))) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let modified = false;

      // Substituições para remover referências específicas
      const replacements = [
        { find: /Enterprise Organization System/gi, replace: 'Enterprise Organization System' },
        { find: /Enterprise/g, replace: 'Enterprise' },
        { find: /portal\.example\.com/g, replace: 'api.enterprise.com' },
        { find: /enterprise-tools/g, replace: 'enterprise-tools' }
      ];

      for (const r of replacements) {
        if (r.find.test(content)) {
          content = content.replace(r.find, r.replace);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`✔ Cleaned references in: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

cleanFiles(rootDir);
console.log('\n✔ Framework organization and cleanup completed successfully!');
