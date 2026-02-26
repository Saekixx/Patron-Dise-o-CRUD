# Patron-Dise-o-CRUD

Refactorizamos nuestro CRUD con patrones de diseño

# Patrones de Diseño que vamos ausar

# Back

MVC - Singlenton

Singlenton - Lo use en la clase de Database para garantizar una única instacia
de la Conexion a la Base de Datos, asi evitamos multiples conexion innecesarias y
aseguramos que la aplicacion reutilice el mismo pool de conexiones.

MVC - El BackEnd implementa un patron MVC adaptado a un API REST
El modelo maneja los datos, el controlador contiene la logia de negocio, las rutas
exponen los EndPoints.

Las vistas no se renderizan en el servidor, ya que la API devuelve respuestas en
formato JSON que son consumidas por El FrontEnd.

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
