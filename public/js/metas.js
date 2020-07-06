$('.container-mes .prev').onclick = () => {
    let ano = $('#ano');
    let mes = $('#mes');
    let valorMes = parseInt(mes.value) - 1;
    let valorAno = parseInt(ano.value) - 1;

    if(valorMes < 1){
        ano.value = valorAno;
        mes.value = 12; 
        $('#formMesFilter').submit();
        return;
    }

    mes.value = valorMes;
    $('#formMesFilter').submit();
    return;
}

$('.container-mes .next').onclick = () => {
    let ano = $('#ano');
    let mes = $('#mes');
    let valorMes = parseInt(mes.value) + 1;
    let valorAno = parseInt(ano.value) + 1;
    
    if(valorMes > 12){
        ano.value = valorAno;
        mes.value = 1; 
        $('#formMesFilter').submit();
        return;
    }

    mes.value = valorMes;
    $('#formMesFilter').submit();
    return;
}