import React from 'react'

function registrarTareas() {
    return (
        <>
            
          <div id='izquierda' className='w-1/3 h-full bg-gray-200 rounded-md overflow-hidden'>
            <div id='cabezera-por-hacer' className='flex p-4'>
                <div className='w-5 h-5 bg-red-300 m-1 rounded-full'></div>
                <div className='text-lg ml-3'>Por hacer</div>
            </div> 

             <div id='cartas' className='flex flex-col gap-3 p-4 h-full w-full overflow-hidden'>
                <div id='carta-1' className='bg-red-300  w-full p-3 rounded-lg text-gray-600 text-sm'> <h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos, reprehenderit minus eum!</p></div>
                <div id='carta-2' className='bg-red-300 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in beatae maxime sequi voluptates reprehenderit earum consequuntur suscipit maiores qui dolore eligendi facere at, debitis nam. Commodi in quibusdam eius.</p></div>
                <div id='carta-3' className='bg-red-300 w-full p-3 rounded-lg text-gray-600 text-sm'> <h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia dolores voluptate earum vitae quisquam nostrum minima iure? Placeat repellendus recusandae delectus ad! Distinctio excepturi veniam aliquam vero voluptate modi.</p></div>
            </div>
          </div>




          <div id='centro' className='w-1/3 h-full bg-gray-200 rounded-md overflow-hidden'>
            <div id='cabezera-haciendo' className='flex p-4'>
                <div className='w-5 h-5 bg-yellow-300 m-1 rounded-full'></div>
                <div className='text-lg ml-2'>Haciendo</div>
            </div> 

            <div id='cartas' className='flex flex-col gap-3 p-4 h-full w-full'>
                <div id='carta-1' className='bg-yellow-200 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus odio, aliquam libero omnis, maxime, ea exercitationem id eaque nobis saepe tenetur neque. Magni consequatur totam ratione quaerat. Tempora, error?</p></div>
                <div id='carta-2' className='bg-yellow-200 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque libero</p></div>
                <div id='carta-3' className='bg-yellow-200 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eaque earum accusamus</p></div>
            </div>
          </div>




          <div id='derecha' className='w-1/3 h-full bg-gray-200 rounded-md overflow-hidden'>
            <div id='cabezera-haciendo' className='flex p-4'>
                <div className='w-5 h-5 bg-green-300 m-1 rounded-full'></div>
                <div className='text-lg ml-3'>Hecho</div>
            </div> 
             <div id='cartas' className='flex flex-col gap-3 p-4 h-full w-full'>
                <div id='carta-1' className='bg-green-200 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nemo vitae exercitationem dolorem architecto perferendis repudiandae</p></div>
                <div id='carta-2' className='bg-green-200 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis architecto reprehenderit voluptatibus necessitatibus sint facere magnam asperiores a? Odit debitis molestiae inventore tempora, fuga fugit consequatur vitae placeat quibusdam?</p></div>
                <div id='carta-3' className='bg-green-200 w-full p-3 rounded-lg text-gray-600 text-sm'><h3 className='text-lg font-bold'>Titulo</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos mollitia id, fuga animi laudantium assumenda quis! Error delectus modi corporis voluptatibus? Accusamus officiis fugit illum? Expedita voluptas sit ipsa! Deleniti.</p></div>
            </div>
          </div>

        </>
    )
}

export default registrarTareas