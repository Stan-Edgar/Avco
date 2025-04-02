const table = document.querySelector('#table');

console.log("Inserted table row")

const row = document.createElement('tr');
const date = document.querySelector('td');
date.innerHTML = "4/1/2025";

row.appendChild(date);
table.appendChild(row);