function itemDone(e) {
    let target, elParent, elGrandparent;
    target = e.target;  // <a> node
    elParent = target.parentNode;   // <li> node
    elGrandparent = target.parentNode.parentNode;    // <ul> node
    elGrandparent.removeChild(elParent);

    e.preventDefault();
}

document.getElementById('shoppingList').addEventListener('click', function (e) {
    itemDone(e);
}, false);