const inputData = document.querySelector(`.feedback-form`);
const key = "feedback-form-state";

const savedSettings = localStorage.getItem(key);
const parsedSettings = JSON.parse(savedSettings);
inputData.elements.email.value = parsedSettings.email;
inputData.elements.message.value = parsedSettings.message;

inputData.addEventListener("input", saveData);
inputData.addEventListener("submit", clearForm);


function saveData(event) {
    const formData = {
        email: inputData.elements.email.value.trim(),
        message: inputData.elements.message.value.trim()
    };
    localStorage.setItem(key, JSON.stringify(formData));
};

function clearForm(event) {
    event.preventDefault();
    console.log({
        email: inputData.elements.email.value.trim(),
        message: inputData.elements.message.value.trim()
    });
    inputData.reset();
};