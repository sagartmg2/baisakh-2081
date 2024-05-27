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

// console.log(students[2].courses[1].title)

students[2].courses[1].title = "ui ux"

console.log(students)

let class1 = {
  classteacher: "mr one",
  students: ["abc", "xyz"],
}
let class2 = {
  classteacher: "mr two",
  students: ["abc", "xyz"],
}

// sections ABC , classteacher, students
// let classes = ["one", "two","three"]

let products = [{ title: "watch" }, { name: "mouse" }]

let classes = [
  {
    class: "one",
    sections: [
      {
        name: "A",
        classTeacher: "teacher oneA",
        students: ["ram", "hari"],
      },
      {
        name: "B",
        classTeacher: "teacher oneA",
      },
    ],
  },
  {
    class: "two",
    sections: [
      {
        name: "A",
        classTeacher: "teacher two A",
        students: ["abc", "xyz"],
      },
    ],
  },
  {
    class: "three",
    sections: [
      {
        name: "A",
        classTeacher: "teacher three A",
        students: ["ram", "hari"],
      },
      {
        name: "B",
        classTeacher: "teacher three B",
      },
    ],
  },
]

console.log(classes)

/*  ecommerce carts  */

/* convert the following array to detailed version */
let carts = ["watch", "keyboard", "watch", "mouse"]
/* who ordered watch  : name, email , address: homeAddress :street name, ward_no,  officeAddress */
/* quantity of watch orderd */
/* rate  of the product */
/* date of the product ordered */

carts = [
  {
    productTitle: "watch",
    quantity: "12",
    rate: 1231,
    date: "12-23",
    user: {
      name: "ram",
      email: "Ram@gmai.com",
      address: {
        homeAddress: {},
        officeAddress: {},
      },
    },
  },
  {
    productTitle: "keyboard",
    quantity: "12",
    rate: 1231,
    date: "12-23",
    user: {
      name: "ram",
      email: "Ram@gmai.com",
      address: {
        homeAddress: {},
        officeAddress: {},
      },
    },
  },
  {
    productTitle: "watch",
    quantity: "12",
    rate: 1231,
    date: "12-23",
    user: {
      name: "ram",
      email: "Ram@gmai.com",
      address: {
        homeAddress: {},
        officeAddress: {},
      },
    },
  },
]

let rooms = [  ]

carts = [
  {
    productTitle: "watch",
    rate: 1231,
    users: [
      {
        quantity:10,
        date:"12-10",
        name: "ram",
        email: "Ram@gmai.com",
        address: {
          homeAddress: {},
          officeAddress: {},
        },
      },
      {
        quantity:1,
        date:"1-10",
        name: "hari",
        email: "hari@gmai.com",
        address: {
          homeAddress: {},
          officeAddress: {},
        },
      }
    ]
  },
  {
    productTitle: "keyboard",
    quantity: "12",
    rate: 1231,
    date: "12-23",
    user: {
      name: "ram",
      email: "Ram@gmai.com",
      address: {
        homeAddress: {},
        officeAddress: {},
      },
    },
  },
  {
    productTitle: "watch",
    quantity: "12",
    rate: 1231,
    date: "12-23",
    user: {
      name: "ram",
      email: "Ram@gmai.com",
      address: {
        homeAddress: {},
        officeAddress: {},
      },
    },
  },
]



