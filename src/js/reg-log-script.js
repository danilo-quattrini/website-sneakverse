document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const dobDate = new Date(dob);

    const minDate = new Date("1900-01-01");
    
    if (!email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
    } else if (password.length < 8 || password.length > 12) {
        alert("A palavra-passe deve ter entre 8 a 12 caracteres.");
    } else if (dobDate < minDate) {
        alert("Por favor, insira uma data de nascimento válida.");
    } else {
        alert("Formulário submetido com sucesso!");
    }
});
