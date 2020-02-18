/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const fm = require('gray-matter');

const pathPrefix = '/Users/jayw/Projects/Code';
const oldFilesPrefix = '/wigg.in/_posts';
const newFilesPrefix = '/gatsby-blog/src/posts';

const file = `${pathPrefix}${oldFilesPrefix}/2019-09-20-Jekyll-On-AWS-Amplify.md`;

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  const content = fm(data);
  const date = new Date(content.data.date);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.substr(-2);
  const day = `0${date.getDate()}`.substr(-2);
  const datePath = `/${year}/${month}/${day}/`;

  const postName = file.match(/.*?\d{4}-\d{2}-\d{2}-(.*?)\..*?/);

  const newFilePath = `${pathPrefix}${newFilesPrefix}${datePath}${postName[1]}`;

  console.log(`trying to create folder: ${newFilePath}`);
  fs.mkdir(newFilePath, { recursive: true }, err1 => {
    if (err1) throw err;
    console.log(`trying to create a file: ${newFilePath}`);
    const newData = data.replace(/hero_image/, 'heroImage');
    fs.writeFile(`${newFilePath}/index.md`, newData, err2 => {
      if (err2) throw err;
      console.log('created file!');
    });
  });
});
