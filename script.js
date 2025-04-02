const table = document.querySelector('#table');

console.log("Inserted table row")


// input variables
const Date = document.querySelector("#dateI");
const Unit = document.querySelector("#unitI");
const Price = document.querySelector("#priceI");
const sold = document.querySelector("#sold");
const create = document.querySelector("#btn")
// ------>

// Array that holds created rows
let arr = [];


function createRow(DATE, RECIEPT, ISSUE, AVGCOST, NOFUNITS, TOTALSTOCKVALUE, sold, arr) {

    console.log("Creating row.....");

    // Stops function if inputs are empty (Think python ASSERT *Lex fridman x ThePrimagen Pod Reference*)
    if (DATE === "" || AVGCOST === "" || NOFUNITS === ""){
        console.warn("Stopped function because of empty input(s)")
        return
    }

    
    const row = document.createElement('tr');

    const date = document.createElement('td');
    const reciept = document.createElement('td');
    const issue = document.createElement('td');
    const avgCost = document.createElement('td');
    const nOfUnits = document.createElement('td');
    const totalStockValue = document.createElement('td');

    if (sold && arr.length > 0) {
        console.log(sold);
        console.log(arr);

        const lastArr = arr[arr.length - 1];
        const avg = (lastArr.totalSV + (NOFUNITS * AVGCOST)) / (parseFloat(lastArr.NoOfUnits) + parseFloat(NOFUNITS));
        console.log(NOFUNITS * AVGCOST);
        console.log("Total Units Combined" + (lastArr.NoOfUnits + NOFUNITS))

        date.innerHTML = DATE;
        reciept.innerHTML = "";
        issue.innerHTML = RECIEPT;
        avgCost.innerHTML = avg;
        nOfUnits.innerHTML = parseFloat(NOFUNITS);
        totalStockValue.innerHTML = (avg * parseFloat(NOFUNITS)); // avgCost * nOfUnits
    } else {
        date.innerHTML = DATE;
        reciept.innerHTML = RECIEPT;
        issue.innerHTML = "";
        avgCost.innerHTML = parseFloat(AVGCOST);
        nOfUnits.innerHTML = parseFloat(NOFUNITS);
        totalStockValue.innerHTML = TOTALSTOCKVALUE; // avgCost * nOfUnits
    }

   

    row.appendChild(date);
    row.appendChild(reciept);
    row.appendChild(issue);
    row.appendChild(avgCost);
    row.appendChild(nOfUnits);
    row.appendChild(totalStockValue);

    row.className = "text-center h-10 border-t-2";

    table.appendChild(row);

    arr.push({
        Date:  DATE,
        Reciept: RECIEPT,
        Issue: ISSUE,
        AvgCost: AVGCOST,
        NoOfUnits: NOFUNITS,
        totalSV: TOTALSTOCKVALUE
    })
    console.log("Succseful Event");

}

create.addEventListener('click', function() {

    const total = Unit.value * Price.value;
    const at = `${Unit.value} @ ${Price.value}`;    
    

    createRow(Date.value, at, "", Price.value, Unit.value, total, sold.value, arr)
});



