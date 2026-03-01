# Patron-Dise-o-CRUD

Refactorizamos nuestro CRUD con patrones de diseño

# Patrones de Diseño que vamos ausar

# Back

Singlenton - Patron Active Record

Singlenton - Lo use en la clase de Database para garantizar una única instacia
de la Conexion a la Base de Datos, asi evitamos multiples conexion innecesarias y
aseguramos que la aplicacion reutilice el mismo pool de conexiones.

Patron Active Record - Es un enfoque donde la clase tiene los comportamientos
del CRUD en funciones. Es ideal para aplicaciones sencillas con logica de negocio
no muy compleja

# Front

Patrón Container / Presentational:
Separa Logica / Estado / Efecto
Container se encarga de: 
Manejo de estados / Llamar APIs / usar hooks / Pasar datos y funciones
Presentational se encarga de:
Mostrar Datos / Recibir Props / Manejar JSX y Estilos

Service Layer:
Es una capa intermedia que se encarga de comunicarse con el backend
Como nuestra carpeta API donde estan las funciones que se comunican con el.
