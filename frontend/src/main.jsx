import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegistrarTareas from './components/registrarTareas/RegistrarTareas'

createRoot(document.getElementById('root')).render(
  <>
    <div className='flex gap-3 p-3 bg-stone-100 h-screen w-screen'>
      <div id='menu-lateral' className='flex flex-col gap-0 rounded-lg bg-blue-800 h-full w-1/5'>
        <div className='flex justify-center items-center gap-2 font-extrabold text-white rounded-md m-2 pt-10 pb-10'>
          <div className='w-10 h-10 bg-white rounded-xl'>   
          </div>
          <div className='text-2xl'>
            SmarToDo
          </div>
        </div>
        <div className='hover:bg-stone-50 hover:text-blue-800 text-white rounded-md ml-2 mr-2 p-3'>✅ Registrar tareas</div>
        <div className='hover:bg-stone-50 hover:text-blue-800 text-white rounded-md ml-2 mr-2 p-3'>📒 Notas rapidas</div>
        <div className='hover:bg-stone-50 hover:text-blue-800 text-white rounded-md ml-2 mr-2 p-3'>🔔 Recordatorios</div>
        <div className='hover:bg-stone-50 hover:text-blue-800 text-white rounded-md ml-2 mr-2 p-3'>🕒 Horarios </div>
        <div className='hover:bg-stone-50 hover:text-blue-800 text-white rounded-md ml-2 mr-2 p-3'>📅 Calendario</div>
      </div>
    <div className='flex p-4 gap-2 rounded-lg bg-stone-50 h-full w-full'>
      <RegistrarTareas className='overflow-hidden' ></RegistrarTareas>
    </div>
    </div>
  </>
)
