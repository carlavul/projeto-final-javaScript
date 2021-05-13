function validar (){
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var mensagem = formuser.mensagem.value;

    if(nome == "") {
        alert("prencha o campo nome.");
        formuser.nome.focue();
        return false
    }
    if(email == ""  || email.indexof('@') == -1 ) {
        alert("prencha o campo Email.");
        formuser.email.focus();
        return false
    }
    
}
