# Evaluacion

### Prerequisitos 
tener instalado virtualenv
### Paso 1 Crear un ambiente virtual 
En una terminal  ejecutar el siguiente comando 

`virtualenv  env`


### Paso 2 Activar el ambiente virutal 
En una terminal  ejecutar el siguiente comando

`source env/bin/activate`

### Paso 3 Instalar dependencias 
Una vez que el ambiente este activado ejecutar el siguiente comando 

`pip install -r  requirements.txt`

### Paso 4 ejecutar el back 
En una terminal ejecutar los siguientes comandos 

`cd backend`

`python manage.py runserver`



### Paso 5 Instalar dependecias del front 
Abrir una terminal y   ejecutar lo sigueintes comandos 

`cd frontend`

`npm install`

### Paso 6 Ejecutar el front 
Abrir una terminal y   ejecutar lo sigueintes comandos 

`npm start`

### Notas
las urls que se pueden visitar es:

http://localhost:3000 -> se encuentra la encuesta

http://localhost:3000/estadisticas-> se encuentra la estadisticas

