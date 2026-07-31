import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const resolverPath = path.join(rootDir, 'core', 'skill-resolver.json');
const skillsDir = path.join(rootDir, 'skills');

const resolver = JSON.parse(fs.readFileSync(resolverPath, 'utf-8'));

if (fs.existsSync(skillsDir)) {
  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== 'INDEX.md') {
      const skillName = entry.name;
      const skillFile = path.join(skillsDir, skillName, 'SKILL.md');
      if (fs.existsSync(skillFile)) {
        resolver.aliases[skillName] = `skills/${skillName}/SKILL`;
      }
    }
  }
}

fs.writeFileSync(resolverPath, JSON.stringify(resolver, null, 2), 'utf-8');
console.log('✔ Updated core/skill-resolver.json with all skill paths!');
