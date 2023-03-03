const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let id = 0


//funcion agregar tarea
function agergarTarea(tarea, id, realizado, eliminado){

    if(eliminado){
        return
    }

    const REALIZADO = realizado ?check :uncheck
    const LINE = realizado ?lineThrough :''


    const elemento = `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id=${id}></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id=${id}></i>
                        </li>
                    `
    lista.insertAdjacentHTML("beforeend", elemento)               
}


botonEnter.addEventListener('click', ()=> {
    const tarea = input.value
    if(tarea){
        agergarTarea(tarea, id, false, false)
    }
    input.value = ''
    id++
})

document.addEventListener('keyup', function(event){
    if(event.key=='Enter'){
        const tarea = input.value
        if(tarea){
            agergarTarea(tarea, id, false, false)
        }
        input.value = ''
        id++
    }
})

lista.addEventListener('click', function(event){
    const element = event.target
    const elementData = element.attributes.data.value
})