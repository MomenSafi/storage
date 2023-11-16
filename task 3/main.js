var Register = document.getElementById('Register');
var Login = document.getElementById('Login');

var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

var emailInputcheak = document.getElementById('aemail');
var passwordInputcheak = document.getElementById('apassword');

Register.addEventListener('click', save);
Login.addEventListener('click', cheakinfo);

function save(event) {
    var email = emailInput.value;
    var password = passwordInput.value;

    sessionStorage.setItem("emailKey", email);
    sessionStorage.setItem("passwordkey", password);
}

function cheakinfo(event) {
    event.preventDefault();
    
    var enteredEmail = emailInputcheak.value;
    var enteredPassword = passwordInputcheak.value;

    var storedEmail = sessionStorage.getItem("emailKey");
    var storedPassword = sessionStorage.getItem("passwordkey");

    if (enteredEmail === storedEmail)
    {
        document.getElementById('wronge').style.display = "none";
        if (enteredPassword === storedPassword)
        {
            window.location.href = 'welcome.html';
        }
        else
        {
            document.getElementById('wrongp').style.display = "block";
        } 
    }
    else
    {
        document.getElementById('wronge').style.display = "block";
    }
}
