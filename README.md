# Los Aguilas
TECNOLOGÍAS:

-HTML & CSS
-FRONT: Vue
-BASE DE DATOS: MongoDB
-BACKEND: NodeJS
-API REST
-GIT
-DESPLIEGUE: Heroku

Funcionalidades mínimas
➔ Sistema de registro y login de usuarios 
➔ Sistema para añadir nuevos artículos 
➔ Votación en los artículos 
➔ Comentarios en los artículos 
➔ Categorías en los artículos 
➔ Sólo pueden mandar artículos los usuarios registrados
➔ La entidad artículo debe contener al menos los siguientes campos:
◆ Título
◆ Entradilla
◆ Categoría
◆ URL artículo
➔ Los artículos pueden ser votados por los usuarios ( + o - )
➔ Los comentarios pueden ser votados por los usuarios ( + o - )


BONUS
Dos tipos de usuarios: normal y administrador
Sistema de verificación de cuenta
El sistema debe detectar si el artículo ya ha sido añadido por otro usuario
Los administradores pueden eliminar un artículo
Super bonus. La entradilla se extrae automáticamente de la URL (Scrapping)
Los usuarios solo pueden votar una vez cada artículo
Los usuarios no pueden votar sus propios artículos o comentarios
Se podrá responder sobre el hilo general o sobre un comentario, apareciendo
anidado




API - MongoDB
1.- RECURSOS GESTIONADOS

Artículos (con votos)
Entradas
Mensajes
Usuarios
2.- MODELOS DATOS RECURSOS
Artículos
◆ Título
◆ Entradilla
◆ Categoría
◆ URL artículo
MENSAJES

Id [número] (autogenerado)
Usuario[cadena]
Email [cadena]
Mensaje [cadena]
Fecha [fecha] (autogenerado con fecha/hora de creación)
USUARIOS

Id [número] (autogenerado)
Nombre [cadena]
Apellidos [cadena]
Teléfono [cadena]
Email [cadena] (único)
Contraseña [cadena]    
Perfil [cadena] ([user|admin], por defecto valor user)
Activo [booleano] (activo por defecto)
Fecha [fecha] (autogenerado con fecha/hora de creación)

3.- RUTAS API Y VISIBILIDAD

Niveles de visibilidad

public (usuarios anónimos)
user (usuarios registrados - perfil user)
admin (usuarios registrados - perfil admin)
