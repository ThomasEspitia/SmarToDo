import { useState } from 'react';

function NotasRapidas() {
  const [nota, setNota] = useState('');
  const [notas, setNotas] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [notaEditada, setNotaEditada] = useState('');

  const agregarNota = () => {
    if (nota.trim() !== '') {
      setNotas([{ texto: nota, fecha: new Date() }, ...notas]);
      setNota('');
    }
  };

  const eliminarNota = (index) => {
    if (confirm('¿Eliminar esta nota?')) {
      setNotas(notas.filter((_, i) => i !== index));
    }
  };

  const copiarNota = (texto) => {
    navigator.clipboard.writeText(texto);
    alert('Nota copiada al portapapeles 📋');
  };

  const empezarEdicion = (index) => {
    setEditandoIndex(index);
    setNotaEditada(notas[index].texto);
  };

  const guardarEdicion = () => {
    const nuevasNotas = [...notas];
    nuevasNotas[editandoIndex].texto = notaEditada;
    setNotas(nuevasNotas);
    setEditandoIndex(null);
    setNotaEditada('');
  };

  return (
    <div className="p-6 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-gray-700 min-h-screen text-gray-900 dark:text-white transition-all">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600 dark:text-yellow-300">📝 Notas Rápidas</h1>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <textarea
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Escribe una nota rápida..."
          rows={3}
          className="p-3 w-full border border-yellow-300 dark:border-yellow-500 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={agregarNota}
          className="bg-yellow-500 text-white px-5 py-3 rounded-lg hover:bg-yellow-600 transition-all shadow"
        >
          Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {notas.map((n, index) => (
          <div
            key={index}
            className="bg-yellow-100 dark:bg-yellow-300 text-gray-900 rounded-xl p-4 shadow-md flex flex-col justify-between"
          >
            {editandoIndex === index ? (
              <>
                <textarea
                  value={notaEditada}
                  onChange={(e) => setNotaEditada(e.target.value)}
                  rows={3}
                  className="p-2 mb-3 border border-yellow-400 rounded resize-none"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={guardarEdicion}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditandoIndex(null)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="whitespace-pre-wrap mb-3">{n.texto}</p>
                <div className="flex justify-between items-center text-sm text-gray-700">
                  <span className="text-xs">
                    {new Date(n.fecha).toLocaleString()}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copiarNota(n.texto)}
                      className="hover:text-blue-600"
                      title="Copiar"
                    >
                      📋
                    </button>
                    <button
                      onClick={() => empezarEdicion(index)}
                      className="hover:text-green-600"
                      title="Editar"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => eliminarNota(index)}
                      className="hover:text-red-600"
                      title="Eliminar"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {notas.length === 0 && (
        <p className="text-gray-500 mt-6 text-center">No hay notas aún. ¡Escribe algo! ✨</p>
      )}
    </div>
  );
}

export default NotasRapidas;
