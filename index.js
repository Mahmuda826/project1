let ul = document.createElement("ul");
ul.id = "menu";
let li1 = document.createElement("li");
li1.textContent = "Home";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "About";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Name";

ul.appendChild(li3);

document.body.appendChild(ul);


//script tag 

let script = document.createElement("script");
script.src = "index1.js";

document.body.appendChild(script);

let div = document.createElement("div");
div.id = "menu";

let p = document.createElement("p");
p.innerHTML = "p tag";
div.appendChild(p);
document.body.appendChild(div);


//Creating function for CreateElement method

let menu = document.querySelector("#meni");

function Createmenu(name)
{
    let li = document.createElement("li");
    li.textContent = name
    return li;
}
meni.appendChild(Createmenu("minu"));
meni.appendChild(Createmenu("tuni"));
meni.appendChild(Createmenu("tinni"));
meni.appendChild(Createmenu("tanna"));

// using textContent show the Hidden text
let text = document.getElementById("textcontent");
console.log(text.textContent);