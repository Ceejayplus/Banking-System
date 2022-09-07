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
      let regexForPassword = /^(([\w]+){4,})$/
    userDetails = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : useremail.value,
        phonenumber : userphonenumber.value,
        password : userpassword.value,
        accountNumber : accountNum, 
        transactionPin : transacPin,
        balance : 1000
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
    customerDetails.push(userDetails)
    localStorage.setItem('bankDetails', JSON.stringify(customerDetails))
    window.location.href = "signin.html"
}

const signUp = () => {
    window.location.href = "signup.html"
}
const signIn = () => {
    window.location.href = "signin.html"
}
const logIn = ()  => {
    var myEmail = email.value
    var userPassword = passWord.value
    var customerDetails = JSON.parse(localStorage.getItem('bankDetails'))
    var detailsChecker = false

    let filteredArray = customerDetails.filter((item,index)=>(item.Email==email.value))

    for (let index = 0; index < customerDetails.length; index++){
        if(customerDetails[index].Email == myEmail && customerDetails[index].password == userPassword){
            detailsChecker = true
            alert('GOOD 👍')
            console.log(customerDetails)
        }
    }
    if(detailsChecker){
        localStorage.setItem('currentUserIndex', JSON.stringify(filteredArray))
        window.location.href = `dashboard.html`
    }else{
        alert(`INVALID EMAIL OR PASSWORD`)
    }
    
}


let  currentUserI = JSON.parse(localStorage.getItem('currentUserIndex'))  
let  currentUser = currentUserI[0];
let currentUserBalance = currentUser.balance


firstDisp.innerHTML = `Dear ${currentUser.firstName} <br> Your Account No. is ${currentUser.accountNumber} <br> Your Pincode is ${currentUser.transactionPin}`

const tapCheck =()=>{
    if (button.innerText == "Public") {
        secondDisp.innerHTML = `Dear User <br> Your Current Balance => $ ${currentUserBalance}`;
        button.innerText = `Hide`;
    } else {
        
        secondDisp.innerHTML = `Current Balance is hidden by default, Tap the button below to see your Balance`
        button.innerText = "Public";
    } 
}