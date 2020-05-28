function notificationActive() {
    $('.notification-container').classList.add('active');
}

function notificationDeactivated() {
    $('.notification-container').classList.remove('active');
}

const notifications = {
    "carteiraDelete": "Tem certeza que quer deletar a carteira?"
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