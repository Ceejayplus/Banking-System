userDetails = [
    {
        pincode:"1226",
        firstname:"Ade",
        lastname:"Ola",
        accountNumber:"0165783993",
        userBalance:1000
    },
    {
        pincode:"2020",
        firstname:"Enny",
        lastname:"Betty",
        accountNumber:"0189657324",
        userBalance:1000
    }
]


const withdraw = () =>{
    
    
    if (inputAmount.value==""||pin.value==""){
        display.innerText = "fill all unfilled fields"
    }
    else{
        var pinValue = pin.value
        var passcode = false
        for (let index = 0; index < userDetails.length; index++) {
            if (pinValue == userDetails[index].pincode){
                passcode = true
            }
            balance = userDetails[index].pincode
            username = userDetails[index].firstname
        }
        if (passcode){
            if (inputAmount.value > balance){
                display.innerText = `Insufficient Balance`
            } 
            else{
                balance = balance - inputAmount.value
               
                display.innerHTML = `Dear ${username} <br> Successfully withrawn $ ${inputAmount.value} New blance = $ ${balance}`
            }
        }
        else{
            display.innerText = "invalid pincode"
        }
    }
}

const deposit = () => {
    if (inputAmount.value == ""){
        display.innerText ="Input an amount to be deposited"
    } else{
        var pinValue = pin.value
        var passcode = false
        for (let index = 0; index < userDetails.length; index++) {
            if (pinValue == userDetails[index].pincode){
                passcode = true
            }
            balance = userDetails[index].pincode
            username = userDetails[index].firstname
        }
        if (passcode){
            balance = Number(balance) + Number(inputAmount.value)
            display.innerText = `Succesfully deposited $ ${inputAmount.value} New balance = $ ${balance}`
        }
    }   
}

const checkBalance = () =>{
    display.innerText =`Current Balance = $ ${balance}`
}