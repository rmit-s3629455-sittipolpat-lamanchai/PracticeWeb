let list = document.getElementsByTagName('ul')[0];
let newItemLast = document.createElement('li');
let newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

let newItemFirst = document.createElement('li');
let newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newTextFirst, list.firstChild);

let listItems = document.querySelector('li');

for(let i = 0; i < listItems.length; i++)
    listItems[i].className = 'cool';

let heading = document.querySelector('h2');
let headingText = heading.firstChild.nodeValue;
let totalItems = listItems.length;
let newHeading = `${headingText} <span> ${totalItems} </span>`;
heading.textContent = newHeading;
