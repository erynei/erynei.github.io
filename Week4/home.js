let greeting = document.getElementById('greeting');

console.log(greeting.textContent);
console.log(greeting.innerText);
console.log(greeting.innerHTML);

//retrieve all instances of <p>
//display each <p> innertext in the console

let paras = document.getElementsByTagName('p');
console.log(paras);

for (let p of paras) {
    console.log(p.innerText);
}


//replce the innerText of each p with "REPLACED"

for (para of paras) { 
    paras.innerText = "REPLACED";
}








//retrieve all instances of p using querySelectorAll
//display each p innertext in the console

let paras2 = document.querySelectorAll('p');

paras2.forEach(p => {
    console.log(p.innerText);
});