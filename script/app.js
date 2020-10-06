function handleFloatingLabel() {
   
}

const handlePasswordSwitcher = function () {
    const passwordInput = document.querySelector('.js-password-input'),
        passwordToggle = document.querySelector('.js-password-toggle');

    if(!passwordInput || !passwordToggle) {
        console.error('De classes werden niet gevonden', passwordInput ,passwordToggle);
        return;
    }

    //we gaan luisteren of er geklikt wordt op de checkbox
    passwordToggle.addEventListener('change', function(){
        //Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
        }
        else{
            passwordInput.type = 'password';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});

js-password-toggle

js-password-input