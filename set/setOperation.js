/* SET OPERATION*/

const instagramUsers = [
  { id: 1, name: "Vikash", email: "vikash@gmail.com" },
  { id: 2, name: "Ashish", email: "ashish@gmail.com" },
];

const twitterUsers = [
  { id: 3, name: "Ashish", email: "ashish@gmail.com" },
  { id: 4, name: "Ajay", email: "ajay@gmail.com" },
];

// find total users on social media including both

const totalUniqueUser = (instagramUsers, twitterUsers) => {
  let totalUsers = [];
  for (tU of twitterUsers) {
    totalUsers.push(tU.email);
  }
  //time -- o(m)

  for (iU of instagramUsers) {
    if (!totalUsers.includes(iU.email)) {
      totalUsers.push(iU.email);
    }
  }

  // time --- o(n)

  return totalUsers;
};

const uniqueArray = totalUniqueUser(instagramUsers, twitterUsers);
console.log("uniqueArray", uniqueArray);

// total time -- o(m+n);

/* -- Common user--- */

const findCommonUsers = (instagramUsers, twitterUsers) => {
  let commonUsers = [];
  for (iU of instagramUsers) {
    for (tU of twitterUsers) {
      if (iU.email === tU.email) commonUsers.push(iU.email);
    }
  }
  return commonUsers;
};

/*-- time --> O(M*N)*/

const commonUsers = findCommonUsers(instagramUsers, twitterUsers);
console.log("commonUsers:", commonUsers);

const findCommonUsers2 = (instagramUsers, twitterUsers) => {
  let commonUsers = [];
  const twitterEmailSet = new Set();

  for (const tU of twitterUsers) {
    twitterEmailSet.add(tU.email);
  }

  for (const iU of instagramUsers) {
    if (twitterEmailSet.has(iU.email)) commonUsers.push(iU.email);
  }

  return commonUsers;
};

/*-- time --> O(M+N)*/

const commonUsers2 = findCommonUsers(instagramUsers, twitterUsers);
console.log("commonUsers2-->:", commonUsers2);

/*--- SET DIFFERENCE --- find insta user that does not follow twitter! */
const findOnlyInstaUsers = (instagramUsers, twitterUsers) => {
  const setDifference = [];
  const twitterEmailSet = new Set();
  for (tU of twitterUsers) {
    twitterEmailSet.add(tU.email);
  }

  for (iU of instagramUsers) {
    if (!twitterEmailSet.has(iU.email)) setDifference.push(iU.email);
  }
  return setDifference;
};

const onlyInsaUsers = findOnlyInstaUsers(instagramUsers, twitterUsers);
console.log("onlyInstaUsers", onlyInsaUsers);
