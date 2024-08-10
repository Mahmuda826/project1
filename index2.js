  let language = document.querySelector("#language");
  let lang = ['Java','C','Python','Javascript','Jango','pyscript'];
  let fragment = document.createDocumentFragment();

  lang.forEach( (language)=>{
    let li = document.createElement("li");
    li.textContent = language
    fragment.appendChild(li);
  })
  language.appendChild(fragment);