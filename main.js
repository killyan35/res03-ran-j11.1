let form = document.querySelector("form:first-of-type");
form.addEventListener("submit", function(e){
    e.preventDefault(); 
    let usernameInput=document.querySelector("#username");
    let emailInput=document.querySelector("#email");
    let passwordInput=document.querySelector("#password");
    let confirmpasswordInput=document.querySelector("#confirm-password");
    
    
    if (usernameInput.value&&emailInput.value&&passwordInput.value&&confirmpasswordInput !=="")
    {
        e.target.submit();
        
    }else{
    
     if (usernameInput.value ==="")
    {
    
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        inputError.innerHTML="Veuillez choisir un nom d'utilisateur";
        inputError.classList.add("error");
        usernameInput.classList.add("error");
        fieldset.appendChild(inputError);
        
    }
    
     if (emailInput.value ==="")
    {
        let inputError2 = document.createElement("p");
        let fieldset2= document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        inputError2.innerHTML="Aucun email n'a été saisi.";
        inputError2.classList.add("error");
        emailInput.classList.add("error");
        fieldset2.appendChild(inputError2);
        
    }
    
    if (passwordInput.value ==="")
    {
        let inputError3 = document.createElement("p");
        let fieldset3= document.querySelector("form:first-of-type fieldset:nth-of-type(3)");
        inputError3.innerHTML="Aucun mot de passe saisi.";
        inputError3.classList.add("error");
        passwordInput.classList.add("error");
        fieldset3.appendChild(inputError3);
        
    }
    
    if (confirmpasswordInput.value ==="")
    {
        let inputError4 = document.createElement("p");
        let fieldset4= document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
        inputError4.innerHTML=" Les deux mots ne passe ne correspondent pas.";
        inputError4.classList.add("error");
        confirmpasswordInput.classList.add("error");
        fieldset4.appendChild(inputError4);
       
    }
    }
    
});
let form1 = document.querySelector("form:nth-of-type(2)");
form1.addEventListener("submit", function(e){
    e.preventDefault(); 
    let studiesInput=document.querySelector("#studies-bep");
    let Input=document.querySelector("#email");

});