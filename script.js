const form = document.getElementById("contact-form")
const contactCheck = `<img src="./images/check.png" alt="check-logo"/>`
const contactX = `<img src="./images/x.png" alt="x-logo"/>`
contactName = []
contactNumber = []
let rows = ' '

form.addEventListener("submit", function(e){
    e.preventDefault()

    addRow()
    updateList()
})

function addRow(){
    const inputName = document.getElementById("input-contact-name")
    const inputNumber= document.getElementById("input-contact-number")

    if(contactNumber.includes(inputNumber.value) || contactName.includes(inputName.value)){
        alert(`The contact: ${inputName.value} - Number: ${inputNumber.value} already exists in your list!`)
    }else{
        contactNumber.push(inputNumber.value)
        contactName.push(inputName.value)

        let row = `<tr>`
        row += `<td>${inputName.value}</td>`
        row += `<td>${inputNumber.value}</td>`
        row += `<td>${inputNumber.value >= 11 ? contactCheck : contactX}</td>`
        row += `</tr>`
    
        rows += row
    }
    inputName.value = ''
    inputNumber.value = ''
}

function updateList(){
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = rows
}