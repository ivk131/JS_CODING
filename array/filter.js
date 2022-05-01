const data = [
  { name: "Vikash", age: 20 },
  { name: "Ajay", age: 60 },
  { name: "", age: 60 },
];

function filterUndefined(data) {
  let undefinedValue = data.filter((item) => {
    return item.name === "undefined" || null;
  });

  return undefinedValue;
}

console.log("filterUndefined(data)", filterUndefined(data));
