function show(item){
    var login=[item];
    var inputusername= document.getElementById('username').value;
    var inputpassword= document.getElementById('password').value;
    var ok=true;
    for(let x of login){
        if(x.tk!=inputusername || x.mk!=inputpassword){
            ok=false;
        }
    }
    console.log('tk:'+inputusername+'mk'+inputpassword);
    if(ok){
        return true;
    }
    else{
        alert("Tài khoản hoặc mật khẩu không chính xác!");
        return false;
    }
}