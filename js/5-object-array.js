let usersData = [
  {
    name: "ram",
    age: 10,
  },
  {
    name: "shyam",
    age: -15, // change this to 15
  },
  {
    name: "hari",
    age: 20,
  },
]

console.log(usersData[1].age)
usersData[1].age = 15
console.log(usersData)

let users = ["ram", "shy", "hari"]
console.log(users[1])
users[1] = "shyam"

console.log(users)

// let person  = "hari"
// MindRisers!@

let course = {
  title: "mern",
  duration: "2 months",
  topics: ["html", "Css", "js"],
  timing: "4 - 5 ",
}

let person = {
  name: "hari",
  age: 12,
  contact: 12321343,
  address: {
    permananetAddress: {
      province: "1",
      district: "jhapa",
      //   houseNumber:12, // add through code
      tole: "abc",
      municipality: {
        name: "unknown", // jhapa municipality  person.address.permananetAddress.municipality= "jhapa"
        ward: 5,
      },
    },
    temporaryAddress: {
      province: "3",
      district: "kathamdnu",
      tole: "balaju",
      municipality: {
        name: "kathmandu nagarpalika",
        ward: 15,
      },
    },
  },
}

let fruits =  ["apple","porgne"] 
fruits[1] = "orange"


let students = [
  {
    name: "ram",
    courses: [
      {
        title: "web",
      },
      {
        title: "ui - ux ",
      },
    ],
  },
  {
    name: "hari",
    courses: [{ title: "mern" }],
  },
  {
    name: "sita",
    courses: [
      {
        title: "web",
      },
      {
        title: "wrong title", // changet this to ui ux
      },
    ],
  },
]

/* code  */
console.log(students);

let classes = ["one", "two", "there"] // sections ABC , classteacher, students
