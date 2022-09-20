let  currentUser = JSON.parse(localStorage.getItem('currentUserIndex'))  
let currentUserBalance = currentUser.balance


const withdraw =()=>{
    if (inputAmount.value==""||transPin.value==""){
        thirdDisp.innerHTML = `There's still an unfilled fields`
    }
    else if (transPin.value != currentUser.transactionPin){
        thirdDisp.innerHTML= `Invalid pincode`
    }
    else if (inputAmount.value > currentUserBalance) {
        thirdDisp.innerHTML = `Insufficient Balance`
    }
    else{
        currentUserBalance = currentUserBalance - inputAmount.value
        currentUser.balance = currentUserBalance
        localStorage.setItem('currentUserIndex', JSON.stringify(currentUser))

        let allUser = JSON.parse(localStorage.bankDetails)
        
        let index;
        for(a in allUser){
            if(allUser[a].Email == currentUser.Email){
                index =a 
            }
        }
        allUser[index]=currentUser
        localStorage.bankDetails = JSON.stringify(allUser)

        thirdDisp.innerHTML = `Dear ${currentUser.firstName} <br> Successfully withrawn $ ${inputAmount.value} New blance = $ ${currentUserBalance}`
    }
}

const deposit =()=> {
    if (inputAmount.value == ""){
        secondDisp.innerText ="Input an amount to be deposited"
    } 
    else{
        currentUserBalance = currentUserBalance + Number(inputAmount.value)
        currentUser.balance = currentUserBalance
        localStorage.setItem('currentUserIndex', JSON.stringify(currentUser))

        let allUser = JSON.parse(localStorage.bankDetails)
        
        let index;
        for(a in allUser){
            if(allUser[a].Email == currentUser.Email){
                index =a 
            }
        }
        allUser[index]=currentUser
        localStorage.bankDetails = JSON.stringify(allUser)

        secondDisp.innerHTML = `Succesfully deposited $ ${inputAmount.value} New balance = $ ${currentUserBalance}`
    }   
}
const transfer = () =>{
    if (inputAmount.value==""||receiverAcc.value==""||receiverName.value==""||pin.value==""){
        thirdDisp.innerText = "There's still an unfilled fields"
    }
    else if (inputAmount.value > balance) {
        thirdDisp.innerText = `Insufficient Balance`
    }else {
        currentUserBalance = currentUserBalance - Number(inputAmount.value)
        
        let index;
        for(a in allUser){
            if(allUser[a].Email == currentUser.Email){
                index =a 
            }
        }
        allUser[index]=currentUser
        localStorage.bankDetails = JSON.stringify(allUser)

        thirdDisp.innerHTML = `Dear Customer <br> You have Successfully transferred $ ${inputAmount.value} to ${receiverName.value}<br>New blance = $ ${currentUserBalance}`
    }
    inputAmount.value == ""
    receiverName.value == ""
    receiverName.value == ""
    pin.value == ""
}

const checkBalance = () =>{
    display.innerHTML =`Dear Customer <br> Current Balance = $ ${currentUserBalance}`
}
