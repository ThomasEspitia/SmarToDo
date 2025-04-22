import { useState } from 'react';

const Checklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Comprar leche', completed: false },
    { id: 2, text: 'Hacer ejercicio', completed: true },
    { id: 3, text: 'Llamar a mamá', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editText } : task
    ));
    setEditingId(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border border-pink-100 transition-all">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">✨ Mi Checklist ✨</h1>

      <form onSubmit={addTask} className="mb-6 flex shadow-sm">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Añade una nueva tarea"
          className="flex-1 px-4 py-2 border border-pink-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-pink-500 text-white rounded-r-xl hover:bg-pink-600 transition-colors"
        >
          Añadir
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-3 border rounded-xl transition-all ${
              task.completed ? 'bg-pink-50 border-pink-200' : 'border-gray-300'
            }`}
          >
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-5 w-5 text-pink-500 rounded focus:ring-pink-400"
              />
              {editingId === task.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="ml-3 flex-1 px-2 py-1 border border-pink-300 rounded focus:outline-none"
                />
              ) : (
                <span
                  className={`ml-3 flex-1 ${
                    task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                  }`}
                >
                  {task.text}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2 ml-2">
              {editingId === task.id ? (
                <button
                  onClick={() => saveEdit(task.id)}
                  className="text-green-500 hover:text-green-700 text-sm"
                >
                  💾
                </button>
              ) : (
                <button
                  onClick={() => startEditing(task.id, task.text)}
                  className="text-blue-400 hover:text-blue-600 text-sm"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center text-sm text-gray-500">
        ✅ {tasks.filter(t => t.completed).length} de {tasks.length} tareas completadas
      </div>
    </div>
  );
};

export default Checklist;
