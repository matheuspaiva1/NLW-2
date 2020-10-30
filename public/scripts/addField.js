// PROCURAR BOTÃO
document.querySelector("#add-time")
// QUANDO CLICAR NO BOTÃO
.addEventListener('click', cloneField) // "ESCUTA" QUALQUER EVENTO (OUVIDOR DE EVENTOS)

// EXECUTAR UMA AÇÃO 
function cloneField() { 
    // criar uma função  
    // DUPLICAR OS CAMPOS, que campo????
    // é um valor constante (não pode ser alterado)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // clonar um elemento

    // limpar os campos. que campos?

    // COLOCAR NA PÁGINA: onde???
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // add um filho, no "()" dizer qual

} 

