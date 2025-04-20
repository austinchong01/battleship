function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }
  
  function findSubArray(mainArray, subArray) {
    for (let i = 0; i < mainArray.length; i += 1) {
      if (Array.isArray(mainArray[i]) && arraysAreEqual(mainArray[i], subArray))
        return true;
    }
    return false;
  }

  function coordToNum(coord){
    return (coord[1] * 10) + coord[0];
  }

  function numToCoord(num){
    const x = num % 10;
    const y = Math.floor(num / 10);
    return [x, y];
  }

  export {findSubArray, coordToNum, numToCoord}