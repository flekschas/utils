const fs = require('fs');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');

// const templateData = jsdoc2md.getTemplateDataSync({
//   files: 'src/*.js',
// });

// templateData.sort((a, b) => {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });

// const output = jsdoc2md.renderSync({
//   data: templateData,
//   separators: true,
// });

// fs.writeFileSync(path.resolve(__dirname, '../DOCS.md'), output);

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

    const name = file
      .slice(0, -3)
      .split('-')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);

    return `# ${name}\n\n${o}`;
  })
  .join('');

fs.writeFileSync(path.resolve(__dirname, '../DOCS.md'), output);
