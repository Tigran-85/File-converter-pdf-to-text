const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');

const extractText = async (pathStr) => {

  const pdfFile = path.resolve(pathStr)
  const dataBuffer = fs.readFileSync(pdfFile);
  const data = await pdf(dataBuffer)
  return data.text;
}

module.exports = {
  extractText
}