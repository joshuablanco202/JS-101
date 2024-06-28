const people = [
  {
    firstName: "Juan",
    lastName: "Dela Cruz",
    email: "juan@gmail.com",
    age: 27,
  },
  { firstName: "Maria", lastName: "Clara", email: "maria@gmail.com", age: 18 },
  { firstName: "Erik", lastName: "Oreste", email: "bob@gmail.com", age: 43 },
  {
    firstName: "Giselle",
    lastName: "Huertas",
    email: "giselle@gmail.com",
    age: 19,
  },
  {
    firstName: "Patricia",
    lastName: "Sison",
    email: "patricia@gmail.com",
    age: 16,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: `${person.firstName} ${person.lastName} ${person.age}`,
    email: person.email,
  }));
console.log(youngPeople);
