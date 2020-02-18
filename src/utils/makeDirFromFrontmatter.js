/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const fm = require('gray-matter');

const pathPrefix = '/Users/jayw/Projects/Code';
const oldFilesPrefix = '/wigg.in/_posts';
const newFilesPrefix = '/gatsby-blog/src/posts';

// const file = `${pathPrefix}${oldFilesPrefix}/2019-09-20-Jekyll-On-AWS-Amplify.md`;

fs.readdir(`${pathPrefix}${oldFilesPrefix}`, (err0, files) => {
  if (err0) throw err0;
  files.forEach(f => {
    const fullPath = `${pathPrefix}${oldFilesPrefix}/${f}`;
    console.log(`working on this file: ${fullPath}`);
    fs.readFile(fullPath, 'utf8', (err1, data) => {
      if (err1) throw err1;
      const contentObj = fm(data);
      const date = new Date(contentObj.data.date);
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.substr(-2);
      const day = `0${date.getDate()}`.substr(-2);
      const datePath = `/${year}/${month}/${day}/`;
      const postName = f.match(/.*?\d{4}-\d{2}-\d{2}-(.*?)\..*?/);
      const newFilePath = `${pathPrefix}${newFilesPrefix}${datePath}${postName[1]}`;
      fs.mkdir(newFilePath, { recursive: true }, err2 => {
        if (err2) throw err2;
        let newData = data.replace(/hero_image/, 'heroImage');
        newData = newData.replace('/images/', '../../../../../images/');
        fs.writeFile(`${newFilePath}/index.md`, newData, err3 => {
          if (err3) throw err3;
          console.log(`created file! - ${newFilePath}/index.md`);
        });
      });
    });
  });
});

// fs.readFile(file, 'utf8', (err, data) => {
//   if (err) throw err;
//   const content = fm(data);
//   const date = new Date(content.data.date);
//   const year = date.getFullYear();
//   const month = `0${date.getMonth() + 1}`.substr(-2);
//   const day = `0${date.getDate()}`.substr(-2);
//   const datePath = `/${year}/${month}/${day}/`;

//   const postName = file.match(/.*?\d{4}-\d{2}-\d{2}-(.*?)\..*?/);

//   const newFilePath = `${pathPrefix}${newFilesPrefix}${datePath}${postName[1]}`;

//   console.log(`trying to create folder: ${newFilePath}`);
//     fs.mkdir(newFilePath, { recursive: true }, err1 => {
//       if (err1) throw err1;
//       console.log(`trying to create a file: ${newFilePath}`);
//       let newData = data.replace(/hero_image/, 'heroImage');
//       newData = newData.replace('/images/', '../../../../../images/');
//       fs.writeFile(`${newFilePath}/index.md`, newData, err2 => {
//         if (err2) throw err2;
//         console.log('created file!');
//       });
//     });
//   });
// });
