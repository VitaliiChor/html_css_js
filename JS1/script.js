function showPassword() {
    this.classList.toggle('fa-eye-slash');
    const input = document.getElementById(this.getAttribute("data-pas"));
    input.type = input.type === "password" ? "text" : "password";
}

const icon = document.getElementsByClassName('icon-password');

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', showPassword)
}


function validPassword() {
    let res = document.getElementById('password').value;
    let res2 = document.getElementById('confirmPassword').value;

     if (res === res2) {
        alert('Welcome');
        document.getElementById("show-error").remove();
    } else {
        document.getElementById('show-error').style.display='block';
    }
}


document.getElementById('sub').addEventListener('click', validPassword);


