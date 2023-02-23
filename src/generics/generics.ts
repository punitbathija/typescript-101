// Generics

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "Punit", age: 23 });
console.log(docOne);
