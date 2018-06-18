function checkUserName() {
    if(this.value.length < 5)
        document.getElementById('feedback').textContent = `Username must be 5 characters or more`;
}

let elUsername = document.getElementById('username');
elUsername.onblur = checkUserName;

//Using event listener (the newest approach); the last parameter should always be false.
elUsername.addEventListener('blur',checkUserName,false);