document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const list = document.querySelector('#list');

  const form = document.forms['create-task-form'];
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = form.querySelector('input[type="text"]').value;
    // console.log(task);
    // document.getElementById('tasks').appendChild(task) 

    //Mirroring elements after task is added
    const li = document.createElement('li');
    const taskName = document.createElement('span');
    const deleteButton = document.createElement('button');

    //add content
    deleteButton.textContent = 'Delete';
    taskName.textContent = task;

    //APPEND the elements into the DOM
    li.appendChild(taskName);
    li.appendChild(deleteButton);
    deleteButton.classList.add('delete');
    list.appendChild(li);

    //delete functionality
    list.addEventListener('click', function(e) {
      if(e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
      }
    })
  })
})
