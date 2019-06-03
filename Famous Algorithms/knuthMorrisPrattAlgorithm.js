function knuthMorrisPrattAlgorithm(string, substring) {
  let substrArr = [];
  //prepare substrArr
  substrArr.push([0, 0]);
  const firstLetter = substring[0];
  substrArr.push([firstLetter, 0]);
  let ind = 1;
  while (ind < substring.length) {
    if (substring[ind] === firstLetter) {
      ind = prepareSubstrArr(substring, substrArr, ind)
    } else {
      substrArr.push([substring[ind], 0]);
    }
    ind++;
  }

  let substrInd = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substrArr[substrInd + 1][0]) {
      substrInd++;
      if (substrInd + 1 >= substrArr.length) return true;
    } else {
      if (string[i] === substrArr[substrArr[substrInd][1] + 1][0]) {
        substrInd = substrArr[substrInd][1] + 1;
        console.log(substrInd)
      } else {
        substrInd = 0;
      }
    }
  }
  return false;
}

function prepareSubstrArr(substr, res, ind) {
  let newInd = 0;
  while (substr[ind] === substr[newInd]) {
    res.push([substr[ind], newInd + 1]);
    newInd++;
    ind++;
  }
  return ind -1;
}

let res = knuthMorrisPrattAlgorithm('aefoaefcdaefcdaed', 'aefcdaed');
console.log(res);
