/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs').promises;
// const fs = require('fs');
const fm = require('gray-matter');
// const { promisify } = require('promise-callbacks');

// const { readdir, readFile, mkdir, writeFile } = promisify.methods(fs, [
//   'readdir',
//   'readFile',
//   'mkdir',
//   'writeFile',
// ]);

const { readdir, readFile, mkdir, writeFile } = fs;

// jeeze, this was a hard thing to figure out...
// see https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
// for what's going on - in short, forEach will not work with async / await the way
// i expected... see the addition of `await Promise.all`
(async () => {
  const redirectArray = [];
  const pathPrefix = '/Users/jayw/Projects/Code';
  const oldFilesPrefix = '/wigg.in/_posts';
  const newFilesPrefix = '/gatsby-blog/src/posts';
  const files = await readdir(`${pathPrefix}${oldFilesPrefix}`);
  await Promise.all(
    files.map(async f => {
      const fullPath = `${pathPrefix}${oldFilesPrefix}/${f}`;
      const data = await readFile(fullPath);
      const contentObj = fm(data);
      const date = new Date(contentObj.data.date);
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.substr(-2);
      const day = `0${date.getDate()}`.substr(-2);
      const datePath = `/${year}/${month}/${day}/`;
      const postName = f.match(/.*?\d{4}-\d{2}-\d{2}-(.*?)\..*?/);
      if (typeof contentObj.data.categories === 'object') {
        const categoryPath = contentObj.data.categories.join('/');
        const redirectPath = `${datePath}${postName[1]}`;
        const newFilePath = `${pathPrefix}${newFilesPrefix}/${categoryPath}${datePath}${postName[1]}`;
        const metaRedirect = `<meta http-equiv="refresh" content="0;URL='${redirectPath}/'" />`;
        redirectArray.push({
          source: `/${categoryPath}${datePath}${postName[1]}`,
          status: '301',
          target: redirectPath,
          condition: null,
        });
        try {
          await mkdir(newFilePath, { recursive: true });
        } catch (err) {
          console.log(err);
        }
        try {
          await writeFile(`${newFilePath}/index.md`, metaRedirect);
          console.log(`wrote file- ${newFilePath}/index.md`);
        } catch (err) {
          console.log(err);
        }
      }
    }),
  );
  const a = JSON.stringify(redirectArray);
  await writeFile('./amplifyRedirects.json', a);
  console.log(`done!\n\n${a}\n\n`);
})();

/*

const myReadFile = fullPath => {
  return readFile(fullPath, 'utf8');
};

const writeFiles = async () => {
  const redirectArray = [];
  await readdir(`${pathPrefix}${oldFilesPrefix}`).then(files => {
    files.forEach(async f => {
      const fullPath = `${pathPrefix}${oldFilesPrefix}/${f}`;
      const data = await myReadFile(fullPath);
      const contentObj = fm(data);
      const date = new Date(contentObj.data.date);
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.substr(-2);
      const day = `0${date.getDate()}`.substr(-2);
      const datePath = `/${year}/${month}/${day}/`;
      const postName = f.match(/.*?\d{4}-\d{2}-\d{2}-(.*?)\..*?/);
      if (typeof contentObj.data.categories === 'object') {
        const categoryPath = contentObj.data.categories.join('/');
        const redirectPath = `${datePath}${postName[1]}`;
        const newFilePath = `${pathPrefix}${newFilesPrefix}/${categoryPath}${datePath}${postName[1]}`;
        const metaRedirect = `<meta http-equiv="refresh" content="0;URL='${redirectPath}/'" />`;
        redirectArray.push({
          source: `/${categoryPath}${datePath}${postName[1]}`,
          status: '301',
          target: redirectPath,
          condition: null,
        });
        try {
          await mkdir(newFilePath, { recursive: true });
        } catch (err) {
          console.log(err);
        }
        try {
          await writeFile(`${newFilePath}/index.md`, metaRedirect);
          console.log(`wrote file- ${newFilePath}/index.md`);
        } catch (err) {
          console.log(err);
        }
      }
    });
  });

  return new Promise(resolve => {
    resolve(redirectArray);
  });
};

*/

/*
const writeRedirectJson = async () => {
  const generatedArray = writeFiles().then(arry => {
    console.log(`ARRAY=${arry}`);
  });
  try {
    console.log('writing file...');
    await writeFile('./amplifyRedirects.json', JSON.stringify(generatedArray));
    console.log('amplify redirect json:');
    console.log(JSON.stringify(generatedArray));
  } catch (err) {
    console.log(err);
  }
};
*/

// writeRedirectJson();

/*

writeFiles().then(arry => {
  console.log(`ARRAY=${arry}`);
});

*/
