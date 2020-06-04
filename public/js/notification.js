function notificationActive() {
    $('.notification-container').classList.add('active');
}

function notificationDeactivated() {
    $('.notification-container').classList.remove('active');
}

const notifications = {
    "carteiraDelete": "Tem certeza que quer deletar a Carteira?",
    "tiporeceitaDelete": "Tem certeza que quer deletar o Tipo de Receita?",
    "receitaDelete": "Tem certeza que quer deletar a Receita?",
    "transferenciaDelete": "Tem certeza que quer deletar a Transferência?",
    "categoriaDelete": "Tem certeza que quer deletar a Categoria?",
    "despesaDelete": "Tem certeza que quer deletar a Despesa?",
    "metaDelete": "Tem certeza que quer remover esta Meta?"
}


function showNotification(e) {
    e.preventDefault();
    let show = e.target.getAttribute('href').replace('#', '');
    let classForm = `cd-${e.target.getAttribute('data-id')}`;
    $('.notification-container p').innerText = notifications[show];
    $('.notification-container').setAttribute('data-class', classForm);
    notificationActive();
}

window.addEventListener("load", () => {
    let notificationsLinks = document.querySelectorAll('.notification');
    notificationsLinks.forEach(link => {
        link.onclick = (e) => {
            showNotification(e);
        }
    })
    $('.positive').onclick = () => {
        let classForm = $('.notification-container').getAttribute('data-class');
        $(`.${classForm}`).submit();
    }
    $('.negative').onclick = () => {
        notificationDeactivated();
    }
}, false);