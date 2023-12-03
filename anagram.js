function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths are different, if yes, they can't be anagrams
  if (cleanedStr1.length !== cleanedStr2.length) {
    return false;
  }

  // Sort the characters and compare the sorted strings
  const sortedStr1 = cleanedStr1.split('').sort().join('');
  const sortedStr2 = cleanedStr2.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
