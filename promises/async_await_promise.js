// Async JSON

const datas = [
  { name: "Vikash", profesion: "SDE" },
  { name: "Ashish", profesion: "ML" },
  { name: "Abhas", profesion: "AI" },
];

const getData = () => {
  datas.forEach((user) => console.log("user.name", user.name));
};

// setTimeout(() => getData(), 1000);

const createData = (obj, callBack) => {
  datas.push(obj);
  getData();
};

setTimeout(() => createData({ name: "Ajay", profesion: "IT" }, getData), 3000);
