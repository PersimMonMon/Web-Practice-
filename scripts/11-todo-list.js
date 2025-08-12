let todoList = []

function updateArray() {
  const userInput = document.querySelector('.js-input').value 
  todoList.push(userInput);
  console.log(todoList);
  
  document.querySelector('.js-input').value = '';
}