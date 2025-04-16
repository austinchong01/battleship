function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }
  
  export default function findSubArray(mainArray, subArray) {
    for (let i = 0; i < mainArray.length; i += 1) {
      if (Array.isArray(mainArray[i]) && arraysAreEqual(mainArray[i], subArray))
        return true;
    }
    return false;
  }