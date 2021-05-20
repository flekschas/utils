const fs = require('fs');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');

const toc = fs
  .readdirSync('src')
  .filter((file) => file.endsWith('.js'))
  .map((file) => {
    const id = file.slice(0, -3);
    const name = id
      .split('-')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
      .join(' ');

    return `- [${name}](#${id})\n`;
  })
  .join('');

const linkToToc = `[⬆️ Back to the top](#api-docs)`;

const output = fs
  .readdirSync('src')
  .filter((file) => file.endsWith('.js'))
  .map((file) => {
    const templateData = jsdoc2md.getTemplateDataSync({
      files: `src/${file}`,
    });

    templateData.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    const o = jsdoc2md.renderSync({
      data: templateData,
      separators: true,
    });

    const id = file.slice(0, -3);
    const name = id
      .split('-')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
      .join(' ');

    return `# ${name}\n\n${linkToToc}\n\n${o}`;
  })
  .join('');

fs.writeFileSync(
  path.resolve(__dirname, '../API.md'),
  `# API Docs\n\n${toc}\n\n* * *\n\n${output}`
);
