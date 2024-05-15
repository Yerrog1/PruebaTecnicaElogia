# Prueba técnica para Elogia

En este repositorio se encuentra uno de los ejercicios que me mandaron para la ya dicha prueba técnica.
El ejercicio consiste crear una pequeña aplicación web que te permita buscar jugadores de futbol y guardar sus resultados si se quiere.

Para ello me han proporcionado la API "Free Sports API", la cual utilizare para dar los resultados de los jugadores.


## Requisitos

La mini app tendrá un formulario con un campo de texto y dos botones: buscar y guardar.

    1. Al hacer click en el botón buscar, se buscará el texto en la base de datos de
    jugadores (Método de API “Search for players by name”)

    2. Se mostrarán los 5 primeros resultados en formato de ‘tarjetas’ con diseño
    personalizado con los datos del jugador. Sólo deben mostrarse los jugadores cuyo
    deporte sea el fútbol (strSport = ‘Soccer’).

    Los datos mínimos que deben mostrarse en las tarjetas son el Nombre completo,
    Imagen, Nacionalidad, Fecha de nacimiento y Equipo actual

    3. Mostrar también la primera equipación actual de su equipo (Utilizar el método de la
    API “Lookup Equipment by Team ID”)

    4. Al hacer click en el botón guardar se almacenarán los resultados en una base de
    datos

    5. La mini app tendrá una sección donde poder consultar las búsquedas guardadas

La aplicación debe ser desarrollada en PHP o JavaScript. Se puede utilizar cualquier tipo de framework para facilitar el trabajo como Nodejs, Laravel, React, Vue.js, etc.

A la hora de almacenar los datos también se puede utilizar cualquier base de datos como (MySQL, MongoDB, PostgreSQL o Big Query).


## Empieza el desarrollo

Para empezar el desarrollo decidi elegir que tecnologias utilizaria entre las opciones que me habian dado, siendo mi eleccion final Javascript y Nodejs para el desarrollo y MongoDB como base de datos.

A continuacion decidi ver como funciona la API proporcionada llamada "Free Sports API" utilizando Postman y probar los metodos que se mencionaban