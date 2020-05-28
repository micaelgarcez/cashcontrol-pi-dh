function popupActive(arrayItems) {
    arrayItems.forEach(item => {
        if(!$(item).classList.contains('active')){
            $(item).classList.add('active');
        }
    });
}

function popupDeactivated(arrayItems) {
    arrayItems.forEach(item => {
        if($(item).classList.contains('active')){
            $(item).classList.remove('active');
        }
    });
}

const popups = {
    "login": `
        <form method="POST" action="/login">
        <span class="title">Login</span>  
        <button class="btn facebook" ype="button">Login com Facebook</button>
        <button class="btn google" type="button">Login com Google</button>

        <div class="container-field">
            <input type="email" id="email" name="email" placeholder="Informe seu Email">
        </div>

        <div class="container-field">
            <input type="password" id="password" name="password" placeholder="Digite sua Senha">
        </div>            

        <button class="btn green" type="submit">Entrar</button>
        
        <div class="last-link">
            <p> Não tem conta?  
            <a class="popup" href="#cadastro" onclick="activePopup(event)">Clique Aqui!</a>
            </p>
        </div>
        </div>
        </form>
    `,
    "cadastro": `
        <form id="form-pizza" method="POST" action="/users/store">
            <span class="title">Cadastro</span>
            <div class="container-field">
                <input type="text" name="nome" id="nome" placeholder="Digite o seu nome">
            </div>
            <div class="container-field">
                <input type="email" name="email" id="email" placeholder="Digite o seu E-mail">
            </div>
            <div class="container-field">
                <input type="password" name="password" id="password" placeholder="Digite sua senha">
            </div>
            <button class="btn green" type="submit">Salvar</button>
            <div class="last-link">
                <p> Já tem conta?  
                <a class="popup" href="#login" onclick="activePopup(event)">Clique Aqui!</a>
                </p>
            </div>
        </form>
    `,
    "carteiraCreate": `
        <form method="POST" action="/carteiras/store">
            <span class="title"> Nova Carteira </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" placeholder="Digite o nome da carteira" required>
            </div>

            <div class="container-field">
            <select name="tipo" id="tipo" required>
                <option selected disabled>Selecione</option>
                <option value="1">Conta Bancária</option>
                <option value="2">Carteira Pessoal</option>
                <option value="3">Cartão de Débito</option>
                <option value="4">Cartão de Crédito</option>
            </select>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "carteiraEdit": `
        <form method="POST" action="/carteiras/cateiraEdit_id/update?_method=PUT">
            <span class="title"> Editar Carteira </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" value="cateiraEdit_name" placeholder="Digite o nome da carteira" required>
            </div>

            <div class="container-field">
            <select name="tipo" id="tipo" required>
                <option value="1">Conta Bancária</option>
                <option value="2">Carteira Pessoal</option>
                <option value="3">Cartão de Débito</option>
                <option value="4">Cartão de Crédito</option>
            </select>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `
}

const classPopup = [
    '.sob-popup',
    '#popup'
];

function activePopup(e){
    e.preventDefault();
    let popupOpen = e.target.getAttribute('href').replace('#', '');
    if(popupOpen == 'carteiraEdit'){
        let id = e.target.getAttribute('data-id');
        let name = e.target.getAttribute('data-name');
        let type = e.target.getAttribute('data-type');
        let newForm = popups[popupOpen]
            .replace('cateiraEdit_id', id)
            .replace('cateiraEdit_name', name)
            .replace(`>${type}`, `selected>${type}`);
        $('#popup .popup-body').innerHTML = newForm;
        popupActive(classPopup);
    } else {
        $('#popup .popup-body').innerHTML = popups[popupOpen];
        popupActive(classPopup);
    }
}

function deactivatedPopup(e){
    e.preventDefault();
    popupDeactivated(classPopup);
}
window.addEventListener("load", () => {
    let popupsLinks = document.querySelectorAll('.popup');
    popupsLinks.forEach(link => {
        link.onclick = (e) => {
            console.log('teste');
            activePopup(e);
        }
    })
    $('.sob-popup').onclick = (e) => { deactivatedPopup(e) };
}, false);