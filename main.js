let form = document.querySelector("form:first-of-type");
console.log(form);
form.addEventListener("submit", function(e){
    e.preventDefault(); 
    let usernameInput=document.querySelector("#username");
    let emailInput=document.querySelector("#email");
    console.log(usernameInput);
    let formOK=true;
    if (usernameInput.value !=="")
    {
        e.target.submit();
        
    }
    else if (usernameInput.value =="")
    {
    
        let inputError = document.createElement("p");
        
        
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        inputError.innerHTML="Veuillez choisir un nom d'utilisateur";
        inputError.classList.add("error");
        usernameInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    else if   (emailInput.value !=="")
    {
        e.target.submit();
    }
    else
    {
        let inputError2 = document.createElement("p");
        let fieldset2= document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        inputError2.innerHTML="Aucun email n'a été saisi.";
        inputError2.classList.add("error");
        emailInput.classList.add("error");
        fieldset2.appendChild(inputError2);
        formOK=false;
    }
});


