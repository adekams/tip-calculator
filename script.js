let bill = document.querySelector("#bill")
let tip = document.querySelector("#tip")
let people = document.querySelector("#people")

let calculate = document.getElementById("calculate")
let reset = document.getElementById("reset")

let tipAmount = document.querySelector("#tip-amount")
let tipForEachPerson = document.querySelector("#tip-person")
let totalBill =document.querySelector("#total-bill")
let billForEachPerson =document.querySelector("#bill-person")

let results = document.querySelector(".results")
let tipToBePaid, tipAmountPerPersons, billPlusTip

// reset all inputs to empty
let resetValues = () => {
    bill.value = ""
    tip.value = ""
    people.value = ""

    tipAmount.innerHTML = ""
    tipForEachPerson.innerHTML = ""
    billForEachPerson.innerHTML = ""
    totalBill.innerHTML = ""

    results.style.backgroundColor = "transparent"
}

// if all inputs are provided, calculate and insert values
let calculateTip = () => {
    if(bill.value && tip.value && people.value) {
        tipToBePaid = ((tip.value/100) * bill.value).toFixed(2)
        billPlusTip = (parseFloat(bill.value) + parseFloat(tipToBePaid)).toFixed(2)
        tipPerPersons = (tipToBePaid/people.value).toFixed(2)
        billPerPersons = (billPlusTip/ people.value).toFixed(2)

        tipAmount.innerHTML = `
            <h2>Total Tip: <span class="numbers">${tipToBePaid}</span></h2>        
        `
        totalBill.innerHTML = `
            <h2>Total Bill: <span class="numbers">${billPlusTip}</span></h2>            
        `
        tipForEachPerson.innerHTML = `
            <h2>Tip per Person: <span class="numbers">${tipPerPersons}</span></h2>           
        `
        billForEachPerson.innerHTML = `
            <h2>Bill per Person: <span class="numbers">${billPerPersons}</span></h2>
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