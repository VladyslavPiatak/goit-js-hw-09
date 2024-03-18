const inputData = document.querySelector(`.feedback-form`);
const key = "feedback-form-state";

inputData.addEventListener("input", saveData);

function saveData(event) {
    const formData = {
        email: inputData.elements.email.value.trim(),
        message: inputData.elements.message.value.trim()
    };
    localStorage.setItem(key, JSON.stringify(formData));
}