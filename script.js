customerDetails = []
if(localStorage.bankDetails){
    customerDetails =JSON.parse(localStorage.getItem('bankDetails'))
}

let accountNum = "01" + Math.round(Math.random()*100000000)
let transacPin = Math.round(Math.random()*10000)
const createAcc = () => {
    let regexForEmail = /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
      let regexForName = /^[\w]{1,}$/
      let regexForPhonenumber = /^[\d]{11}$/
      let regexForPassword = /^[\d]{4,}$ /
    userDetails = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : useremail.value,
        phonenumber : userphonenumber.value,
        password : userpassword.value,
        accountNumber : accountNum,
        transactionPin : transacPin
    }

    if(regexForName.test(firstname.value) == false){
        validateName.innerHTML = "type a correct name!"
    }
    if(regexForName.test(lastname.value)==false){
        validateName2.innerHTML ="lastname is incorrect!"
    }
    if(regexForEmail.test(useremail.value)== false){
        validateEmail.innerHTML = "input the right email!"
    }
    if(regexForPhonenumber.test(userphonenumber.value)==false){
        validatePhonenumber.innerHTML = "phonenumber must be 11 digits"
    }
    if(regexForPassword.test(userpassword.value)==false){
        validatePassword.innerHTML = "password must be up to 4 digits"
    }
    
    localStorage.setItem('bankDetails', JSON.stringify(customerDetails))
}

const signUp = () => {
    window.location.href = "signup.html"
}
const signIn = () => {
    window.location.href = "signin.html"
}
const logIn = ()  => {
    var myUsername = Username.value
    var userPassword = passWord.value
    var customerDetails = JSON.parse(localStorage.getItem('bankDetails'))
    var detailsChecker = false
    for (let index = 0; index < customerDetails.length; index++){
        if(customerDetails[index].firstName == myUsername && customerDetails[index].password == userPassword){
            detailsChecker = true
            alert('GOOD 👍')
        }
    }
    if(detailsChecker){
        window.location.href = `dashboard.html`
    }else{
        alert(`INVALID USERNAME OR PASSWORD`)
    }
    
}


let balance = 1000
const withdraw = () =>{
    if (inputAmount.value == ""){
        display.innerText = `Input a value`
    }
    else if (inputAmount.value > balance){
        display.innerText = `Insufficient Balance`
    } 
    else{
        balance = balance - inputAmount.value
        display.innerText = `Successfully withrawn ${inputAmount.value} New blance = # ${balance}`
    }
}

const deposit = () => {
    if (inputAmount.value == ""){
        display.innerText =`Input an amount to be deposited`
    } else{
        balance = Number(balance) + Number(inputAmount.value)
        display.innerText = `Succesfully deposited ${inputAmount.value} New balance = # ${balance}`
    }
}

const checkBalance = () =>{
    display.innerText =`Current Balance = # ${balance}`
}
