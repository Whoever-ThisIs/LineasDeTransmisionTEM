# Proyecto Final de Teoría Electromagnética

## ¿Cómo abrir el proyecto?
Para utilizar el proyecto deberá de acceder a la página de Cloudfare ubicada en el [siguiente link](https://fcee0618.lineasdetransmisiontem.pages.dev).

Una vez dentro, deberá presionar en la pestaña de "Ingreso de datos" que se encuentra en la parte superior de la página.

## Usando el programa
El programa permite hacer cálculos de líneas de transmisión de tipo:
- Par Bifiliar
- Cable Coaxial 
- Placas Paralelas

Una vez elegida la línea de transmisión, se deberá de elegir el material dieléctrico y el material conductor para la línea, con una amplia variedad de opciones. En caso de que quiera meter sus propios valores, podrá hacerlo eligiendo la opción "Personalizado".

Hasta abajo, encontrará una caja de texto donde poder insertar las frecuencias que desee. Esta caja de texto solo se activara hasta que se ingresen todos los parámetros de la línea de transmisión elegida.

Se pueden insertar números en notación científica de la siguiente manera: 1e7, 23.67e-8, etc.

En caso de que quiera volver a iniciar, encontrará abajo del botón para añadir frecuencias un botón para recargar la página, o podrá hacerlo de manera manual en la barra superior de su navegador.

## Información sobre el proyecto
El proyecto fue realizado en el lenguaje de programación de Javascript, por medio de un framework llamado Svelte que facilitá la creación, estructurización y reactividad de la página con HTML, CSS y JS.

En caso de querer revisar el código de manera manual, lo encontrará en la siguiente dirección dentro del zip que ha recibido:

> LineasDeTransmisionTEM/src/routes

La página de inicio se encontrará en ese directorio, mientras que la página de Ingreso de Datos esta en la misma ruta, dentro de la carpeta llamada *about*.

## Disclaimer
Por razones de la plataforma de Hosting donde se tiene el proyecto (Cloudfare), presionar el botón de Inicio estando en Ingreso de Datos no servira de mucho, esto es por pérdidas en la traducción entre la página local que se abre en su computadora (debe de tener npm, node, etc. instalados para correrlo) y la forma en la que Cloudfare realiza el hosting.