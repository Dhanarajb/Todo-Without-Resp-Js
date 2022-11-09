let addTodo = document.getElementById("btn");
let container = document.getElementById("todo");
let Inpu = document.getElementById("inp");

addTodo.addEventListener("click", function () {
  var para = document.createElement("p");
  para.classList.add('to-do')
  para.innerText = Inpu.value;
  container.appendChild(para);

  para.addEventListener('dblclick',function(){
        container.removeChild(para);
  })
});
