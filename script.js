const formAction = document.getElementById('register-form')
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const role = document.getElementById('role')
const statusMsg = document.getElementById('status-message')
const registerBtn = document.getElementById('register-btn')


formAction.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const emailValue = email.value
    const usernameValue = username.value
    const pwdValue = password.value
    const roleValue = role.value

   const userData = {
            email: emailValue, 
            password: pwdValue,
            role: roleValue,
            username: usernameValue,
        }

        
    registerBtn.innerText = "Registering User ..."
    registerBtn.disabled = true

    try {
        const response = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify(userData),
       
    })

    const data = await response.json()

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    if(response.ok) {
        statusMsg.innerText = "User Registered Successfully ✅"
        statusMsg.classList.add("success")
        formAction.reset()
        window.location.href = "http://127.0.0.1:5500/AUTH/login.html";
    } else {
        statusMsg.innerText = data.message || "Something went wrong ❌"
        statusMsg.classList.add("error")
    }
        
    } catch (error) {
        console.error(error);
    }

    registerBtn.innerText = "Register"
    registerBtn.disabled = false
    
})