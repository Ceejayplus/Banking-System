customerDetails = []
if(localStorage.bankDetails){
    customerDetails =JSON.parse(localStorage.getItem('bankDetails'))
}

let accountNum =Math.round(Math.random()*10000000000)
let transacPin = Math.round(Math.random()*10000)
// let userPin = Math.round(Math.random()*10000)
const createAcc = () => {
    userDetails = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : useremail.value,
        phonenumber : userphonenumber.value,
        password : userpassword.value,
        accountNumber : accountNum,
        transactionPin : transacPin
    }

    if((firstName = firstname.value) && (lastName = lastname.value) && (Eamil = useremail.value) && (phonenumber = userphonenumber.value) && (password = userpassword.value)){
        customerDetails.push(userDetails)
        firstname.value = ""
        lastname.value = ""
        useremail.value = ""
        userphonenumber.value = ""
        userpassword.value = ""
        window.location.href = ""
    }
    else{
        alert("PLEASE FILL THE REQUIRED SPACES")
    }
    localStorage.setItem('bankDetails', JSON.stringify(customerDetails))
}

const signUp = () =>{
    window.location.href = "signup.html"
}