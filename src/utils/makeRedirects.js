/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs').promises;
const fm = require('gray-matter');

const pathPrefix = '/Users/jayw/Projects/Code';
const oldFilesPrefix = '/wigg.in/_posts';
const newFilesPrefix = '/gatsby-blog/src/posts';

const writeFiles = async () => {
  const redirectArray = [];
  console.log('0');
  const files = await fs.readdir(`${pathPrefix}${oldFilesPrefix}`);
  console.log('0.0');
  return files.forEach(async f => {
    console.log('1');
    const fullPath = `${pathPrefix}${oldFilesPrefix}/${f}`;
    const data = await fs.readFile(fullPath, 'utf8');
    const contentObj = fm(data);
    const date = new Date(contentObj.data.date);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.substr(-2);
    const day = `0${date.getDate()}`.substr(-2);
    const datePath = `/${year}/${month}/${day}/`;
    const postName = f.match(/.*?\d{4}-\d{2}-\d{2}-(.*?)\..*?/);
    if (typeof contentObj.data.categories === 'object') {
      const categoryPath = contentObj.data.categories.join('/');
      // eslint-disable-next-line max-len
      const newFilePath = `${pathPrefix}${newFilesPrefix}/${categoryPath}${datePath}${postName[1]}`;
      const redirectPath = `${datePath}${postName[1]}`;
      const metaRedirect = `<meta http-equiv="refresh" content="0;URL='${redirectPath}/'" />`;
      await fs.mkdir(newFilePath, { recursive: true });
      fs.writeFile(`${newFilePath}/index.md`, metaRedirect);
      redirectArray.push({
        source: `/${categoryPath}${datePath}${postName[1]}`,
        status: '301',
        target: redirectPath,
        condition: null,
      });
    }
  });
};

const writeRedirectJson = async () => {
  console.log('3');
  const generatedArray = await writeFiles();
  console.log('4');
  await fs.writeFile('./amplifyRedirects.json', JSON.stringify(generatedArray));
  console.log('5');
  console.log('amplify redirect json:');
  console.log(JSON.stringify(generatedArray));
};

writeRedirectJson();
