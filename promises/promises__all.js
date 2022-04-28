const p1 = new Promise((resolve, _) => setTimeout(() => resolve(10), 2000));
const p2 = Promise.resolve("Wow, Promises resolved");
const p3 = Promise.reject("Promise rejected");

Promise.all([p2, p1, p3])
  .then((results) =>
    results.forEach((result) => console.log("result-->", result))
  )
  .catch((error) => console.log("error...", error));
Promise.allSettled([p1, p2, p3]).then((results) =>
  results.forEach((result) => console.log("result", result))
);
