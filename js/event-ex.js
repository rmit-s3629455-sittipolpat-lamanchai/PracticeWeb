let noteName
let textEntered
let target

noteName = document.getElementById('noteName');

function writeLabel(e) {
    textEntered = e.target.value;
    noteName.textContent = textEntered;
}

document.addEventListener('click',function (e) {
    recorderControls(e);
}, false);
document.addEventListener('input', writeLabel, false);

function recorderControls(e) {
    e.preventDefault();
    target = e.target;

    switch (target.getAttribute('data-state')) {
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
    }
}

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}