const tasks = [

  {
    id: 1,
    text: 'Learn Java Script',
    done: false,
    date: new Date,
    doneDate: new Date,
  },

  {
    id: 2,
    text: 'Learn React',
    done: false,
    date: new Date,
    doneDate: new Date,
  },

  {
    id: 3,
    text: 'Learn Redux',
    done: true,
    date: new Date,
    doneDate: new Date,
  },

  {
    id: 4,
    text: 'Finished Front-End Interview',
    done: true,
    date: new Date,
    doneDate: new Date,
  },

];

const listElem = document.querySelector('.list');

// const sortTasks = (a, b) => {
  
//   if(a.done - b.done === b - a) {
//     return a.doneDate - b.doneDate;
//   }

//   if (a.done - b.done !=== a - b) {
//     return new Date(a) - new Date(b);
//   }

// }

const renderTasks = (task) => {
    const taskElem = task
    .map(task => {
      const listElement = document.createElement('li');
  listElement.classList.add('list__item ');

  const checkbox = document.createElement('input');
  checkbox.classList.add('list__item-checkbox');
  checkbox.setAttribute('type', 'checkbox');

  if (task.done) {
    return listElement.classList.add('list__item_done');
  }
    });

  }
renderTasks(tasks);