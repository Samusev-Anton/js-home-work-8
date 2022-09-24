import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputArea =document.querySelector('input')
const formData = {};

populateFormData();


form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', throttle(onTextareaInput, 1000));
form.addEventListener('input', throttle(onFormInput, 1000));

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
}


function onFormSubmit(evt) {
    evt.preventDefault();
    const lenghtFormData = Object.keys(formData).length;

    if (lenghtFormData < 2) {
        alert('поля не должны быть пустыми');
    }
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem('formData');
    for(var key in formData){
        delete formData[key];
}
}

function populateFormData() {
    const savedMessage = localStorage.getItem('formData');
    const formSavedMessage = JSON.parse(savedMessage);
    console.log(formSavedMessage);
    if (savedMessage) {
        console.log(savedMessage);
        textarea.value = formSavedMessage.message;
        inputArea.value = formSavedMessage.email;
    }
}

