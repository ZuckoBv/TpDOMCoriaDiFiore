const app = document.getElementById('app');
        const cards = document.getElementById('cards');
        const botonAgregar = document.querySelector('.btnAgregar');
        const botonEliminar = document.querySelector('.btnEliminar');
        const botonModificar = document.querySelector('.btnModificar');
        const botonEnviar = document.createElement('button');
        const botonCancelar = document.createElement('button');

        function agregarElemento()
        {
            // Crear el contenedor de la card
            const nuevaCard = document.createElement('div');
            nuevaCard.classList.add('card');
            // Crea el campo de la imagen en la cad
            const imagenCard = document.createElement('img');
            imagenCard.src = "#";
            // Crea el campo del titulo en la card
            const tituloCard = document.createElement('h2');
            tituloCard.textContent = "Titulo";
            // Crea el campo de la descripción en la card
            const descripcionCard = document.createElement('p');
            descripcionCard.textContent = "Descripción";
            nuevaCard.appendChild(imagenCard);
            nuevaCard.appendChild(tituloCard);
            nuevaCard.appendChild(descripcionCard);
            cards.appendChild(nuevaCard);
            
        }
        function eliminarElemento()
        {
            const eliminarCard = document.querySelector('.card:last-of-type');
            eliminarCard.parentNode.removeChild(eliminarCard);
        }
        function modificarElemento()
        {
            //crear input imagen
            const imagen = document.querySelector('.card:last-of-type img');
            const card = document.querySelector('.card:last-of-type');
            const nuevoInputImagen = document.createElement('input');
            nuevoInputImagen.classList.add('EditarImagen');
            nuevoInputImagen.placeholder = imagen.src;
            imagen.parentNode.removeChild(imagen);
            card.appendChild(nuevoInputImagen);

            //crear input de titulo
            const titulo = document.querySelector('.card:last-of-type h2');
            //const card = document.querySelector('.card');
            const nuevoInputTitulo = document.createElement('input');
            nuevoInputTitulo.classList.add('EditarTitulo');
            nuevoInputTitulo.placeholder = titulo.textContent;
            titulo.parentNode.removeChild(titulo);
            card.appendChild(nuevoInputTitulo);
            
            // Crear input de descripción
            const descripcion = document.querySelector('.card:last-of-type p');
            const nuevoInputDescripcion = document.createElement('input');
            nuevoInputDescripcion.classList.add('EditarDescripcion');
            nuevoInputDescripcion.placeholder = descripcion.textContent;
            descripcion.parentNode.removeChild(descripcion);
            card.appendChild(nuevoInputDescripcion);


            // crear boton de guardado
            botonEnviar.textContent='enviar';
            card.appendChild(botonEnviar);
            // crear boton de guardado
            botonCancelar.textContent='cancelar';
            card.appendChild(botonCancelar);
            
        }
        // Guarda los actualizados de los nuevos campos
        function guardar()
        {
            //Llamo al card
            const guardarCard = document.querySelector('.card:last-of-type');
            //modifico la imagen predeterminada
            const nuevaImagen = document.createElement('img');
            const inputImagen = document.querySelector('.EditarImagen');
            nuevaImagen.src =  inputImagen.value;
            //modifico el titulo predeterminado
            const nuevoTitulo = document.createElement('h2');
            const inputTitulo = document.querySelector('.EditarTitulo');
            nuevoTitulo.textContent =  inputTitulo.value;
            //modifico la descripcion predeterminada
            const nuevaDescripcion=document.createElement('p');
            const inputDescripcion=document.querySelector('.EditarDescripcion');
            nuevaDescripcion.textContent = inputDescripcion.value;
            //reemplazo la imagen
            guardarCard.replaceChild(nuevaImagen, inputImagen);
            //remplazo la descripcion
            guardarCard.replaceChild(nuevaDescripcion, inputDescripcion);
            //remplazo el titulo
            guardarCard.replaceChild(nuevoTitulo, inputTitulo);
            
            botonEnviar.textContent = 'enviar';
            botonEnviar.classList.add('enviar');
            guardarCard.removeChild(botonEnviar);
            botonCancelar.textContent = 'cancelar';
            botonEliminar.classList.add('cancelar');
            guardarCard.removeChild(botonEliminar);
       }    
       // Cancela el proceso de edición
       function cancelar(){
            //Llamo al card
            const guardarCard = document.querySelector('.card:last-of-type');
            //modifico la imagen predeterminada
            const nuevaImagen = document.createElement('img');
            const inputImagen = document.querySelector('.EditarImagen');
            nuevaImagen.src =  inputImagen.placeholder;
            //modifico el titulo predeterminado
            const nuevoTitulo = document.createElement('h2');
            const inputTitulo = document.querySelector('.EditarTitulo');
            nuevoTitulo.textContent =  inputTitulo.placeholder;
            //modifico la descripcion predeterminada
            const nuevaDescripcion=document.createElement('p');
            const inputDescripcion=document.querySelector('.EditarDescripcion');
            nuevaDescripcion.textContent = inputDescripcion.placeholder;
            //reemplazo la imagen
            guardarCard.replaceChild(nuevaImagen, inputImagen);
            //remplazo la descripcion
            guardarCard.replaceChild(nuevaDescripcion, inputDescripcion);
            //remplazo el titulo
            
            guardarCard.replaceChild(nuevoTitulo, inputTitulo);
            botonEnviar.textContent = 'enviar';
            botonEnviar.classList.add('enviar');
            guardarCard.removeChild(botonEnviar);
            botonCancelar.textContent = 'cancelar';
            botonEliminar.classList.add('cancelar');
            guardarCard.removeChild(botonEliminar);
       }
        botonEnviar.addEventListener('click',guardar);
        botonCancelar.addEventListener('click',cancelar);
        botonModificar.addEventListener('click',modificarElemento);
        botonAgregar.addEventListener('click',agregarElemento);
        botonEliminar.addEventListener('click',eliminarElemento);
