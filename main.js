
let loginBtn = document.getElementById("login_btn");
let body  = document.body;
let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let message = document.getElementById('p3')

loginBtn.addEventListener('click', () => {
   let email = input1.value.trim();
   let password = input2.value.trim();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === "" || password === "") {
        message.innerHTML = 'Please fill in all fields!'
        message.style.color = 'red';
    } else if (!emailRegex.test(email)) {
        message.innerHTML = 'Please enter a valid email address!'
        message.style.color = 'red';
    }  else if (password.length < 8) {
        message.innerHTML = 'Password must be at least 8 characters !'
        message.style.color = 'red'
    }
    
    else {
        message.innerHTML = 'Login successful 😊'
        message.style.color = 'green';
    }
})