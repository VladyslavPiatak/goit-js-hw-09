const form = document.querySelector(`.feedback-form`);
const key = "feedback-form-state";

const savedSet = localStorage.getItem(key);
const parsedSet = JSON.parse(savedSet);

form.elements.email.value = parsedSet.email;
form.elements.message.value = parsedSet.message;

form.addEventListener("input", saveData);
form.addEventListener("submit", clearForm);


function saveData(event) {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };
    localStorage.setItem(key, JSON.stringify(formData));
};

function clearForm(event) {
    event.preventDefault();
    console.log({
        email: inputData.elements.email.value,
        message: inputData.elements.message.value
    });
    // localStorage.removeItem(key);
    // localStorage.clear();
    inputData.reset();
};