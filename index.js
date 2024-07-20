const arrow = document.getElementById('arrow')
const email = document.getElementById('email')
const inputContainer = document.getElementById('input-container')
const error = document.getElementById('error')
const errorText = document.getElementById('error-text')
const success = document.getElementById('success')

arrow.addEventListener('click', () => {
    if(email.value == ''){
        repair()
    }else if(!email.value.includes('@gmail.com')){
        repair()
    }else {
        inputContainer.style.borderColor = 'var(--desaturated-red)'
        error.style.display = 'none'
        errorText.style.display = 'none'
        success.style.display = 'flex'
        email.value = ''
    }
})

const repair = () => {
    inputContainer.style.borderColor = 'var(--soft-red)'
    error.style.display = 'flex'
    errorText.style.display = 'flex'
    success.style.display = 'none'
}