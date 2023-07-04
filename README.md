# Proyecto LP WWW Sistema de gestión de inventario de farmacias CESFAM

## Integrantes
- Gabriel Diaz
- Joaquin Gallegos
- Renata Guzmán
- Bruno Liberona
- Jorge Vicuña

## Tecnologias

Para el stack tecnológico se decidió utilizar MGVN. Este se compone de las siguientes tecnologías:

- MongoDB: Se decidió utilizar Mongo para la base de datos, pues consideramos que la aplicación no requería de base de datos relacionales para ser trabajada, por lo que decidimos optar por la simplicidad de implementar una base de datos no relacional de este tipo.

- GraphQL: Se decidió construir la API con GraphQL por motivos del curso y recomendación del Profesor. Con este logramos crear una interfaz bastante sólida para los modelos de nuestro negocio, lo que facilitaría bastante la conexión entre cliente-servidor en lo que respecta a las consultas per se.

- Vuejs: Decidimos ocupar como framework de client side a Vuejs 3, dada la cercanía que tenían algunos miembros del equipo con este, y por ser menos verboso que otros frameworks de JavaScript como ReactJs o Angular. Además, consideramos que sería de bastante ayuda para crear las vistas responsivas con los componentes que facilita Vuetify (la cual se utilizó en el desarrollo de la aplicación).

- Nodejs: Ocupamos Nodejs para el servidor de la aplicación, dada la tecnología con la que construimos la API y la facilidad que trae consigo trabajar con MongoDB a través de la librería Mongoose.


## Ejecución de Servidores

Para este proyecto se tiene una arquitectura distribuida de forma local mediante el uso de contenedores, estos estan dividos en Frontend, Backend y Database.

Para la creación del cluster en docker se tiene que ejecutar el siguiente comando dentro de la carpeta en la que se encuentre docker-compose.yml, dependiendo del tipo de entorno que queramos utilizar.


### Para entorno de producción:

Arrancar con ```docker-compose up```

Conectarse a cliente mediante ```localhost:8080```


### Para entorno de desarrollo

Arrancar con ```docker-compose -f docker-compose.dev.yml up```

Conectarse al cliente mediante ```localhost:3000```


## Rutas

Debido a falta de tiempo no se alcanzó a implementar todo el proyecto. Sin embargo, se adjuntan las rutas para acceder a las distintas vistas implementadas:

- /login
- /farmacia/inventario
- /medico/receta
- /medico/inventario

Algo a destacar es que, si llegan a haber datos en la base de datos, el sitio si debiera mostrarlos, pero lmanetablemente no alcanzamos a implementar el funcionamiento completo con tal de poder hacerlo dentro del sitio.
