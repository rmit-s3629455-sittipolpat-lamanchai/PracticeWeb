function checkUsername(){
    let username = el.value;
    if(username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    }
}

function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

let el = document.getElementById('username');
let elMsg = document.getElementById('feedback');

el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkUsername,false);