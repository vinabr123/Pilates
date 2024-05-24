let menu = document.querySelector("#menubar")
let mynav = document.querySelector(".navbar")

let myuser = document.querySelector("#user")
let myform = document.querySelector(".search-form")


let mysearch = document.querySelector("#search")
let mysearchform = document.querySelector(".searchbar")

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
myuser.onclick = () =>{
    myform.classList.toggle('active');
}

mysearch.onclick = () =>{
    mysearchform.classList.toggle('active');
}

//Script do seletor de horário//

document.addEventListener('DOMContentLoaded', (event) =>{
    const timeSlots = document.querySelectorAll('.time-slot');
    const hiddenInput = document.getElementById('selected-time');
    const form = document.getElementById('time-form')

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () =>{
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            hiddenInput.value = slot.getAttribute('data-time')
            form.style.display = 'block';
        })
    })
});

//Fim do script do seletor de horário//

// Função agendar

function agendar() {
    // Capturando os valores dos inputs e selects
    var nome = document.getElementById("nome").value;
    
    var telefone = document.getElementById("telefone").value;
    var sala = document.getElementById("sala").value;
    var horario = document.querySelector(".time-slot.selected").textContent;

    // Verificando se todos os campos obrigatórios foram preenchidos
    if (nome && telefone && sala && horario) {
        // Criando um novo card com as informações do agendamento
        var novoCard = document.createElement("div");
        novoCard.classList.add("card");
        novoCard.innerHTML = `
            <h3>Agendamento:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Sala:</strong> ${sala}</p>
            <p><strong>Horário:</strong> ${horario}</p>`;

        // Adicionando um botão "Excluir" ao card
        var botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("btn-excluir");
        botaoExcluir.addEventListener("click", function() {
            excluirCard(novoCard);
        });
        novoCard.appendChild(botaoExcluir);

        // Adicionando o novo card à div de agendamentos
        document.getElementById("agendamentos").appendChild(novoCard);
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

function excluirCard(card) {
    card.remove();
}

