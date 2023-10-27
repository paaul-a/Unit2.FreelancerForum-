

let freelanceModel = {
  name: "",
  occupation: "",
  price: 70,
}

const freelancers = [
  { 
    name: "Dr. Slice", 
    price: 25, 
    occupation: "gardener" 
  },
  { 
    name: "Dr. Pressure", 
    price: 51, 
    occupation: "programmer" 
  },
  { 
    name: "Prof. Possibility", 
    price: 43, 
    occupation: "teacher" 
  },
  { 
    name: "Prof. Prism", 
    price: 81, 
    occupation: "teacher" 
  },
  { 
    name: "Dr. Impulse", 
    price: 43, 
    occupation: "teacher" 
  },
  { 
    name: "Prof. Spark", 
    price: 76, 
    occupation: "programmer" 
  },
  { 
    name: "Dr. Wire", 
    price: 47, 
    occupation: "teacher"
  },
  { 
    name: "Prof. Goose", 
    price: 72, 
    occupation: "driver" 
  },
];


function renderFreelancers () {
  for (let i = 0; i < freelancers.length; i++) {
    let freelanceBox = document.getElementById('freelancers')
    let currentFreelancer = freelancers[i]

    let freelancersDiv = document.createElement('div')
  }
}






