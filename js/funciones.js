'use strict'
// Variable
let tabla = document.querySelector('.table');
let entrada = document.querySelector('.entrada');

let buscar = ()=>{
    let entrada = document.querySelector('.entrada').value.trim();

    fetch('/codigo.json')
    .then((respuesta)=>respuesta.json())
    .then((datos)=>{
        if(entrada.length != 0){
            let resultado = datos.find(function(elemento){
                return elemento.nombre.toLowerCase().startsWith(entrada.toLowerCase()) || elemento.apellido.toLowerCase().startsWith(entrada.toLowerCase()) ;
            });
    
            if(resultado == undefined){
                tabla.innerHTML = '';
                tabla.innerHTML = 
                `
                <div class="eliminar alert alert-danger alert-dismissible fade show" role="alert">
                    No hay resultados para esta busqueda!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
                `;
            }else{
                tabla.innerHTML = '';
                tabla.innerHTML = 
                `
                <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Profesión</th>
                      </tr>
                </thead>
                `;
                let cuerpoTabla = document.createElement('tbody');
                    tabla.append(cuerpoTabla);
                    cuerpoTabla.innerHTML += 
                    `
                      <tr>
                        <td>${resultado.nombre}</td>
                        <td>${resultado.apellido}</td>
                        <td>${resultado.edad}</td>
                        <td>${resultado.profesion}</td>
                      </tr>
                    `;
            
            };
        }else{
            tabla.innerHTML = '';
        }
    })
    .catch((e)=>console.log(e));
}

export{buscar, tabla, entrada}