function popupActive(arrayItems) {
  arrayItems.forEach((item) => {
    if (!$(item).classList.contains("active")) {
      $(item).classList.add("active");
    }
  });
}

function popupDeactivated(arrayItems) {
  arrayItems.forEach((item) => {
    if ($(item).classList.contains("active")) {
      $(item).classList.remove("active");
    }
  });
}

const popups = {
  login: `
        <form method="POST" action="/login">
        <span class="title">Login</span>

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
  cadastro: `
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
  carteiraCreate: `
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
                <option value="4">Cartão de Crédito</option>
            </select>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="cor" value="#449999" >
                    <button type="button" class="selected" style="background: #449999;"></button>
                    <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                    <button type="button" style="background: #669900;" data-color="#669900"></button>
                    <span class="mais-opcoes">Mais Cores</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #669900;" data-color="#669900"></button>
                            <button type="button" style="background: #cc0000;" data-color="#cc0000"></button>
                            <button type="button" style="background: #2cb1e1;" data-color="#2cb1e1"></button>
                            <button type="button" style="background: #c58be2;" data-color="#c58be2"></button>
                            <button type="button" style="background: #99cc00;" data-color="#99cc00"></button>
                            <button type="button" style="background: #ffbd21;" data-color="#ffbd21"></button>
                            <button type="button" style="background: #ff4444;" data-color="#ff4444"></button>
                            <button type="button" style="background: #8ad5f0;" data-color="#8ad5f0"></button>
                            <button type="button" style="background: #d6adeb;" data-color="#d6adeb"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="icone" value="eco" >
                    <button type="button" class="material-icons selected">eco</button>
                    <button type="button" class="material-icons">shopping_basket</button>
                    <button type="button" class="material-icons">stars</button>
                    <span class="mais-opcoes">Mais Icones</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" class="material-icons">support</button>
                            <button type="button" class="material-icons">store</button>
                            <button type="button" class="material-icons">track_changes</button>
                            <button type="button" class="material-icons">verified_user</button>
                            <button type="button" class="material-icons">work_outline</button>
                            <button type="button" class="material-icons">call</button>
                            <button type="button" class="material-icons">business</button>
                            <button type="button" class="material-icons">mail_outline</button>
                            <button type="button" class="material-icons">sentiment_satisfied_alt</button>
                            <button type="button" class="material-icons">vpn_key</button>
                            <button type="button" class="material-icons">weekend</button>
                            <button type="button" class="material-icons">signal_wifi_4_bar</button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
  carteiraEdit: `
        <form method="POST" action="/carteiras/cateiraEdit_id/update?_method=PUT">
            <span class="title"> Editar Carteira </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" value="cateiraEdit_name" placeholder="Digite o nome da carteira" required>
            </div>

            <div class="container-field">
            <select name="tipo" id="tipo" required>
                <option value="1">Conta Bancária</option>
                <option value="2">Carteira Pessoal</option>
                <option value="4">Cartão de Crédito</option>
            </select>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="cor" value="cateiraEdit_color" >
                    <button type="button" class="selected" style="background: cateiraEdit_color;"></button>
                    <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                    <button type="button" style="background: #669900;" data-color="#669900"></button>
                    <span class="mais-opcoes">Mais Cores</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #669900;" data-color="#669900"></button>
                            <button type="button" style="background: #cc0000;" data-color="#cc0000"></button>
                            <button type="button" style="background: #2cb1e1;" data-color="#2cb1e1"></button>
                            <button type="button" style="background: #c58be2;" data-color="#c58be2"></button>
                            <button type="button" style="background: #99cc00;" data-color="#99cc00"></button>
                            <button type="button" style="background: #ffbd21;" data-color="#ffbd21"></button>
                            <button type="button" style="background: #ff4444;" data-color="#ff4444"></button>
                            <button type="button" style="background: #8ad5f0;" data-color="#8ad5f0"></button>
                            <button type="button" style="background: #d6adeb;" data-color="#d6adeb"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="icone" value="cateiraEdit_ico" >
                    <button type="button" class="material-icons selected">cateiraEdit_ico</button>
                    <button type="button" class="material-icons">shopping_basket</button>
                    <button type="button" class="material-icons">stars</button>
                    <span class="mais-opcoes">Mais Icones</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" class="material-icons">support</button>
                            <button type="button" class="material-icons">store</button>
                            <button type="button" class="material-icons">track_changes</button>
                            <button type="button" class="material-icons">verified_user</button>
                            <button type="button" class="material-icons">work_outline</button>
                            <button type="button" class="material-icons">call</button>
                            <button type="button" class="material-icons">business</button>
                            <button type="button" class="material-icons">mail_outline</button>
                            <button type="button" class="material-icons">sentiment_satisfied_alt</button>
                            <button type="button" class="material-icons">vpn_key</button>
                            <button type="button" class="material-icons">weekend</button>
                            <button type="button" class="material-icons">signal_wifi_4_bar</button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
  tiporeceitaCreate: `
        <form method="POST" action="/tiporeceitas/store">
            <span class="title"> Novo Tipo de Receita </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" placeholder="Digite o nome do Tipo de Receita" required>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="cor" value="#449999" >
                    <button type="button" class="selected" style="background: #449999;"></button>
                    <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                    <button type="button" style="background: #669900;" data-color="#669900"></button>
                    <span class="mais-opcoes">Mais Cores</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #669900;" data-color="#669900"></button>
                            <button type="button" style="background: #cc0000;" data-color="#cc0000"></button>
                            <button type="button" style="background: #2cb1e1;" data-color="#2cb1e1"></button>
                            <button type="button" style="background: #c58be2;" data-color="#c58be2"></button>
                            <button type="button" style="background: #99cc00;" data-color="#99cc00"></button>
                            <button type="button" style="background: #ffbd21;" data-color="#ffbd21"></button>
                            <button type="button" style="background: #ff4444;" data-color="#ff4444"></button>
                            <button type="button" style="background: #8ad5f0;" data-color="#8ad5f0"></button>
                            <button type="button" style="background: #d6adeb;" data-color="#d6adeb"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="icone" value="eco" >
                    <button type="button" class="material-icons selected">eco</button>
                    <button type="button" class="material-icons">shopping_basket</button>
                    <button type="button" class="material-icons">stars</button>
                    <span class="mais-opcoes">Mais Icones</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" class="material-icons">support</button>
                            <button type="button" class="material-icons">store</button>
                            <button type="button" class="material-icons">track_changes</button>
                            <button type="button" class="material-icons">verified_user</button>
                            <button type="button" class="material-icons">work_outline</button>
                            <button type="button" class="material-icons">call</button>
                            <button type="button" class="material-icons">business</button>
                            <button type="button" class="material-icons">mail_outline</button>
                            <button type="button" class="material-icons">sentiment_satisfied_alt</button>
                            <button type="button" class="material-icons">vpn_key</button>
                            <button type="button" class="material-icons">weekend</button>
                            <button type="button" class="material-icons">signal_wifi_4_bar</button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
  tiporeceitaEdit: `
        <form method="POST" action="/tiporeceitas/tiporeceitaEdit_id/update?_method=PUT">
            <span class="title"> Editar Tipo de Receita </span>

            <div class="container-field">
            <input type="text" name="nome" id="nome" value="tiporeceitaEdit_name" placeholder="Digite o nome do Tipo de Receita" required>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="cor" value="tiporeceitaEdit_color" >
                    <button type="button" class="selected" style="background: tiporeceitaEdit_color;"></button>
                    <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                    <button type="button" style="background: #669900;" data-color="#669900"></button>
                    <span class="mais-opcoes">Mais Cores</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                            <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                            <button type="button" style="background: #669900;" data-color="#669900"></button>
                            <button type="button" style="background: #cc0000;" data-color="#cc0000"></button>
                            <button type="button" style="background: #2cb1e1;" data-color="#2cb1e1"></button>
                            <button type="button" style="background: #c58be2;" data-color="#c58be2"></button>
                            <button type="button" style="background: #99cc00;" data-color="#99cc00"></button>
                            <button type="button" style="background: #ffbd21;" data-color="#ffbd21"></button>
                            <button type="button" style="background: #ff4444;" data-color="#ff4444"></button>
                            <button type="button" style="background: #8ad5f0;" data-color="#8ad5f0"></button>
                            <button type="button" style="background: #d6adeb;" data-color="#d6adeb"></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-field">
                <div class="container-more-options">
                    <input type="hidden" name="icone" value="tiporeceitaEdit_ico" >
                    <button type="button" class="material-icons selected">tiporeceitaEdit_ico</button>
                    <button type="button" class="material-icons">shopping_basket</button>
                    <button type="button" class="material-icons">stars</button>
                    <span class="mais-opcoes">Mais Icones</span>
                    <div class="container-opcoes">
                        <div class="todas-opcoes">
                            <button type="button" class="material-icons">support</button>
                            <button type="button" class="material-icons">store</button>
                            <button type="button" class="material-icons">track_changes</button>
                            <button type="button" class="material-icons">verified_user</button>
                            <button type="button" class="material-icons">work_outline</button>
                            <button type="button" class="material-icons">call</button>
                            <button type="button" class="material-icons">business</button>
                            <button type="button" class="material-icons">mail_outline</button>
                            <button type="button" class="material-icons">sentiment_satisfied_alt</button>
                            <button type="button" class="material-icons">vpn_key</button>
                            <button type="button" class="material-icons">weekend</button>
                            <button type="button" class="material-icons">signal_wifi_4_bar</button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn green" type="submit">Salvar</button>
        </form>
    `,
  receitaCreate: `
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
  receitaEdit: `
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
  transferenciaCreate: `
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
  transferenciaEdit: `
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
  categoriaCreate: `
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

        <div class="container-field">
            <div class="container-more-options">
                <input type="hidden" name="cor" value="#449999" >
                <button type="button" class="selected" style="background: #449999;"></button>
                <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                <button type="button" style="background: #669900;" data-color="#669900"></button>
                <span class="mais-opcoes">Mais Cores</span>
                <div class="container-opcoes">
                    <div class="todas-opcoes">
                        <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                        <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                        <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                        <button type="button" style="background: #669900;" data-color="#669900"></button>
                        <button type="button" style="background: #cc0000;" data-color="#cc0000"></button>
                        <button type="button" style="background: #2cb1e1;" data-color="#2cb1e1"></button>
                        <button type="button" style="background: #c58be2;" data-color="#c58be2"></button>
                        <button type="button" style="background: #99cc00;" data-color="#99cc00"></button>
                        <button type="button" style="background: #ffbd21;" data-color="#ffbd21"></button>
                        <button type="button" style="background: #ff4444;" data-color="#ff4444"></button>
                        <button type="button" style="background: #8ad5f0;" data-color="#8ad5f0"></button>
                        <button type="button" style="background: #d6adeb;" data-color="#d6adeb"></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-field">
            <div class="container-more-options">
                <input type="hidden" name="icone" value="eco" >
                <button type="button" class="material-icons selected">eco</button>
                <button type="button" class="material-icons">shopping_basket</button>
                <button type="button" class="material-icons">stars</button>
                <span class="mais-opcoes">Mais Icones</span>
                <div class="container-opcoes">
                    <div class="todas-opcoes">
                        <button type="button" class="material-icons">support</button>
                        <button type="button" class="material-icons">store</button>
                        <button type="button" class="material-icons">track_changes</button>
                        <button type="button" class="material-icons">verified_user</button>
                        <button type="button" class="material-icons">work_outline</button>
                        <button type="button" class="material-icons">call</button>
                        <button type="button" class="material-icons">business</button>
                        <button type="button" class="material-icons">mail_outline</button>
                        <button type="button" class="material-icons">sentiment_satisfied_alt</button>
                        <button type="button" class="material-icons">vpn_key</button>
                        <button type="button" class="material-icons">weekend</button>
                        <button type="button" class="material-icons">signal_wifi_4_bar</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
  categoriaEdit: `
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

        <div class="container-field">
            <div class="container-more-options">
                <input type="hidden" name="cor" value="categoriaEdit_color" >
                <button type="button" class="selected" style="background: categoriaEdit_color;"></button>
                <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                <button type="button" style="background: #669900;" data-color="#669900"></button>
                <span class="mais-opcoes">Mais Cores</span>
                <div class="container-opcoes">
                    <div class="todas-opcoes">
                        <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                        <button type="button" style="background: #9933cc;" data-color="#9933cc"></button>
                        <button type="button" style="background: #0099cc;" data-color="#0099cc"></button>
                        <button type="button" style="background: #669900;" data-color="#669900"></button>
                        <button type="button" style="background: #cc0000;" data-color="#cc0000"></button>
                        <button type="button" style="background: #2cb1e1;" data-color="#2cb1e1"></button>
                        <button type="button" style="background: #c58be2;" data-color="#c58be2"></button>
                        <button type="button" style="background: #99cc00;" data-color="#99cc00"></button>
                        <button type="button" style="background: #ffbd21;" data-color="#ffbd21"></button>
                        <button type="button" style="background: #ff4444;" data-color="#ff4444"></button>
                        <button type="button" style="background: #8ad5f0;" data-color="#8ad5f0"></button>
                        <button type="button" style="background: #d6adeb;" data-color="#d6adeb"></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-field">
            <div class="container-more-options">
                <input type="hidden" name="icone" value="categoriaEdit_ico" >
                <button type="button" class="material-icons selected">categoriaEdit_ico</button>
                <button type="button" class="material-icons">shopping_basket</button>
                <button type="button" class="material-icons">stars</button>
                <span class="mais-opcoes">Mais Icones</span>
                <div class="container-opcoes">
                    <div class="todas-opcoes">
                        <button type="button" class="material-icons">support</button>
                        <button type="button" class="material-icons">store</button>
                        <button type="button" class="material-icons">track_changes</button>
                        <button type="button" class="material-icons">verified_user</button>
                        <button type="button" class="material-icons">work_outline</button>
                        <button type="button" class="material-icons">call</button>
                        <button type="button" class="material-icons">business</button>
                        <button type="button" class="material-icons">mail_outline</button>
                        <button type="button" class="material-icons">sentiment_satisfied_alt</button>
                        <button type="button" class="material-icons">vpn_key</button>
                        <button type="button" class="material-icons">weekend</button>
                        <button type="button" class="material-icons">signal_wifi_4_bar</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
  despesaCreate: `
    <form method="POST" action="/despesas/store">
        <span class="title"> Nova Despesa </span>

        <div class="container-field">
            <input type="date" name="data" id="data" value="despesaCreate_data" placeholder="">
        </div>

        <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" placeholder="Valor da Despesa">
        </div>
    
        <div class="container-field">
            <select name="categoria" id="despesaCategoria-create">
                <option selected disabled>Selecione a Categoria</option>
            </select>
        </div>

        <div class="container-field">
            <select name="carteira" id="despesaCarteira-create">
                <option selected disabled>Selecione a Carteira</option>
            </select>
        </div>

        <div class="container-field">
            <input type="text" name="obs" id="obs" placeholder="Obs">
        </div>
    
    
        <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
  despesaEdit: `
    <form method="POST" action="/despesas/despesaEdit_id/update?_method=PUT">
    <span class="title"> Editar Despesa</span>
    
        <div class="container-field">
            <input type="date" name="data" id="data" value="despesaEdit_data" placeholder="">
        </div>

        <div class="container-field">
            <input type="number" step="0.01" name="valor" id="valor" value="despesaEdit_valor" placeholder="Valor da Despesa">
        </div>
    
        <div class="container-field">
            <select name="categoria" id="despesaCategoria-edit">
                <option selected disabled>Selecione a Categoria</option>
            </select>
        </div>

        <div class="container-field">
            <select name="carteira" id="despesaCarteira-edit">
                <option selected disabled>Selecione a Carteira</option>
            </select>
        </div>

        <div class="container-field">
            <input type="text" name="obs" id="obs" value="despesaEdit_obs" placeholder="Obs">
        </div>
    
    
        <button class="btn green" type="submit">Salvar</button>
    </form>
    `,
  metaCreate: `
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
  metaEdit: `
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
    `,
};

const classPopup = [".sob-popup", "#popup"];

function activePopup(e) {
  e.preventDefault();
  let popupOpen = e.target.getAttribute("href").replace("#", "");
  console.log(popupOpen);
  switch (popupOpen) {
    case "carteiraEdit":
      let id = e.target.getAttribute("data-id");
      fetch(`/carteiras/${id}/edit`)
        .then((response) => response.json())
        .then((data) => {
          let newForm = popups[popupOpen]
            .replace("cateiraEdit_id", data.id)
            .replace("cateiraEdit_name", data.nome)
            .replace(/cateiraEdit_color/g, data.cor)
            .replace(/cateiraEdit_ico/g, data.icone)
            .replace(`value="${data.tipo}"`, `value="${data.tipo}" selected`);
          $("#popup .popup-body").innerHTML = newForm;
          let moreLinks = document.querySelectorAll(".mais-opcoes");
          moreLinks.forEach((link) => {
            link.onclick = (e) => {
              activeMoreOptions(e);
            };
          });
          let buttonsVariables = document.querySelectorAll(
            ".container-more-options button"
          );
          buttonsVariables.forEach((button) => {
            button.onclick = (e) => {
              changeVariable(e);
            };
          });
          popupActive(classPopup);
        });
      break;

    default:
      $("#popup .popup-body").innerHTML = popups[popupOpen];

      let moreLinks = document.querySelectorAll(".mais-opcoes");
      moreLinks.forEach((link) => {
        link.onclick = (e) => {
          activeMoreOptions(e);
        };
      });
      let buttonsVariables = document.querySelectorAll(
        ".container-more-options button"
      );
      buttonsVariables.forEach((button) => {
        button.onclick = (e) => {
          changeVariable(e);
        };
      });

      popupActive(classPopup);
      break;
  }

  if (popupOpen == "tiporeceitaEdit") {
    let id = e.target.getAttribute("data-id");
    let name = e.target.getAttribute("data-name");
    let color = e.target.getAttribute("data-color");
    let ico = e.target.getAttribute("data-ico");
    let newForm = popups[popupOpen]
      .replace("tiporeceitaEdit_id", id)
      .replace("tiporeceitaEdit_name", name)
      .replace(/tiporeceitaEdit_color/g, color)
      .replace(/tiporeceitaEdit_ico/g, ico);
    $("#popup .popup-body").innerHTML = newForm;
    let moreLinks = document.querySelectorAll(".mais-opcoes");
    moreLinks.forEach((link) => {
      link.onclick = (e) => {
        activeMoreOptions(e);
      };
    });
    let buttonsVariables = document.querySelectorAll(
      ".container-more-options button"
    );
    buttonsVariables.forEach((button) => {
      button.onclick = (e) => {
        changeVariable(e);
      };
    });
    popupActive(classPopup);
  } else if (popupOpen == "receitaCreate") {
    var data = new Date();
    var dataReceita =
      data.getFullYear() +
      "-" +
      ("0" + (data.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + data.getDate()).slice(-2);
    let newForm = popups[popupOpen].replace("receitaCreate_data", dataReceita);
    $("#popup .popup-body").innerHTML = newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((carteira) => {
          let option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute("value", carteira.id);
          $("#carteira-create").appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listatiposreceita", true);
    ajax2.send();
    ajax2.onreadystatechange = function() {
      if (
        ajax2.readyState == 4 &&
        (ajax2.status == 200 || ajax2.status == 304)
      ) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach((tiporeceita) => {
          let option2 = document.createElement("option");
          option2.innerHTML = tiporeceita.nome;
          option2.setAttribute("value", tiporeceita.id);
          $("#tiporeceita-create").appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  } else if (popupOpen == "receitaEdit") {
    let receitaId = e.target.getAttribute("data-id");
    let receitaData = e.target.getAttribute("data-date");

    let receitaValor = e.target.getAttribute("data-valor");
    let receitaCarteiraId = e.target.getAttribute("data-carteiraid");
    let receitaTipoCarteiraId = e.target.getAttribute("data-tiporeceitaid");
    let receitaObs = e.target.getAttribute("data-obs");

    let newForm = popups[popupOpen]
      .replace("receitaEdit_id", receitaId)
      .replace("receitaEdit_data", receitaData)
      .replace("receitaEdit_valor", receitaValor)
      .replace("receitaEdit_obs", receitaObs);
    $("#popup .popup-body").innerHTML = newForm;

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((carteira) => {
          let option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute("value", carteira.id);
          if (carteira.id == receitaCarteiraId) {
            option.setAttribute("selected", "selected");
          }
          $("#carteira-create").appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listatiposreceita", true);
    ajax2.send();
    ajax2.onreadystatechange = function() {
      if (
        ajax2.readyState == 4 &&
        (ajax2.status == 200 || ajax2.status == 304)
      ) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach((tiporeceita) => {
          let option2 = document.createElement("option");
          option2.innerHTML = tiporeceita.nome;
          option2.setAttribute("value", tiporeceita.id);
          if (tiporeceita.id == receitaTipoCarteiraId) {
            option2.setAttribute("selected", "selected");
          }
          $("#tiporeceita-create").appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  } else if (popupOpen == "transferenciaCreate") {
    var data = new Date();
    var dataReceita =
      data.getFullYear() +
      "-" +
      ("0" + (data.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + data.getDate()).slice(-2);
    let newForm = popups[popupOpen].replace(
      "transferenciaCreate_data",
      dataReceita
    );
    $("#popup .popup-body").innerHTML = newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((carteira) => {
          let option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute("value", carteira.id);
          $("#carteiraOrigem-create").appendChild(option);

          let option2 = document.createElement("option");
          option2.innerHTML = carteira.nome;
          option2.setAttribute("value", carteira.id);
          $("#carteiraDestino-create").appendChild(option2);
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == "transferenciaEdit") {
    let tId = e.target.getAttribute("data-id");
    let tData = e.target.getAttribute("data-date");
    let tValor = e.target.getAttribute("data-valor");
    let tCarteiraId = e.target.getAttribute("data-carteiraid");
    let tCarteiraId_transf = e.target.getAttribute("data-carteiraid-transf");

    let newForm = popups[popupOpen]
      .replace("transferenciaEdit_id", tId)
      .replace("transferenciaEdit_data", tData)
      .replace("transferenciaEdit_valor", tValor);
    $("#popup .popup-body").innerHTML = newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((carteira) => {
          let option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute("value", carteira.id);
          if (carteira.id == tCarteiraId) {
            option.setAttribute("selected", "selected");
          } else {
            option.setAttribute("disabled", "disabled");
          }
          $("#carteiraOrigem-edit").appendChild(option);

          let option2 = document.createElement("option");
          option2.innerHTML = carteira.nome;
          option2.setAttribute("value", carteira.id);
          if (carteira.id == tCarteiraId_transf) {
            option2.setAttribute("selected", "selected");
          } else {
            option2.setAttribute("disabled", "disabled");
          }
          $("#carteiraDestino-edit").appendChild(option2);
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == "categoriaEdit") {
    let id = e.target.getAttribute("data-id");
    let name = e.target.getAttribute("data-name");
    let type = e.target.getAttribute("data-type");
    let color = e.target.getAttribute("data-color");
    let ico = e.target.getAttribute("data-ico");
    let newForm = popups[popupOpen]
      .replace("categoriaEdit_id", id)
      .replace("categoriaEdit_name", name)
      .replace(/categoriaEdit_color/g, color)
      .replace(/categoriaEdit_ico/g, ico)
      .replace(`>${type}`, `selected>${type}`);
    $("#popup .popup-body").innerHTML = newForm;
    let moreLinks = document.querySelectorAll(".mais-opcoes");
    moreLinks.forEach((link) => {
      link.onclick = (e) => {
        activeMoreOptions(e);
      };
    });
    let buttonsVariables = document.querySelectorAll(
      ".container-more-options button"
    );
    buttonsVariables.forEach((button) => {
      button.onclick = (e) => {
        changeVariable(e);
      };
    });
    popupActive(classPopup);
  } else if (popupOpen == "despesaEdit") {
    let dId = e.target.getAttribute("data-id");
    let dData = e.target.getAttribute("data-date");
    let dValor = e.target.getAttribute("data-valor");
    let dCarteiraId = e.target.getAttribute("data-carteiraid");
    let dCategoriaId = e.target.getAttribute("data-categoriaid");
    let dObs = e.target.getAttribute("data-obs");

    let newForm = popups[popupOpen]
      .replace("despesaEdit_id", dId)
      .replace("despesaEdit_data", dData)
      .replace("despesaEdit_valor", dValor)
      .replace("despesaEdit_obs", dObs);
    $("#popup .popup-body").innerHTML = newForm;

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteiras", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((carteira) => {
          let option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute("value", carteira.id);
          if (carteira.id == dCarteiraId) {
            option.setAttribute("selected", "selected");
          }

          $("#despesaCarteira-edit").appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listaCategoriasMetas", true);
    ajax2.send();
    ajax2.onreadystatechange = function() {
      if (
        ajax2.readyState == 4 &&
        (ajax2.status == 200 || ajax2.status == 304)
      ) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach((categoria) => {
          let option2 = document.createElement("option");
          option2.innerHTML = categoria.nome;
          option2.setAttribute("value", categoria.id);
          if (categoria.id == dCategoriaId) {
            option2.setAttribute("selected", "selected");
          }
          $("#despesaCategoria-edit").appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  } else if (popupOpen == "metaCreate") {
    let tAno = e.target.getAttribute("data-ano");
    let tMes = e.target.getAttribute("data-mes");
    let tCategoriaId = e.target.getAttribute("data-categoriaid");
    //categoria-create
    let newForm = popups[popupOpen]
      .replace("metaCreate_ano", tAno)
      .replace("metaCreate_mes", tMes);
    $("#popup .popup-body").innerHTML = newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listaCategoriasMetas", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((categoria) => {
          if (categoria.id == tCategoriaId) {
            let option = document.createElement("option");
            option.setAttribute("selected", "selected");
            option.innerHTML = categoria.nome;
            option.setAttribute("value", categoria.id);
            $("#categoria-create").appendChild(option);
          }
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == "metaEdit") {
    let tId = e.target.getAttribute("data-id");
    let tAno = e.target.getAttribute("data-ano");
    let tMes = e.target.getAttribute("data-mes");
    let tCategoriaId = e.target.getAttribute("data-categoriaid");
    let tvalorprevisto = e.target.getAttribute("data-valor");
    //categoria-create
    let newForm = popups[popupOpen]
      .replace("metaEdit_id", tId)
      .replace("metaEdit_ano", tAno)
      .replace("metaEdit_mes", tMes)
      .replace("valorprevistoEdit", tvalorprevisto);
    $("#popup .popup-body").innerHTML = newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listaCategoriasMetas", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((categoria) => {
          if (categoria.id == tCategoriaId) {
            let option = document.createElement("option");
            option.setAttribute("selected", "selected");
            option.innerHTML = categoria.nome;
            option.setAttribute("value", categoria.id);
            $("#categoria-edit").appendChild(option);
          }
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == "despesaCreate") {
    var data = new Date();
    var dataDespesa =
      data.getFullYear() +
      "-" +
      ("0" + (data.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + data.getDate()).slice(-2);
    let newForm = popups[popupOpen].replace("despesaCreate_data", dataDespesa);
    $("#popup .popup-body").innerHTML = newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteiras", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach((carteira) => {
          let option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute("value", carteira.id);
          $("#despesaCarteira-create").appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listaCategoriasMetas", true);
    ajax2.send();
    ajax2.onreadystatechange = function() {
      if (
        ajax2.readyState == 4 &&
        (ajax2.status == 200 || ajax2.status == 304)
      ) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach((categoria) => {
          let option2 = document.createElement("option");
          option2.innerHTML = categoria.nome;
          option2.setAttribute("value", categoria.id);
          $("#despesaCategoria-create").appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  }
}

function deactivatedPopup(e) {
  e.preventDefault();
  popupDeactivated(classPopup);
}

window.addEventListener(
  "load",
  () => {
    let popupsLinks = document.querySelectorAll(".popup");
    popupsLinks.forEach((link) => {
      link.onclick = (e) => {
        activePopup(e);
      };
    });
    $(".sob-popup").onclick = (e) => {
      deactivatedPopup(e);
    };
  },
  false
);

// ATIVA A SELEÇÃO A CAIXA COM MAIS OPÇÕES NO FORMULÁRIO DO POPUP
function activeMoreOptions(e) {
  e.target.closest(".container-more-options").classList.add("active");
}

// Muda a variável que está selecionada
function changeVariable(e) {
  let valorHexadecimal = e.target.getAttribute("data-color");
  let valorTexto = e.target.innerText;
  let container = e.target.closest(".container-more-options");

  if (valorHexadecimal != null) {
    container.children[0].value = valorHexadecimal;
    container.children[1].style.backgroundColor = valorHexadecimal;
  }

  if (valorTexto != "") {
    container.children[0].value = valorTexto;
    container.children[1].innerText = valorTexto;
  }

  container.classList.remove("active");
  return;
}
