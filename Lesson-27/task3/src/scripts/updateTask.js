import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';

export const onToggleTask = e => {
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const tasksList = getItem('tasksList');
    const newTasksList = tasksList
        .map(tasks => {
            if (tasks.id === e.target.dataset.id) {
                const done = e.target.checked;
                return {
                    ...tasks,
                    done,
                    endEvent: done
                        ? new Date().toISOString()
                        : null
                };
            }
            return tasks;
        });
    setItem('tasksList', newTasksList);

    renderTasks();
};