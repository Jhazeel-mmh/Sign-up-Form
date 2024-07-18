
const form = document.querySelector("form");

let password = document.querySelector("#password");
let validation = document.querySelector("#validation");
let passwordPromt = document.querySelector(".password-msg")



form.addEventListener("submit", (e) => {
    let formTar = e.target;

    if (!(formTar.checkValidity())){
        e.preventDefault();
    }

    if (password.value != validation.value){
        e.preventDefault();
        passwordPromt.textContent = "Passwords do not match"; 
    }
})


let inputRequired = document.querySelectorAll("input[required]");

inputRequired.forEach(i => {
    i.addEventListener("input", () => {
        if (!i.validity.valid){
            i.classList.add("invalid");
            document.querySelector(`#${i.id} + span`).classList.add("invalid-spans");      
        } else {
            i.classList.remove("invalid");
            document.querySelector(`#${i.id} + span`).classList.remove("invalid-spans");
            document.querySelector(`#${i.id} + span`).classList.add("valid-spans");
        }
    });
});

