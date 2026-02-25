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
exponen los EndPoints

Las vistas no se renderizan en el servidor, ya que la API devuelve respuestas en
formato JSON que son consumidas por El FrontEnd

# Front

Solid
