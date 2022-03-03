function convertToSpaces(inputStr) {
  return inputStr.replace(/[^A-Za-z0-9]/g, ' ');
}

module.exports = convertToSpaces;
