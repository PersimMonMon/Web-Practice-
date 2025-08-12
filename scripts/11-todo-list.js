let todoList = []

function updateArray() {
  const userInput = document.querySelector('.js-input').value 
  todoList.push(userInput);
  console.log(todoList);

  document.querySelector('.js-input').value = '';
}

function updateArray2() {
  const userInput = document.querySelector('.js-input2').value 
  todoList.push(userInput);
  console.log(todoList);

  document.querySelector('.js-input2').value = '';
  renderList();
};

// goal: take array and display it 
function renderList() {
  let i = 0;
  let text = '';

  while (i < todoList.length){
    let format = `<p>${todoList[i]}</p>`   // generating the HTML 
    i++; 
    text += format 
  }
  document.querySelector('.js-todoList').innerHTML = text; 
};


