import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    const taskList = getItem('taskList') || [];

    const newTasksList = taskList.concat({
        text,
        done: false,
        startEvent: new Date().toISOString(),
        // endEvent: new Date(),
        id: Math.random().toString()
    });

    setItem('tasksList', newTasksList);

    renderTasks();
};