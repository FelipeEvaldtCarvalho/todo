//VARIAVEIS
const listaTarefas = document.querySelector('#myUL');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector('#clearBtn');
const tarefaInput = document.querySelector('#myInput');

//load events
carregaEventos()

//load events
function carregaEventos(){ 
  listaTarefas.addEventListener('click', deleteTarefa);
  //carregar local storage(LS)
  document.addEventListener('DOMContentLoaded', loadTerefas);
}
// get do LS
function loadTerefas() {
  let tarefas;
  if(localStorage.getItem('tarefas') === null){
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
  }
  tarefas.forEach(function(tarefa){
    // criar uma li 
    const li = document.createElement('li');
    // adicionar classe
    li.className = 'ulItem';
    // criar text node e append na li
    li.appendChild(document.createTextNode(tarefa));
    // Criar span 
    const span = document.createElement("SPAN");
    // Add classe no span
    span.className = 'close';
    // Add icon no span
    const txt = document.createTextNode("\u00D7");
    span.appendChild(txt);  
    // Append span no li
    li.appendChild(span);
    // Append li no ul
    listaTarefas.appendChild(li);
  });
}



    




//função add
function newElement() {
  if (tarefaInput.value === '') {
    alert('Complete o campo para adicionar uma nova tarefa ;)');
  } else {
  // criar uma li 
  const li = document.createElement('li');
  // adicionar classe
  li.className = 'ulItem';
  // criar text node e append na li
  li.appendChild(document.createTextNode(tarefaInput.value));
  // Criar span 
  const span = document.createElement("SPAN");
  // Add classe no span
  span.className = 'close';
  // Add icon no span
  const txt = document.createTextNode("\u00D7");
  span.appendChild(txt);  
  // Append span no li
  li.appendChild(span);
  // Append li no ul
  listaTarefas.appendChild(li);
  // salvar no LS
  saveTarefa(tarefaInput.value);
  // Limpar o input
  tarefaInput.value = '';
}
}
// function save LS
function saveTarefa(tarefa){
  let tarefas;
  if(localStorage.getItem('tarefas') === null){
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
  }
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// click enter
const clickEnter = document.querySelector('#myInput').addEventListener('keyup', function(event){
  if (event.keyCode === 13) {
    document.getElementById('addBtn').click();
    event.preventDefault();
  }
});

// Checked function
listaTarefas.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false);

// Deleta tarefa
function deleteTarefa(e) {
  if(e.target.classList.contains('close')) {
    if(confirm('Deseja apagar a tarefa?')) {
      var valorTarefa;
      valorTarefa = e.target.parentElement.firstChild.textContent;
      e.target.parentElement.remove();

      deleteLs(valorTarefa)
    }
  }
}
// deletar do LS
function deleteLs(valorTarefa){
  var tarefasA;
  tarefasA = localStorage.getItem('tarefas');
  tarefasA = JSON.parse(tarefasA);
  tarefasA.forEach(function(tarefa, index){

    if(valorTarefa === tarefa){ 
      
      tarefasA.splice(index, 1);
      localStorage.setItem('tarefas', JSON.stringify(tarefasA));
    } 
  });
}
      
      


      
      
      
      
      
      
   


  

  
  


       
      

        

        
          

      
      

  

      


// Resetar a lista
function resetLista(){
  if (confirm('Deseja limpar a lista?')) {
    while(listaTarefas.firstChild) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
  } 
  resetListaLS();
}
// Resetar LS
function resetListaLS() {
  localStorage.clear();
}






  

