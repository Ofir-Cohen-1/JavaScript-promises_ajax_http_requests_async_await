const makeAllCaps = (wordsArr) => {
  return new Promise((resolve, reject) => {
    if (wordsArr.find((word) => typeof word !== "string")) {
      reject("Error 1: The array not contains only strings!");
    } else {
      resolve(wordsArr.map((word) => word.toUpperCase()));
    }
  });
};
const sortWords = (wordsArr) => {
  return new Promise((resolve, reject) => {
    if (wordsArr.find((word) => typeof word !== "string")) {
      reject("Error 2: The array not contains only strings!");
    } else {
      resolve(wordsArr.sort());
    }
  });
};

const arr1 = ["ampm", "rosenfeld"];
const arr2 = ["app", 1, "solel"];

makeAllCaps(arr1)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

makeAllCaps(arr2)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
