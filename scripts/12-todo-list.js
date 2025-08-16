let todoList = []

function updateArray() {
  const userInput = document.querySelector('.js-input').value 
  todoList.push(userInput);
  console.log(todoList);

  document.querySelector('.js-input').value = '';
}

function updateArray2() {
  const userInput = document.querySelector('.js-input2').value 
  const userInput3 = document.querySelector('.js-input3').value 
  let tempObject = {
    name: `${userInput}`,
    date: `${userInput3}`
  };

  todoList.push(tempObject);
  console.log(tempObject);

  document.querySelector('.js-input2').value = '';
  document.querySelector('.js-input3').value = '';
  renderList();
};

// goal: take array and display it 
function renderList() {
  let i = 0;
  let text = '';

  todoList.forEach((todoObject, index) => {
    html = `
    <div>${todoObject.name}</div>
    <div>${todoObject.date}</div>
    <button onclick="
      todoList.splice(${index},1);
      renderList();
    " class="delete-todo-button">Delete</button>
    `;
    text += html 
    document.querySelector('.js-todoList').innerHTML = text;
  });
};

function triggerButton(event) {
  if (event.key === 'Enter') {
    updateArray2();
    renderList();
  };
};

