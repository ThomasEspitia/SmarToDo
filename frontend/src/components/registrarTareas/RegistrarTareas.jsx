import { useState } from 'react';

const RegistrarTareas = () => {
  const [tareas, setTareas] = useState({
    porHacer: [],
    haciendo: [],
    hecho: []
  });

  const [nuevaTarea, setNuevaTarea] = useState({ titulo: '', descripcion: '' });

  const agregarTarea = () => {
    if (!nuevaTarea.titulo || !nuevaTarea.descripcion) return;

    const nueva = {
      id: Date.now(),
      ...nuevaTarea
    };

    setTareas((prev) => ({
      ...prev,
      porHacer: [nueva, ...prev.porHacer]
    }));

    setNuevaTarea({ titulo: '', descripcion: '' });
  };

  const moverTarea = (id, desde, hacia) => {
    const tareaMovida = tareas[desde].find((t) => t.id === id);
    setTareas((prev) => ({
      ...prev,
      [desde]: prev[desde].filter((t) => t.id !== id),
      [haya]: [tareaMovida, ...prev[haya]]
    }));
  };

  const eliminarTarea = (id, columna) => {
    if (confirm('¿Eliminar esta tarea?')) {
      setTareas((prev) => ({
        ...prev,
        [columna]: prev[columna].filter((t) => t.id !== id)
      }));
    }
  };

  const renderColumn = (titulo, color, nombre, items) => (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
      <div className={`flex items-center px-4 py-3 border-b ${color} bg-gray-50 rounded-t-lg`}>
        <div className={`w-3 h-3 rounded-full ${color.replace('border', 'bg')} mr-2`}></div>
        <h2 className="text-md font-medium text-gray-700">{titulo}</h2>
        <span className="ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
          {items.length}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-3 overflow-y-auto" style={{ minHeight: '200px' }}>
        {items.length === 0 ? (
          <div className="text-center text-gray-400 py-4 text-sm">
            No hay tareas aquí
          </div>
        ) : (
          items.map((tarea) => (
            <div
              key={tarea.id}
              className="bg-white border border-gray-100 p-3 rounded-lg shadow-xs hover:shadow-sm transition-all"
            >
              <h3 className="font-medium text-gray-800">{tarea.titulo}</h3>
              <p className="text-sm text-gray-500 mb-2">{tarea.descripcion}</p>
              <div className="flex justify-between items-center text-sm">
                {nombre !== 'porHacer' && (
                  <button
                    onClick={() => moverTarea(tarea.id, nombre, nombre === 'hecho' ? 'haciendo' : 'porHacer')}
                    className="text-gray-500 hover:text-blue-500 p-1"
                    title="Mover a la izquierda"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {nombre !== 'hecho' && (
                  <button
                    onClick={() => moverTarea(tarea.id, nombre, nombre === 'porHacer' ? 'haciendo' : 'hecho')}
                    className="text-gray-500 hover:text-green-500 p-1"
                    title="Mover a la derecha"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => eliminarTarea(tarea.id, nombre)}
                  className="text-gray-500 hover:text-red-500 p-1 ml-auto"
                  title="Eliminar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Tablero de Tareas</h1>

      <div className="mb-4 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={nuevaTarea.titulo}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, titulo: e.target.value })}
          className="flex-1 px-3 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={nuevaTarea.descripcion}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, descripcion: e.target.value })}
          className="flex-1 px-3 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={agregarTarea}
          className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors"
        >
          Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {renderColumn('Por Hacer', 'border-red-400', 'porHacer', tareas.porHacer)}
        {renderColumn('Haciendo', 'border-yellow-400', 'haciendo', tareas.haciendo)}
        {renderColumn('Hecho', 'border-green-400', 'hecho', tareas.hecho)}
      </div>
    </div>
  );
};

export default RegistrarTareas;