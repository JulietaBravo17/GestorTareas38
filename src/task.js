// Obtener la lista de tareas del almacenamieto del navegador "localStorage"
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar una tarea a la lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
}

