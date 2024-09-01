// const inputTodo = document.getElementById("input-todo");
// const addTodo = document.getElementById("add-todo");
// const todoContainer = document.querySelector(".container");



// addTodo.addEventListener("click", (e) =>{
//      if(inputTodo.value != ""){
//           console.log("NOt emty");
//           displayTodo(inputTodo.value)
//           inputTodo.value = ""
//      }
// });


// function displayTodo(todoValue){
//      let todoWrapper = document.createElement("div");
//      todoWrapper.classList.add("todo-wrapper");

//      todoWrapper.innerHTML = `
//       <div class="doto bg-white  flex justify-between text-2xl mx-8 py-4 mb-3 px-2 rounded">
//                     <p>${inputTodo.value}</p>
//                     <div class="actions">
//                         <i id="edit-text" class="far fa-edit complete-item mr-4 text-4xl"></i>
//                          <button id="delete-btn" class="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
//                     </div>
//                </div>
//      `;
//      todoContainer.appendChild(todoWrapper);

//      let deleteBtn = todoWrapper.querySelector("#delete-btn");
//      deleteBtn.addEventListener("click", function delTodo(){
//           todoWrapper.remove();
//      });
//      let editText = document.querySelector("#edit-text");
//      editText.addEventListener("click", function eText(){

//      })   
// };


///-------------------------------------------



document.addEventListener('DOMContentLoaded', () => {
     const todoInput = document.getElementById('todo-input');
     const addBtn = document.getElementById('add-btn');
     const todoList = document.getElementById('todo-list');
 
     addBtn.addEventListener('click', addTodo);
 
     function addTodo() {
         const todoText = todoInput.value.trim();
         if (todoText === '') return;
 
         const li = document.createElement('li');
         li.className = 'flex justify-between items-center p-2 mb-2 bg-gray-50 border rounded';
         
         const span = document.createElement('span');
         span.textContent = todoText;
 
         const editBtn = document.createElement('button');
         editBtn.textContent = 'Edit';
         editBtn.className = 'text-blue-500 hover:underline';
         editBtn.onclick = () => editTodoItem(span, editBtn);
 
         const deleteBtn = document.createElement('button');
         deleteBtn.textContent = 'Delete';
         deleteBtn.className = 'text-red-500 hover:underline';
         deleteBtn.onclick = () => li.remove();
 
         li.append(span, editBtn, deleteBtn);
         todoList.appendChild(li);
 
         todoInput.value = '';
     }
 
     function editTodoItem(span, editBtn) {
         const input = document.createElement('input');
         input.type = 'text';
         input.value = span.textContent;
         input.className = 'p-1 border rounded mr-2';
         
         const saveBtn = document.createElement('button');
         saveBtn.textContent = 'Save';
         saveBtn.className = 'text-green-500 hover:underline';
         saveBtn.onclick = () => {
             span.textContent = input.value;
             span.style.display = 'block';
             input.remove();
             saveBtn.remove();
             editBtn.style.display = 'inline-block';
         };
 
         span.style.display = 'none';
         editBtn.style.display = 'none';
         span.parentElement.insertBefore(input, span);
         span.parentElement.insertBefore(saveBtn, span);
     }
 });
 