/* ---Fetch--- */

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await response.json();
  return users;
}

// console.log("typeof-->", typeof getUsers());
// getUsers().then((results) => console.log("results", results));

const userAction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const myJson = response.json();
  return myJson;
};

const results = userAction().then((result) => console.log("result", result));
// console.log("results", results);
