var  throttle  = require ( 'lodash.throttle' ) ; 

const email=document.querySelector("input[name=email]")
const form=document.querySelector(".feedback-form");
const message= document.querySelector("textarea[name=message]")
let storage='';
let parsJson;
if(localStorage.getItem("feedback-form-state")){
    parsJson=JSON.parse(localStorage.getItem("feedback-form-state"))
    email.value=parsJson.email;
    message.value=parsJson.message;
}
const  json={
email:email.value,
message:message.value,
};
form.addEventListener("input", throttle(onInput,500))
form.addEventListener("submit",onSubmit)

function onInput(){
    json.email=email.value
        json.message=message.value
         console.log(json);
         storage=JSON.stringify(json);
         localStorage.setItem("feedback-form-state", storage)
}
function onSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log('submit')
}


// const dog = JSON.parse(json);
// const theme = localStorage.getItem("ui-theme");

