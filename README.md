# Manipulación de DOM

Este proyecto está enfocado en hacer una página dinámica que permita crear, eliminar y modificar tarjetas a voluntad mediante botones. 
## Instrucciones de Instalación

1. Clonar el repositorio.
2. Abrir `index.html` en tu navegador.

## Uso

### Crear Tarjetas
Para crear una tarjeta, simplemente haz clic en el botón con el símbolo "+". Esto creará una tarjeta con un título, imagen y descripción predeterminados. 

### Editar Tarjetas
Los campos de las tarjetas son modificables al tocar el ícono de edición (un lápiz). Esto permite ingresar nuevos datos y actualizarlos posteriormente con el botón "guardar". 

### Eliminar Tarjetas
Las tarjetas se pueden eliminar con el botón "X", el cual eliminará una de las tarjetas a la vez. 

## Estructura del Proyecto
```
TpDOMCoriaDiFiore
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ app.js
├─ assets/
│  └─ bici.jpg
│  └─ fiat1.jpg
│  └─ monopatin.jpg
├─ README.md
└─ .gitignore
```
## Tecnologías

* HTML5 
* CSS3 (o framework w⅗¾ ligero)
* JavaScript ES6+ 

En este proyecto se usó principalmente HTML5 y JavaScript ES6+.

## Decisiones de Diseño

Para crear los elementos del DOM, se utilizaron variables con funciones como `document.createElement` para generar los `div` que contenían las tarjetas, así como los elementos internos como `H1`, `<p>` e `img`.  Posteriormente, para mostrarlos dentro de un contenedor, se empleó `variable.appendChild()`. Para modificar, se usaron métodos similares para agregar campos de entrada (`inputs`), y luego se obtuvo su valor con funciones como `variable.textContent`. Para eliminar tarjetas o etiquetas, se utilizó el método `variable.parentNode.deleteChild()`.

## Retos y Aprendizajes

En este proyecto se aprendió cómo manipular estructuras HTML utilizando únicamente JavaScript, creando etiquetas, agregando clases o modificando propiedades. Todo esto se logró con funciones programadas que se activaban mediante eventos específicos que podían ser utilizados desde el mismo programa en funcionamiento.

## Capturas de pantalla o GIFs (Opcional)
![alt text](<Captura de pantalla (1).png>)
