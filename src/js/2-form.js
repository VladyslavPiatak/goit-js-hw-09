const form = document.querySelector(`.feedback-form`);
const key = "feedback-form-state";

const savedSet = localStorage.getItem(key);
const parsedSet = JSON.parse(savedSet);

if (savedSet) {
    form.elements.email.value = parsedSet.email;
    form.elements.message.value = parsedSet.message;
}




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
        email: form.elements.email.value,
        message: form.elements.message.value
    });
    localStorage.removeItem(key);
    form.reset();
};