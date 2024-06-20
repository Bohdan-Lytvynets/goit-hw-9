const form = document.querySelector(".feedback-form")
const FORM_KEY = "feedback-form-state"

form.addEventListener("input",saveData)
form.addEventListener("submit", submitForm)


function saveData () {
    const formData = {
        email:form.email.value.trim(),
        message:form.message.value.trim(),
    }
    localStorage.setItem(FORM_KEY,JSON.stringify(formData))
}


const checkForm = localStorage.getItem(FORM_KEY)
if (checkForm) {
    const parsedData = JSON.parse(checkForm)
    form.email.value = parsedData.email || ""
    form.message.value = parsedData.message || ""
}

function submitForm(event) {
    event.preventDefault()
    const submitFormData = {
        email:form.email.value.trim(),
        message:form.message.value.trim(),
    }
    if (submitFormData.email === "" || submitFormData.message === "") {
        return alert("Fill please all fields")
    }
    console.log (submitFormData)


    localStorage.removeItem(FORM_KEY)
    form.reset()
}