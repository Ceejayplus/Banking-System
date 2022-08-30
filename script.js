customerDetails = []

let accountNum =Math.round(Math.random()*1000000)
// let userPin = Math.round(Math.random()*10000)
const signUp = () => {
    userDetails = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : useremail.value,
        phonenumber : userphonenumber.value,
        password : userpassword.value,
        accountNumber : accountNum
    }

    if((firstName = firstname.value) && (lastName = lastname.value) && (Eamil = useremail.value) && (phonenumber = userphonenumber.value) && (password = userpassword.value)){
        customerDetails.push(userDetails)
        firstname.value = ""
        lastname.value = ""
        useremail.value = ""
        userphonenumber = ""
        
    }
}