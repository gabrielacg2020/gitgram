function send() {
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;

    if (username.length < 6 || password.length < 6) {
        alert("É necessário ter mais que 6 caracteres");

        return { sucess: false };
    }

    return {
        sucess: true,
        username: username,
        password: password,
    };
}

function register() {
    const email = document.querySelector("input[name='email']").value;
    const fullname = document.querySelector("input[name='fullname']").value;
    
    if (email.length < 6 || fullname.length < 6) {
        alert("É necessário ter mais que 6 caracteres");

        return;
    }
    
    const usernamePasswordValidation = send();

    if (usernamePasswordValidation.sucess) {
        const data = {
            email: email,
            fullname: fullname,
            username: usernamePasswordValidation.username,
            password: usernamePasswordValidation.password,
        };

        console.log(database(data));
    }

}

const table = []

function database(data) {
    table.push(data);

    return table;
}