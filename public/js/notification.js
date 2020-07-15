// ANIMAÇÃO PARA REMOVER A LINHA

function fadeOut(target, time) {
    fade(target, time, 100, 0);
}

function fadeIn(target, time) {
    fade(target, time, 0, 100);
}

function fade(target, time, ini, fin) {
    var alpha = ini;
    var inc;
    if (fin >= ini) { 
        inc = 2; 
    } else {
        inc = -2;
    }
    timer = (time * 1000) / 50;
    var i = setInterval(
        function() {
            if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
                clearInterval(i);
            }
            setAlpha(target, alpha);
            alpha += inc;
        }, timer);
}

function setAlpha(target, alpha) {
    target.style.filter = "alpha(opacity="+ alpha +")";
    target.style.opacity = alpha/100;
}

const notificationContainer = $('.notification-container');

function notificationActive() {
    notificationContainer.classList.add('active');
}

function notificationDeactivated() {
    notificationContainer.classList.remove('active');
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
    let itemUrl = e.target.getAttribute('data-url');
    $('.notification-container p').innerText = notifications[show];
    notificationContainer.setAttribute('data-url', itemUrl);
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
        let urlForPost = notificationContainer.getAttribute('data-url');
        if(urlForPost){
            fetch(urlForPost, { method: 'POST' })
            .then(response =>  response.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    notificationDeactivated();
                    let itemRemoved = $(`.notification[data-url="${urlForPost}"]`).closest('.item');
                    fadeOut(itemRemoved, 0.3);
                    setInterval(() => {
                        itemRemoved.remove();
                    }, 300);
                    return;
                } else {
                    console.log(data);
                    return;
                }
            })
        }
        let classForm = `.cd-${urlForPost.replace(/\D/gim, '')}`;
        $(classForm).submit();
    }

    $('.negative').onclick = () => {
        notificationContainer.setAttribute('data-id', '');
        notificationContainer.setAttribute('data-url', '');
        notificationDeactivated();
    }
}, false);