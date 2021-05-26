let bill = document.querySelector("#bill")
let tip = document.querySelector("#tip")
let people = document.querySelector("#people")

let calculate = document.getElementById("calculate")
let reset = document.getElementById("reset")

let results = document.querySelector(".results")
let tipToBePaid, tipAmountPerPersons, billPlusTip

// reset all inputs to empty
let resetValues = () => {
    bill.value = ""
    tip.value = ""
    people.value = ""

    results.innerHTML = ""
    results.style.backgroundColor = "transparent"
}

// if all inputs are provided, calculate and insert values
let calculateTip = () => {
    if(bill.value && tip.value && people.value) {
        tipToBePaid = ((tip.value/100) * bill.value).toFixed(2)
        billPlusTip = (parseFloat(bill.value) + parseFloat(tipToBePaid)).toFixed(2)
        tipPerPersons = (tipToBePaid/people.value).toFixed(2)
        billPerPersons = (billPlusTip/ people.value).toFixed(2)

        results.innerHTML = `
            <h2 id="tip-amount">Total Tip: <span class="numbers">${tipToBePaid}</span></h2>
            <h2 id="total-bill">Total Bill: <span class="numbers">${billPlusTip}</span></h2>            
            <h2 id="tip-person">Tip per Person: <span class="numbers">${tipPerPersons}</span></h2>           
            <h2 id="bill-person">Bill per Person: <span class="numbers">${billPerPersons}</span></h2>
        `
        results.style.backgroundColor = "teal"
    }else {
        alert("Please insert positive amounts for bills, tips and people")
    }
}

let tipCalculatorBtn = (e) =>{
    if(e.target.id === "calculate") {
        calculateTip()
    } 
    else if(e.target.id === "reset"){
        resetValues()
    }   
}

document.addEventListener('click', tipCalculatorBtn)