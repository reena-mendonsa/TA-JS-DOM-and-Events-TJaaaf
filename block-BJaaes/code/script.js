let form = document.querySelector('form');

let errorMsg ="";

function containsOnlyNumbers(str){
   return str.split(' ').every(e => Number(e));
}


function handleSubmit(event){
   event.preventDefault();
   let usernameElm = event.target.elements.firstName;
   let userParent = usernameElm.parentElement;

   let email = event.target.elements.email;
   let emailParent = email.parentElement;

   let phNumber = event.target.elements.phNum;
   let phParent = phNumber.parentElement;

   let passwd = event.target.elements.password;
   let passwdParent = passwd.parentElement;

   let confirmpwd = event.target.elements.confirmPassword;
   let confirmParent = confirmpwd.parentElement;
   
   

   if(containsOnlyNumbers(usernameElm.value)){
       errorMsg="You can't use number in the name field ";
       userParent.classList.add('error');
      usernameElm.nextElementSibling.innerText = errorMsg;
   }else{
       errorMsg=" ";
       userParent.classList.add('success');
       userParent.classList.remove('error');
   }

   let arr = email.value.split('@');

   if(arr[0].length <6){
       errorMsg = "Email must be at least 6 characters";
   email.nextElementSibling.innerText = errorMsg;
   emailParent.classList.add('error');
   }
   else{
       errorMsg= " ";
       emailParent.classList.add('success');
       emailParent.classList.remove('error');
   }

   if(!containsOnlyNumbers(phNumber.value)){
       errorMsg= "Phone numbers can only be a number";
       phNumber.nextElementSibling.innerText = errorMsg;
       phParent.classList.add('error');
   }
   else if(phNumber.value.length <7){
       errorMsg="Length of phone number can't be less than 7";
       phNumber.nextElementSibling.innerText = errorMsg;
       phParent.classList.add('error');
   }
   else{
       errorMsg=" ";
       phParent.classList.add('success');
       phParent.classList.remove('error');
   }

    if(passwd.value !== confirmpwd.value){
       errorMsg="Password not matching";
       confirmpwd.nextElementSibling.innerText = errorMsg;
       confirmParent.classList.add('error');
    }
    else{
        errorMsg =" ";
        confirmParent.classList.add('success');
        confirmParent.classList.remove('error');
    }


    if(errorMsg ===" "){
        alert('User Added Successfully!');
    }
}


form.addEventListener('submit',handleSubmit);
