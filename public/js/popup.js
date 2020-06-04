
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

            <div class="container-field">
            <input type="text" name="cor" id="cor" placeholder="Hexa da Cor">
            </div>

            <div class="container-field">
            <input type="text" name="icone" id="icone" placeholder="Nome do Icone">
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

            <div class="container-field">
            <input type="text" name="cor" id="cor" value="cateiraEdit_color" placeholder="Hexa da Cor">
            </div>

            <div class="container-field">
            <input type="text" name="icone" id="icone" value="cateiraEdit_ico" placeholder="Nome do Icone">
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "tiporeceitaCreate": `
        <form method="POST" action="/tiporeceitas/store">
            <span class="title"> Novo Tipo de Receita </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" placeholder="Digite o nome do Tipo de Receita" required>
            </div>

            <div class="container-field">
            <input type="text" name="cor" id="cor" placeholder="Hexa da Cor">
            </div>

            <div class="container-field">
            <input type="text" name="icone" id="icone" placeholder="Nome do Icone">
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "tiporeceitaEdit": `
        <form method="POST" action="/tiporeceitas/tiporeceitaEdit_id/update?_method=PUT">
            <span class="title"> Editar Tipo de Receita </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" value="tiporeceitaEdit_name" placeholder="Digite o nome do Tipo de Receita" required>
            </div>

            <div class="container-field">
            <input type="text" name="cor" id="cor" value="tiporeceitaEdit_color" placeholder="Hexa da Cor">
            </div>

            <div class="container-field">
            <input type="text" name="icone" id="icone" value="tiporeceitaEdit_ico" placeholder="Nome do Icone">
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "receitaCreate": `
        <form method="POST" action="/receitas/store">
            <span class="title"> Nova Receita </span>

            <div class="container-field">
            <input type="date" name="data" id="data" value="receitaCreate_data" placeholder="" required>
            </div>

            <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" placeholder="Valor da Receita" required>
            </div>

            <div class="container-field">
            <select name="carteira" id="carteira-create" required>
                <option selected disabled>Selecione a Carteira</option>
            </select>
            </div>

            <div class="container-field">
            <select name="tiporeceita" id="tiporeceita-create" required>
                <option selected disabled>Selecione Tipo de Receita</option>
            </select>
            </div>

            <div class="container-field">
            <input type="text" name="obs" id="obs" placeholder="Observação">
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "receitaEdit": `
        <form method="POST" action="/receitas/receitaEdit_id/update?_method=PUT">
            <span class="title"> Editar Receita </span>

            <div class="container-field" id="divReceitaDataEdit">
                <input type="date" name="data" id="data" value="receitaEdit_data" placeholder="" required>
            </div>

            <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" value="receitaEdit_valor" placeholder="Valor da Receita" required>
            </div>

            <div class="container-field">
            <select name="carteira" id="carteira-create" required>
                <option selected disabled>Selecione a Carteira</option>
            </select>
            </div>

            <div class="container-field">
            <select name="tiporeceita" id="tiporeceita-create" required>
                <option selected disabled>Selecione Tipo de Receita</option>
            </select>
            </div>

            <div class="container-field">
            <input type="text" name="obs" id="obs" value="receitaEdit_obs" placeholder="Observação">
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "transferenciaCreate": `
        <form method="POST" action="/transferencias/store">
            <span class="title"> Nova Transferência </span>

            <div class="container-field">
            <input type="date" name="data" id="data" value="transferenciaCreate_data" placeholder="" required>
            </div>

            <div class="container-field">
            <select name="carteira" id="carteiraOrigem-create" required>
                <option selected disabled>Selecione a Carteira de Origem</option>
            </select>
            </div>

            <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" placeholder="Valor da Transferência" required>
            </div>

            <div class="container-field">
            <select name="carteiradestino" id="carteiraDestino-create" required>
                <option selected disabled>Selecione a Carteira de Destino</option>
            </select>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "transferenciaEdit": `
        <form method="POST" action="/transferencias/transferenciaEdit_id/update?_method=PUT">
            <span class="title"> Nova Transferência </span>

            <div class="container-field">
            <input type="date" name="data" id="data" value="transferenciaEdit_data" placeholder="" required>
            </div>

            <div class="container-field">
            <select name="carteira" id="carteiraOrigem-edit">
                <option selected disabled>Selecione a Carteira de Origem</option>
            </select>
            </div>

            <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" value="transferenciaEdit_valor" placeholder="Valor da Transferência" required>
            </div>

            <div class="container-field">
            <select name="carteiradestino" id="carteiraDestino-edit">
                <option selected disabled>Selecione a Carteira de Destino</option>
            </select>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,    
    "categoriasCreate": `
    <form method="POST" action="/categorias/store">
    <span class="title"> Nova Categoria </span>

    <div class="container-field">
      <input type="text" name="nome" id="nome" placeholder="Digite o nome da categoria" required>
    </div>

      <div class="container-field">
        <select name="tipo" id="tipo" required>
          <option selected disabled>Selecione</option>
          <option value="1">Fixa</option>
          <option value="2">Variável</option>
        </select>
      </div>
    <button class="btn green" type="submit">Salvar</button>
  </form>
    `,
    "categoriaEdit": `
    <form method="POST" action="/categorias/categoriaEdit_id/update?_method=PUT">
    <span class="title"> Editar Cartegoria </span>
    <div class="container-field">
        <input type="text" name="nome" id="nome" value="categoriaEdit_name" placeholder="Digite o nome da categoria" required>
    </div> 
            <div class="container-field">
              <select name="tipo" id="tipo" required>
                <option selected disabled>Selecione</option>
                <option value="1">Fixa</option>
                <option value="2">Variável</option>
              </select>
            </div>
          <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
    "despesasCreate": `
    <form method="POST" action="/despesas/store">
        <span class="title"> Nova Despesa </span>

        <div class="container-field">
            <input type="date" name="data" id="data" placeholder="">
        </div>

        <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" placeholder="Valor da Despesa">
        </div>
    
        <div class="container-field">
            <select name="categoria" id="categoria">
                <option selected disabled>Selecione</option>
                <% categorias.forEach((categoria) => { %>
              <option value=<%= categoria.id %>> <%= categoria.nome %></option>
                <% }) %> 
            </select>
        </div>

        <div class="container-field">
            <select name="carteira" id="carteira">
                <option selected disabled>Selecione</option>
                <% carteiras.forEach((carteira) => { %>
                <option value=<%= carteira.id %>> <%= carteira.nome %></option>
                <% }) %> 
            </select>
        </div>

        <div class="container-field">
            <input type="text" name="obs" id="obs" placeholder="Obs">
        </div>
    
    
        <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
    "despesaEdit": `
    <form method="POST" action="/despesas/despesaEdit_id/update?_method=PUT">
    <span class="title"> Editar Despesa</span>
    
        <div class="container-field">
            <input type="date" name="data" id="data" value="despesaEdit_name" placeholder="">
        </div>

        <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" placeholder="Valor da Despesa">
        </div>
    
        <div class="container-field">
            <select name="categoria" id="categoria">
                <option selected disabled>Selecione</option>
                <% categorias.forEach((categoria) => { %>
              <option value=<%= categoria.id %>> <%= categoria.nome %></option>
                <% }) %> 
            </select>
        </div>

        <div class="container-field">
            <select name="carteira" id="carteira">
                <option selected disabled>Selecione</option>
                <% carteiras.forEach((carteira) => { %>
                <option value=<%= carteira.id %>> <%= carteira.nome %></option>
                <% }) %> 
            </select>
        </div>

        <div class="container-field">
            <input type="text" name="obs" id="obs" placeholder="Obs">
        </div>
    
    
        <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
    "metaCreate": `
        <form method="POST" action="/metas/store">
            <span class="title"> Nova Meta </span>

            <div class="container-field">
            <input type="number" name="ano" id="ano" value="metaCreate_ano" placeholder="" required>
            </div>

            <div class="container-field">
            <input type="number" name="mes" id="mes" value="metaCreate_mes" placeholder="" required>
            </div>

            <div class="container-field">
            <select name="categoria" id="categoria-create" required>
                <option selected disabled>Selecione a Categoria</option>
            </select>
            </div>

            <div class="container-field">
            <input type="number" step="0.01" name="valorprevisto" id="valorprevisto" placeholder="Valor Previsto" required>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
    "metaEdit": `
        <form method="POST" action="/metas/metaEdit_id/update?_method=PUT">
            <span class="title"> Alterar Meta </span>

            <div class="container-field">
            <input type="number" name="ano" id="ano" value="metaEdit_ano" readonly required>
            </div>

            <div class="container-field">
            <input type="number" name="mes" id="mes" value="metaEdit_mes" readonly required>
            </div>

            <div class="container-field">
            <select name="categoria" id="categoria-edit" required>
                <option selected disabled>Selecione a Categoria</option>
            </select>
            </div>

            <div class="container-field">
            <input type="number" step="0.01" name="valorprevisto" id="valorprevisto" value="valorprevistoEdit" placeholder="Valor Previsto" required>
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
        let color = e.target.getAttribute('data-color');
        let ico = e.target.getAttribute('data-ico');
        let newForm = popups[popupOpen]
            .replace('cateiraEdit_id', id)
            .replace('cateiraEdit_name', name)
            .replace('cateiraEdit_color', color)
            .replace('cateiraEdit_ico', ico)
            .replace(`>${type}`, `selected>${type}`);
        $('#popup .popup-body').innerHTML = newForm;
        popupActive(classPopup);
    } 
    else if(popupOpen == 'tiporeceitaEdit'){
        let id = e.target.getAttribute('data-id');
        let name = e.target.getAttribute('data-name');
        let color = e.target.getAttribute('data-color');
        let ico = e.target.getAttribute('data-ico');
        let newForm = popups[popupOpen]
            .replace('tiporeceitaEdit_id', id)
            .replace('tiporeceitaEdit_name', name)
            .replace('tiporeceitaEdit_color', color)
            .replace('tiporeceitaEdit_ico', ico);
        $('#popup .popup-body').innerHTML = newForm;
        popupActive(classPopup);
    } 
    else if(popupOpen == 'receitaCreate') {
        var data = new Date();
        var dataReceita = data.getFullYear() + '-' + ("0" + (data.getMonth()+1)).slice(-2) + '-' + ("0" + data.getDate()).slice(-2);
        let newForm = popups[popupOpen]
            .replace('receitaCreate_data', dataReceita);
        $('#popup .popup-body').innerHTML = newForm;
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/listacarteirasreceita", true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304) ) {
                var data = JSON.parse(ajax.responseText);
                data.forEach(carteira => {
                    let option = document.createElement("option");
                    option.innerHTML = carteira.nome;
                    option.setAttribute('value', carteira.id);
                    $('#carteira-create').appendChild(option);
                })
                popupActive(classPopup);
            }
        }

        var ajax2 = new XMLHttpRequest();
        ajax2.open("GET", "/listatiposreceita", true);
        ajax2.send();
        ajax2.onreadystatechange = function() {
            if (ajax2.readyState == 4 && (ajax2.status == 200 || ajax2.status == 304) ) {
                var data2 = JSON.parse(ajax2.responseText);
                data2.forEach(tiporeceita => {
                    let option2 = document.createElement("option");
                    option2.innerHTML = tiporeceita.nome;
                    option2.setAttribute('value', tiporeceita.id);
                    $('#tiporeceita-create').appendChild(option2);
                })
                popupActive(classPopup);
            }
        }
    }
    else if(popupOpen == 'receitaEdit') {
        let receitaId = e.target.getAttribute('data-id');
        let receitaData = e.target.getAttribute('data-date');

        let receitaValor = e.target.getAttribute('data-valor');
        let receitaCarteiraId = e.target.getAttribute('data-carteiraid');
        let receitaTipoCarteiraId = e.target.getAttribute('data-tiporeceitaid');
        let receitaObs = e.target.getAttribute('data-obs');
        
        let newForm = popups[popupOpen]
            .replace('receitaEdit_id', receitaId)
            .replace('receitaEdit_data', receitaData)
            .replace('receitaEdit_valor', receitaValor)
            .replace('receitaEdit_obs', receitaObs);
        $('#popup .popup-body').innerHTML = newForm;
               
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/listacarteirasreceita", true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304) ) {
                var data = JSON.parse(ajax.responseText);
                data.forEach(carteira => {
                    let option = document.createElement("option");
                    option.innerHTML = carteira.nome;
                    option.setAttribute('value', carteira.id);
                    if (carteira.id == receitaCarteiraId){
                        option.setAttribute('selected','selected');
                    }
                    $('#carteira-create').appendChild(option);
                })
                popupActive(classPopup);
            }
        }

        var ajax2 = new XMLHttpRequest();
        ajax2.open("GET", "/listatiposreceita", true);
        ajax2.send();
        ajax2.onreadystatechange = function() {
            if (ajax2.readyState == 4 && (ajax2.status == 200 || ajax2.status == 304) ) {
                var data2 = JSON.parse(ajax2.responseText);
                data2.forEach(tiporeceita => {
                    let option2 = document.createElement("option");
                    option2.innerHTML = tiporeceita.nome;
                    option2.setAttribute('value', tiporeceita.id);
                    if (tiporeceita.id == receitaTipoCarteiraId){
                        option2.setAttribute('selected', 'selected');
                    }
                    $('#tiporeceita-create').appendChild(option2);
                })
                popupActive(classPopup);
            }
        }
    }
    else if(popupOpen == 'transferenciaCreate') {
        var data = new Date();
        var dataReceita = data.getFullYear() + '-' + ("0" + (data.getMonth()+1)).slice(-2) + '-' + ("0" + data.getDate()).slice(-2);
        let newForm = popups[popupOpen]
            .replace('transferenciaCreate_data', dataReceita);
        $('#popup .popup-body').innerHTML = newForm;
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/listacarteirasreceita", true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304) ) {
                var data = JSON.parse(ajax.responseText);
                data.forEach(carteira => {
                    let option = document.createElement("option");
                    option.innerHTML = carteira.nome;
                    option.setAttribute('value', carteira.id);
                    $('#carteiraOrigem-create').appendChild(option);
                    
                    let option2 = document.createElement("option");
                    option2.innerHTML = carteira.nome;
                    option2.setAttribute('value', carteira.id);
                    $('#carteiraDestino-create').appendChild(option2);
                })
                popupActive(classPopup);
            }
        }
    }
    else if(popupOpen == 'transferenciaEdit') {
        let tId = e.target.getAttribute('data-id');
        let tData = e.target.getAttribute('data-date');
        let tValor = e.target.getAttribute('data-valor');
        let tCarteiraId = e.target.getAttribute('data-carteiraid');
        let tCarteiraId_transf = e.target.getAttribute('data-carteiraid-transf');

        let newForm = popups[popupOpen]
            .replace('transferenciaEdit_id', tId)
            .replace('transferenciaEdit_data', tData)
            .replace('transferenciaEdit_valor', tValor);
        $('#popup .popup-body').innerHTML = newForm;
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/listacarteirasreceita", true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304) ) {
                var data = JSON.parse(ajax.responseText);
                data.forEach(carteira => {
                    let option = document.createElement("option");
                    option.innerHTML = carteira.nome;
                    option.setAttribute('value', carteira.id);
                    if (carteira.id == tCarteiraId){
                        option.setAttribute('selected','selected');
                    }
                    else {
                        option.setAttribute('disabled','disabled');
                    }
                    $('#carteiraOrigem-edit').appendChild(option);
                                        
                    let option2 = document.createElement("option");
                    option2.innerHTML = carteira.nome;
                    option2.setAttribute('value', carteira.id);
                    if (carteira.id == tCarteiraId_transf){
                        option2.setAttribute('selected','selected');
                    }
                    else {
                        option2.setAttribute('disabled','disabled');
                    }
                    $('#carteiraDestino-edit').appendChild(option2);
                })
                popupActive(classPopup);
            }
        }
    }
    else if(popupOpen == 'categoriaEdit'){
        let id = e.target.getAttribute('data-id');
        let name = e.target.getAttribute('data-name');
        let type = e.target.getAttribute('data-type');
        let color = e.target.getAttribute('data-color');
        let ico = e.target.getAttribute('data-ico');
        let newForm = popups[popupOpen]
            .replace('categoriaEdit_id', id)
            .replace('categoriaEdit_name', name)
            .replace(`>${type}`, `selected>${type}`);
        $('#popup .popup-body').innerHTML = newForm;
        popupActive(classPopup);
    }
    else if(popupOpen == 'despesaEdit'){
        let id = e.target.getAttribute('data-id');
        let value = e.target.getAttribute('data-value');
        let type = e.target.getAttribute('data-type');
        let wallet = e.target.getAttribute('data-wallet');
        let note = e.target.getAttribute('data-note');
        let newForm = popups[popupOpen]
            .replace('categoriaEdit_id', id)
            .replace('categoriaEdit_name', name)
            .replace(`>${type}`, `selected>${type}`);
        $('#popup .popup-body').innerHTML = newForm;
        popupActive(classPopup);
    }     
    
    else if(popupOpen == 'metaCreate') {
        let tAno = e.target.getAttribute('data-ano');
        let tMes = e.target.getAttribute('data-mes');
        let tCategoriaId = e.target.getAttribute('data-categoriaid');
        //categoria-create
        let newForm = popups[popupOpen]
            .replace('metaCreate_ano', tAno)
            .replace('metaCreate_mes', tMes);
        $('#popup .popup-body').innerHTML = newForm;
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/listaCategoriasMetas", true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304) ) {
                var data = JSON.parse(ajax.responseText);
                data.forEach(categoria => {
                    if (categoria.id == tCategoriaId){
                        let option = document.createElement("option");
                        option.setAttribute('selected','selected');
                        option.innerHTML = categoria.nome;
                        option.setAttribute('value', categoria.id);
                        $('#categoria-create').appendChild(option);
                    }
                })
                popupActive(classPopup);
            }
        }
    }
    else if(popupOpen == 'metaEdit') {
        let tId = e.target.getAttribute('data-id');
        let tAno = e.target.getAttribute('data-ano');
        let tMes = e.target.getAttribute('data-mes');
        let tCategoriaId = e.target.getAttribute('data-categoriaid');
        let tvalorprevisto = e.target.getAttribute('data-valor');
        //categoria-create
        let newForm = popups[popupOpen]
            .replace('metaEdit_id', tId)
            .replace('metaEdit_ano', tAno)
            .replace('metaEdit_mes', tMes)
            .replace('valorprevistoEdit', tvalorprevisto);
        $('#popup .popup-body').innerHTML = newForm;
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/listaCategoriasMetas", true);
        ajax.send();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304) ) {
                var data = JSON.parse(ajax.responseText);
                data.forEach(categoria => {
                    if (categoria.id == tCategoriaId){
                        let option = document.createElement("option");
                        option.setAttribute('selected','selected');
                        option.innerHTML = categoria.nome;
                        option.setAttribute('value', categoria.id);
                        $('#categoria-edit').appendChild(option);
                    }
                })
                popupActive(classPopup);
            }
        }
    }
    else {
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
            activePopup(e);
        }
    })
    $('.sob-popup').onclick = (e) => { deactivatedPopup(e) };
}, false);