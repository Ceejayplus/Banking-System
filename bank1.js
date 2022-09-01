
// var allStudent = [];
// if(localStorage.studentDetails){
//     allStudent = JSON.parse(localStorage.getItem('studentDetails'))
// }

// function signUp(){
//     var newStudent = {
//         firstName : firstname.value,
//         lastName : lastname.value,
//         Email : email.value,
//         phoneNumber : phonenumber.value,
//         password : Password.value
//     }

    
    
//     if((firstName = firstname.value) && (lastName = lastname.value) && (Email = email.value) && (phoneNumber = phonenumber.value) && (password = Password.value)){
//         allStudent.push (newStudent)
//         firstname.value = ""
//         lastname.value = ""
//         email.value = ""
//         phonenumber.value = ""
//         Password.value = ""
//         window.location.href = "index  .html"
//     }
//     else{
//         alert("PLEASE FILL THE REQUIRED SPACES")
//     }
//     localStorage.setItem('studentDetails', JSON.stringify(allStudent))
// }


// function seArch(){
//     // disp.innerText = allStudent.value
//    var confirmSearch = disp.value
//     // gotten.innerText = randomNumber
//     var randomNumber = "SQI" + Math.round(Math.random()*1000000);
//     var date = new Date();
//     date.getDate;
    
//     var infoStudent = JSON.parse(localStorage.getItem("studentDetails"))
//     if(confirmSearch = allStudent[disp.value]){
//     gotten.innerText =`
//     Hello, the Student's details are:
//     First Name: ${allStudent[disp.value].firstName}
//     Last Name: ${allStudent[disp.value].lastName}
//     Email: ${allStudent[disp.value].Email}
//     Phone Number: ${allStudent[disp.value].phoneNumber}
//     Password: ${allStudent[disp.value].password}
//     Matric no: ${randomNumber}
//     Date: ${date}
//     `
//     gotten.style.fontSize = "25px"
//     gotten.style.color ="white"
// }

//     else{
//         gotten.innerText = "INVALID SEARCH !"
//         gotten.style.color = "red"
//         gotten.style.fontWeight = "700"
//         gotten.style.fontSize = "30px"
//     }
//     // gotten.style.color = "black"
//     // gotten.style.backgroundColor = "white"
// }
function logIn(){
    var myUsername = userName.value
    var userPassword = passWord.value
    var allStudent = JSON.parse(localStorage.getItem("studentDetails"))
    var found = false
for (let index = 0; index < allStudent.length; index++) {
    if(allStudent[index].firstName==myUsername && allStudent[index].password==userPassword){    
       found = true
    //    show.innerText = "GOOD"
        alert("GOOD")

    }
}
if(found){
    window.location.href = "index .html"
}else{
    // show.innerText = "INVALID"
    alert("INVALID")
}
}
// function goLogIn(){
//     window.location.href = "index  .html"
// }
// function listOfStudents(){
//     window.location.href = "index   .html"
// }
// function checkTable(){
//     studentData.innerHTML = ""
//     var allStudent = JSON.parse(localStorage.getItem("studentDetails"))
// for (var index=0; index<allStudent.length; index++) {
//     studentData.innerHTML += `
//     <tr>
//         <td> ${index+1}</td>
//         <td>${allStudent[index].firstName}</td>
//         <td>${allStudent[index].lastName}</td>
//         <td>${allStudent[index].Email}</td>
//         <td>
//             <button class="btn btn-danger btn-md"  onclick="dlit()">Delete</button>
//             <button class="btn btn-info btn-md">Edit</button>
//         </td>
//     </tr>`
// }
// }
