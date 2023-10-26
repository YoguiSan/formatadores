#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */

const fs = require('fs');

let packageJsonUrl = '../../package.json';
let metaJsonUrl = './public/meta.json';

process.argv.forEach((arg) => {
  if (arg.indexOf('--metaJsonUrl=') > -1) {
    metaJsonUrl = arg.replace('--metaJsonUrl=', '');
  }
  if (arg.indexOf('--packageJsonUrl=') > -1) {
    packageJsonUrl = arg.replace('--packageJsonUrl=', '');
  }
  return packageJsonUrl;
});

const packageJson = require(packageJsonUrl);

const appVersion = packageJson.version;

const jsonData = {
  version: appVersion,
};

const jsonContent = JSON.stringify(jsonData);

fs.writeFile(metaJsonUrl, jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('Ocorreu um erro ao gerar o arquivo meta.json');
    return console.error(err);
  }

  return console.log(`meta.json salvo com o número da versão mais recente ${(appVersion)}`);
});
