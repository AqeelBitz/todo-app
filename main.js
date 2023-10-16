// Get the modal
var modal = document.getElementById("myModal");

let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

})

// if(modal.style.display = "none")
// {
//   newdata.style.display = "none";

// }




// let roll_Input = document.getElementById("roll_input");
// let form = document.getElementById("mymodal");
// form.addEventListener("submit", (e)=>{e.preventDefault;})

// Get the button that opens the modal
var btn = document.getElementById("Add_Btn");
var roll_Input = document.getElementById("roll_input");
var name_Input = document.getElementById("name_input");
var fname_Input = document.getElementById("fname_input");
var phone_Input = document.getElementById("phone_input");
var email_Input = document.getElementById("email_input");
var dob_Input = document.getElementById("dob_input");

let newdata = document.getElementById("newdata"); 


let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");
let msg4 = document.getElementById("msg4");
let msg5 = document.getElementById("msg5");
let msg6 = document.getElementById("msg6");

// let msg = document.getElementsByClassName("msg");

let newroll = document.getElementById("newroll");
let newname = document.getElementById("newname");
let newfname = document.getElementById("newfname");
let newphone = document.getElementById("newphone");
let newemail = document.getElementById("newemail");
let newdob = document.getElementById("newdob");
let myedit = document.getElementById("myedit");
let mydelete = document.getElementById("mydelete");
// Get the <span> element that closes the modal
var close = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function(e) {

  
  // e.preventDefault();
  modal.style.display = "block";
  roll_Input.value= "",
  name_Input.value= "",
  fname_Input.value= "",
  phone_Input.value= "",
  email_Input.value= "",
  dob_Input.value= ""
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let formValidation =()=>{

  let x = email_Input.value;
    if(roll_Input.value === "" ){
      msg1.innerHTML = "field Can not be empty"
    }
    else if(roll_Input.value.length>7){
      msg1.innerHTML = "length should be < 7 ";
    }
    else{
      msg1.innerHTML = "";
    }
    if(name_Input.value === "" ){
      msg2.innerHTML = "field Can not be empty"
    }
    else if(name_Input.value.length<3||name_Input.value.length>20){
      msg2.innerHTML = "length can not be < 3 or > 20";
    }
    else{
      msg2.innerHTML = "";
    }
    if(fname_Input.value === "" ){
      msg3.innerHTML = "field Can not be empty"
    }
    else if(fname_Input.value.length<3||fname_Input.value.length>20){
      msg3.innerHTML = "length can not be < 3 or > 20";
    }
    else{
      msg3.innerHTML = "";
    }
    if(phone_Input.value === "" ){
      msg4.innerHTML = "field Can not be empty"
    }
    else if(phone_Input.value.length!=11){
      msg4.innerHTML = "length should be 11 digits";
    }
    else{
      msg4.innerHTML = "";
    }
    if(email_Input.value === "" ){
      msg5.innerHTML = "field Can not be empty"
    }
    else if(email_Input.value.length<5||email_Input.value.length>25){
      msg5.innerHTML = "length can not be < 5 or > 25";
    } 
    else if(x.indexOf("@")<1 || x.lastIndexOf(".")<(x.indexOf("@")<1)+2||(x.lastIndexOf("."))+2>=x.length){
      msg5.innerHTML = "Invalid email";
    } 
    else{
      msg5.innerHTML = "";
    }
    if(dob_Input.value === "" ){
      msg6.innerHTML = "field Can not be empty"
    }
    else{
      msg6.innerHTML = "";
      
    }

    if(roll_Input.value != "" && roll_Input.value.length<7 && name_Input.value != "" && fname_Input.value != "" && phone_Input.value != "" && email_Input.value != "" && dob_Input.value != "" 
    && email_Input.value.length>5 && email_Input.value.length<25 &&phone_Input.value.length==11 && fname_Input.value.length>3&&fname_Input.value.length<20
    && name_Input.value.length>3&&name_Input.value.length<20)
    {
      let con = confirm("Do you want to save record?"); 
      if ( con == true) {
        acceptData();
        modal.style.display = "none";
        setTimeout(function() {
          location.reload();
        }, 100);

    } else {
      setTimeout(function() {
        location.reload();
      }, 100);
      alert("Save Cancelled!")
    }
    }
}



let data = [];




// let data = {};

let acceptData=(e)=>{
// e.preventDefault();
 if(roll_Input.value !=="" && name_Input.value !== "" && fname_Input.value !== "" && phone_Input.value !=="" && email_Input.value!==""
  && dob_Input.value!==""){
  data.push({
  roll: roll_Input.value,
  name: name_Input.value,
  fname: fname_Input.value,
  phone: phone_Input.value,
  email: email_Input.value,
  dob: dob_Input.value
  })

  }

  localStorage.setItem("data", JSON.stringify(data));
  console.log(data)

  createData();
 

}

if(newdata.innerHTML===""){
  newdata.style.display = "none";
}
let createData=()=>{
  newdata.innerHTML = "";
  data.map((x,y)=>{
    return (
  newdata.innerHTML += `
  <table id="${y}" >
  <tr class="table-row">
    <td class="table-data" id="newroll">${x.roll}</td>
    <td class="table-data" id="newname">${x.name}</td>
    <td class="table-data" id="newfname">${x.fname}</td>
    <td class="table-data" id="newphone">${x.phone}</td>
    <td class="table-data" id="newemail">${x.email}</td>
    <td class="table-data" id="newdob">${x.dob}</td>
    <td class="table-data" id="options">
      <button href="" id="myedit" onClick="EditData(this)">Edit</button>
      <button type="text/html" href="" id="mydelete" onClick="DeleteData(this);createData()">Delete</button>
    </td>
  </tr>
</table>



  `

   );
})

  data.sort((a, b) => {
    return a.roll - b.roll;
    
});
  formReset();

}
let formReset=()=>{
  data["roll"] = "";
  data["name"] = "";
  data["fname"] = "";
  data["phone"] = "";
  data["email"] = "";
  data["dob"] = "";
  roll_Input.value ="";
  name_Input.value ="";
  fname_Input.value ="";
  phone_Input.value ="";
  email_Input.value ="";
  dob_Input.value ="";
}

// mydelete.addEventListener("text/html", (e)=>{
//   e.preventDefault();

// })

let  DeleteData=(e)=>{

  console.log("deleted")
  let con = confirm("Are you sure you want to delete!");
  if(con == true){
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem("data", JSON.stringify(data));
    e.preventDefault();
    alert("deleted!")
  
  }
  
  else{
    alert("delete cancelled!");
  }  

}

let EditData=(e)=>{
  let selectedData = e.parentElement.parentElement; 
  modal.style.display = "block";
  roll_Input.value =selectedData.children[0].children[1].innerHTML;
  name_Input.value =selectedData.children[1].children[1].innerHTML;
  fname_Input.value =selectedData.children[2].children[1].innerHTML;
  phone_Input.value =selectedData.children[3].children[1].innerHTML;
  email_Input.value =selectedData.children[4].children[1].innerHTML;
  dob_Input.value =selectedData.children[5].children[1].innerHTML;
 
  DeleteData(e);

}
(()=>{
  data = JSON.parse(localStorage.getItem("data")) || [];
  createData();
})()