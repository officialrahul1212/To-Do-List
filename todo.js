let todoList=JSON.parse(localStorage.getItem('todoList')) || []; ;
displayItems()
function addTodo() {
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let inputItem=inputElement.value;
  let inputDate=dateElement.value;

  if (inputItem && inputDate) {
    todoList.push({ item: inputItem, dueDate: inputDate });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  } else {
    alert('Please enter both a to-do item and a due date.');
  }
};

function displayItems(){
  let containerElements=document.querySelector('#todo-Items');
let newHtml=''; 
  for(let i=0;i<todoList.length;i++){
    let {item,dueDate}=todoList[i];

    newHtml+=`
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="deleteTodo(${i});displayItems(); ">Delete</button>
    
    `;
  }
  
  containerElements.innerHTML=newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1); // Remove item from the list
  localStorage.setItem('todoList', JSON.stringify(todoList)); // Update localStorage
  displayItems();
}