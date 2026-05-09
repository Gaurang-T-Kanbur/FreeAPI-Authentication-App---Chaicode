const token = localStorage.getItem("token");

if (!token) {

    window.location.replace("../HTML/login.html");

}

const profile_block = document.getElementById("profile-container")
const username_contain = document.getElementById("profile-username")
const email_contain = document.getElementById("profile-email")
const role_contain = document.getElementById("profile-role")
const logoutBtn = document.getElementById("logout-btn")



    let userProfile
    fetch("https://api.freeapi.app/api/v1/users/current-user",  
       {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: `Bearer ${token}`},
      } )
      .then((response) => {
        if (!response.ok) {

        localStorage.removeItem("token");

        window.location.replace("../HTML/login.html");

    }
        return response.json()

       } )
      .then((data) => {
        userProfile = data.data

        username_contain.innerText += " " + userProfile.username
        email_contain.innerText += " " + userProfile.email
        role_contain.innerText += " " + userProfile.role
      })

  
      logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("token");

    window.location.replace("../HTML/login.html");

});

