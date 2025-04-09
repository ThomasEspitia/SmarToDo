import { useState } from 'react'

function NotasRapidas() {
  const [nota, setNota] = useState('')
  const [notas, setNotas] = useState([])

  const agregarNota = () => {
    if (nota.trim() !== '') {
      setNotas([...notas, nota])
      setNota('')
    }
  }

  const eliminarNota = (index) => {
    const nuevasNotas = notas.filter((_, i) => i !== index)
    setNotas(nuevasNotas)
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 min-h-screen text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">📝 Notas Rápidas</h1>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="Escribe una nota rápida..."
          className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full"
        />
        <button
          onClick={agregarNota}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      <ul className="space-y-3">
        {notas.map((n, index) => (
          <li
            key={index}
            className="bg-yellow-100 dark:bg-yellow-300 text-gray-900 p-3 rounded shadow flex justify-between items-center"
          >
            {n}
            <button
              onClick={() => eliminarNota(index)}
              className="text-red-600 hover:text-red-800 font-bold ml-4"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotasRapidas
