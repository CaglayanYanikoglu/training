
const test = () => {
  alert('232hey');
}
function alertIt(msg) {
  alert(msg);
};
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  console.log(document.getElementById('create-element-button'))
  document.getElementById('create-element-button').addEventListener('click', function() {
    var newElement = document.createElement('p');
    newElement.innerHTML = '<strong><i>Test</i></strong>';
    newElement.className = "new";
    document.getElementById('parent').appendChild(newElement);
  })
  console.log(document.getElementById('alert-button'));

  document.getElementById("alert-button").onclick = function() {alertIt('Hellow!')};
    
  /* const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  const element = document.getElementById("div1");
  element.appendChild(para);
  // element.insertBefore(para, child);
  */

});

function logNewItem () {
  console.log(document.getElementsByClassName('new'));
  console.log(document.querySelector('.new'));
}
console.log(document.getElementById('create-element-button'))
