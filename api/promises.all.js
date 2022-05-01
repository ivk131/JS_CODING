const promose1 = Promise.reject("Something went worng!");
const promose2 = new Promise((resolve, _) => {
  setTimeout(() => resolve(20), 20);
});
const promises3 = 0;

Promise.all([promose1, promose2, promises3])
  .then((results) => results.forEach((result) => console.log("result", result)))
  .catch((error) => console.log("error: ", error));
