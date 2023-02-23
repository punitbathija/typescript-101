import Invoice from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import Payment from "./classes/payment.js";
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
// Tuples
let values;
values = [toFrom.value, details.value, amount.valueAsNumber];
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(doc);
    list.render(doc, type.value, "end");
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "Punit", age: 23 });
console.log(docOne);
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice("yoshi", "web work", 2500);
// docTwo = new Payment("Mario", "plumming work", 200);
// let docs: hasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log(docs);
// // interfaces
// interface isPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: isPerson = {
//   name: "Punit",
//   age: 24,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("I spent", amount);
//     return amount;
//   },
// };
// console.log(me);
// const invoiceOne = new Invoice("Mario", "coming in first in race", 30000);
// const invoiceTwo = new Invoice(
//   "Punit",
//   "developing the nintendo's landing page",
//   60000
// );
// const invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// invoices.forEach((inv) => {
//   console.log(inv.format());
// });
// We can cast a type to an elemnt by using as
