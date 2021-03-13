// Sign in, masuk ke login.html
const loginAdmin = document.getElementById("login-form");
//console.log(loginAdmin);
loginAdmin.addEventListener("submit", e=>{
    e.preventDefault();
    const loginEmail = loginAdmin['email'].value;
    const loginPassword = loginAdmin['password'].value;
    auth.signInWithEmailAndPassword(loginEmail,loginPassword).then(()=>{
        console.log("Login Success");
        location = "./admin.html"
    }).catch(err=>{
        console.log(err.message);
        const signUpError = document.getElementById('loginError');
        signUpError.innerText = err.message;
    })
})

