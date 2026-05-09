const formAction = document.getElementById('login-form')
const username = document.getElementById('login-username')
const password = document.getElementById('login-password')
const statusMsg = document.getElementById('login-message')
const loginBtn = document.getElementById('login-btn')


formAction.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    
    const usernameValue = username.value
    const pwdValue = password.value
    

   const userData = {
            
            password: pwdValue,
            
            username: usernameValue,
        }

        
    loginBtn.innerText = "Logging In ..."
    loginBtn.disabled = true

    try {
        const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify(userData),
       
    })

    const data = await response.json()
  statusMsg.classList.remove("success", "error")

    if(response.ok) {
        statusMsg.innerText = "User Logged In Successfully ✅"
        statusMsg.classList.add("success")
        formAction.reset()
        localStorage.setItem("token", data.data.accessToken);
         window.location.replace("../HTML/profile.html");
    } else {
        statusMsg.innerText = data.message || "Something went wrong ❌"
        statusMsg.classList.add("error")
    }
        
    } catch (error) {
        statusMsg.classList.remove("success", "error")
        statusMsg.innerText = "Network Error ❌"
        statusMsg.classList.add("error")
    } finally {
        loginBtn.innerText = "Login"
    loginBtn.disabled = false
    }

    
})