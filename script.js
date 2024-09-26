function usernamePasswordValidatior() {
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

function login(){
    const usernamePasswordValidation = usernamePasswordValidatior();

    if (usernamePasswordValidation.sucess) {
        const userFund = table.find(function (row){
            if (row.username == usernamePasswordValidation.username){
                return true;
            }

            return false;
        });

        if (!userFund || userFund.password != usernamePasswordValidation.password) {
            alert ("O usuário e senha informados não podem ser encontrados!");

            return;
        }

        alert("Loboi");

    }
}

function register() {
    const email = document.querySelector("input[name='email']").value;
    const fullname = document.querySelector("input[name='fullname']").value;
    
    if (email.length < 6 || fullname.length < 6) {
        alert("É necessário ter mais que 6 caracteres");

        return{
            sucess: false,
        };
    }
    
    const usernamePasswordValidation = usernamePasswordValidatior();

    if (usernamePasswordValidation.sucess) {
        const data = {
            email: email,
            fullname: fullname,
            username: usernamePasswordValidation.username,
            password: usernamePasswordValidation.password,
        };

        console.log(database(data));

        return{
            sucess: true,
            data:data
        };
    }

}

const table = [
    {
        email: "gabriela@liveonsolutions.com",
        fullname: "Gabriela",
        username: "Gabriela",
        password: "123456",
    },
    {
        email: "",
        fullname: "",
        username: "",
        password: "",
    },
]

function database(argument){
    table.push(argument);

    return table;
}