const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#senhaUsuario");

const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword")
const confirmPassword = document.querySelector("#confirmarSenhaUsuario")

togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";

    password.type = type;

    // this -> elemento
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

toggleConfirmPassword.addEventListener("click", function () {
    const type = confirmPassword.type === "password" ? "text" : "password";

    confirmPassword.type = type

    //this -> elemento
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
})