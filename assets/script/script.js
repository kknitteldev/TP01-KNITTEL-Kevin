function register() {
    let tel = document.getElementById('tel');
    let cp = document.getElementById('cp');
    let pwd = document.getElementById('pwd');
    let pwdConf = document.getElementById('pwdConf');
    
    if (tel.value.length != 10) {
        alert('Erreur : le n° de téléphone n\'est pas conforme');
    }
    
    if (cp.value.length != 5) {
        alert('Erreur : le code postal n\'est pas conforme');
    }
    
    if (pwd.value != pwdConf.value) {
        alert('Erreur : les mots de passe ne correspondent pas');
    }
}