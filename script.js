const table = document.querySelector('#table');

console.log("Inserted table row")

const row = document.createElement('tr');

const date = document.createElement('td');
const reciept = document.createElement('td');
const issue = document.createElement('td');
const avgCost = document.createElement('td');
const nOfUnits = document.createElement('td');
const totalStockValue = document.createElement('td');

date.innerHTML = "4/1/2025";
reciept.innerHTML = "10 @ 10";
issue.innerHTML = "";
avgCost.innerHTML = 10;
nOfUnits.innerHTML = 10;
totalStockValue.innerHTML = 100; // avgCost * nOfUnits

row.appendChild(date);
row.appendChild(reciept);
row.appendChild(issue);
row.appendChild(avgCost);
row.appendChild(nOfUnits);
row.appendChild(totalStockValue);

row.className = "text-center";

table.appendChild(row);