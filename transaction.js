// localStorage.setItem("userBalance", 1000)
let balance = localStorage.getItem("userBalance")

const tapCheck = () =>{
    if (button.innerText == "Public") {
        display0.innerHTML = `Dear User <br> Your Current Balance => $ ${balance}`;
        button.innerText = `Hide`;
    } else {
        
        display0.innerHTML = `Current Balance <br> --->This is hidden by default but you can tap the button below to see Current Balance`
        button.innerText = "Public";
    } 
}

const withdraw = () =>{
    if (inputAmount.value==""||pin.value==""){
        display.innerText = "There's still an unfilled fields"
    }
    else{
        if (inputAmount.value > balance) {
            display.innerText = `Insufficient Balance`
        }
        else {
            balance = balance - inputAmount.value

            display.innerHTML = `Dear User <br> Successfully withrawn $ ${inputAmount.value} New blance = $ ${balance}`
            localStorage.setItem("userBalance", balance)
        }
    }
}

const deposit = () => {
    if (inputAmount.value == ""){
        display2.innerText ="Input an amount to be deposited"
    } 
    else{
        balance = Number(balance) + Number(inputAmount.value)
        display2.innerHTML = `Succesfully deposited $ ${inputAmount.value} New balance = $ ${balance}`
        localStorage.setItem("userBalance", balance)
    }   
}

const checkBalance = () =>{
    display.innerHTML =`Dear Customer <br> Current Balance = $ ${balance}`
}

// USING A BIG OBJECT, YOU CAN JUST ERASE THIS IF YOU WON'T NEED IT, I used it for my own practice and thought you might need the code

// userDetails = [
//     {
//         pincode:"1226",
//         firstname:"Ade",
//         lastname:"Ola",
//         accountNumber:"0165783993",
//         userBalance:1000
//     },
//     {
//         pincode:"2020",
//         firstname:"Enny",
//         lastname:"Betty",
//         accountNumber:"0189657324",
//         userBalance:1000
//     }
// ]

// const withdraw = () =>{
//     if (inputAmount.value==""||pin.value==""){
//         display.innerText = "There's still an unfilled fields"
//     }
//     else{
//         var pinValue = pin.value
//         var passcode = false
//         for (let index = 0; index < userDetails.length; index++) {
//             if (pinValue == userDetails[index].pincode){
//                 passcode = true
//             }
//             balance = userDetails[index].pincode
//             username = userDetails[index].firstname
//         }
//         if (passcode){
//             if (inputAmount.value > balance){
//                 display.innerText = `Insufficient Balance`
//             } 
//             else{
//                 balance = balance - inputAmount.value
               
//                 display.innerHTML = `Dear ${username} <br> Successfully withrawn $ ${inputAmount.value} New blance = $ ${balance}`
//             }
//         }
//         else{
//             display.innerText = "invalid pincode"
//         }
//     }
// }

// const deposit = () => {
//     if (inputAmount.value == ""){
//         display2.innerText ="Input an amount to be deposited"
//     } else{
//         var pinValue = pin.value
//         var passcode = false
//         for (let index = 0; index < userDetails.length; index++) {
//             if (pinValue == userDetails[index].pincode){
//                 passcode = true
//             }
//             balance = userDetails[index].pincode
//             username = userDetails[index].firstname
//         }
//         if (passcode){
//             balance = Number(balance) + Number(inputAmount.value)
//             display2.innerText = `Succesfully deposited $ ${inputAmount.value} New balance = $ ${balance}`
//         }
//     }   
// }