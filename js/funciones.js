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
            let resultado = datos.filter(function(elemento){
                return elemento.nombre.toLowerCase().startsWith(entrada.toLowerCase()) || elemento.apellido.toLowerCase().startsWith(entrada.toLowerCase()) ;
            });
    
            if(resultado.length == 0){
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
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Profesión</th>
                      </tr>
                </thead>
                `;
                let cuerpoTabla = document.createElement('tbody');
                    tabla.append(cuerpoTabla);

                resultado.forEach((elemento, indice)=>{
                    cuerpoTabla.innerHTML += 
                    `
                      <tr>
                        <th scope="row">${indice}</th>
                        <td>${elemento.nombre}</td>
                        <td>${elemento.apellido}</td>
                        <td>${elemento.edad}</td>
                        <td>${elemento.profesion}</td>
                      </tr>
                    `;
            
                    //console.log(elemento);
                });
            };
        }else{
            tabla.innerHTML = '';
        }
    })
    .catch((e)=>console.log(e));
}

export{buscar, tabla, entrada}