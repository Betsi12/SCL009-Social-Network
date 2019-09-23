***
 ## Readme Social Network ⭐️⭐️
***
![Foto-Presentación](src\assets\img\Foto-presentacion.jpg)

Para el proyecto de Red Social se creó una red pensada en los amantes del teatro a la que podrán acceder directamente en sus teléfonos móviles, llamada Sala Red de Teatro.

¿Qué es Sala Red de Teatro?

Sala Red de Teatro nace como una aplicación pensanda en la necesidad de unir a las personas que de alguna manera tienen afficción por el teatro.

Esto facilitará las comunicaciones, contribuyendo con la creación de una comunidad para amantes del teatro.

***
## Planificación 🚀
***
La planificacion fue realizada en trello, la cual puedes revisar
[Aqui](https://trello.com/b/4jUqLjcx/red-social-scl009-dramaturgos)

***
## Usuarios 👪
***

Lo primero y esencial es conocer al usuario. Para ello se realizó una encuesta en la que se pudo identificar las siguientes respuestas:

Con esto, se logró identificar los usuarios:

El primero es un usuario que le gusta el teatro, que quiere buscar eventos y personas que tengan la misma aficción.

El segundo usuario son las personas que quieren compartir experiencias y gustos por el teatro.

El tercer usuario son los usuarios que quieren crear un personaje para interactuar con personajes o avatares de otros usuarios.

***
## Fase de Prototipado 📋
***
Una vez reconocido el usuario, comienza el proceso creativo compuesto por diferentes pasos que buscan dar con un resultado esperado por nosotras, pero principalmente pensado para el usuario.

Diagrama de flujo: esquema que grafica el flujo que debería tener la aplicación, considerando cambios de interfaces y filtración de información.

¿Cuál es la necesidad de nuestros usuarios?

A partir de la encuesta realizada nacen distintas historias de usuario (HU) que describen las necesidades de los usuarios, buscando cubrirlas a partir de los criterios de aceptación (CA) y definición de terminado (DT)que se desarrollan en cada una de ellas.


1) Yo como nuevo usuario quiero poder crear mi perfil mediante mi cuenta de google. Para ingresar a la red social.

Criterios de aceptación: Para realizar la historia de usuario N°1 voy a :

- Debe haber un botón para iniciar sesión con google.
- Se abre pop-up para loguearse con google.
- El usuario puede ingresar su gmail y contraseña.
- Si los datos son validos, se crea un perfil y le permite entrar a la red social.
- Si los datos no son validos, le envía un mensaje de error.


Definición de Terminado: Para realizar la historia de usuario N°1 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Hacer prototipo de alta fidelidad para esta pantalla.
- Debe ser una SPA.
- Debe ser responsive.
- Enlazar botón de ingreso a cuenta google con firebase.
- Hacer pruebas de usabilidad e incorporar el feedback del usuario.
- Desplegar  aplicación y etiquetar versión (git tag).
- Utilizar flexbox y mediaQuery.
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.

2) Yo como usuario nuevo quiero poder registrarme con cualquier correo y contraseña para poder ingresar a la red social de forma segura.

Criterios de aceptación: Para realizar la historia de usuario N°2 voy a :

- Que el usuario pueda escribir su correo.
- Que el usuario pueda escribir una contraseña.
- Debe haber un botón para crear cuenta.
- Que se envíe un mensaje de error si la contraseña es menor a 6 caracteres.
- Que envíe un mensaje de error si el correo no es valido.
- Que envíe un correo de verificación cuando la cuenta ha sido creada exitosamente.

Definición de Terminado: Para realizar la historia de usuario N°2 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Hacer prototipo de alta fidelidad para esta pantalla.
- Debe haber un botón que vincule al formulario para  crear cuenta.
- Debe existir un imput para que el usuario coloque su correo.
- Debe existir un input para que el usuario ingrese su contraseña.
- Debe enviar un mensaje de confirmación exitosa de la cuenta o de lo contrario un mensaje de error.
- Debe enviar correo electrónico para verificar la creación de la cuenta.
- Debe ser una SPA.
- Debe ser responsive.
- Recibir al menos un Code Review de al menos una compañera de otro equipo.
- Hacer test unitarios.
- Hacer pruebas de usabilidad e incorporar feedback de usuario.
- Desplegar la aplicación y etiquetar la versión (git tag).
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.

3) Yo como usuario ya registrado quiero poder ingresar con mi correo y contraseña para poder entrar a la red social.

Criterios de aceptación: Para realizar la historia de usuario N°3 voy a :

- Debe haber un botón que muestre campos para ingresar el correo y contraseña.
- El usuario debe poder escribir su correo en el primer campo.
- El usuario debe poder escribir su contraseña en el segundo campo.
- Debe haber un botón que envíe los datos.
- Si los datos son validos, el usuario puede ingresar a la red social.
- Si los datos no son validos se genera un mensaje de error.

Definición de Terminado: Para realizar la historia de usuario N°3 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Hacer prototipo de alta fidelidad para esta pantalla.
- Debe ser una SPA.
- Debe ser responsive.
- Botón que al apretar muestre dos inputs, uno para el correo y otro para la contraseña.
- Tiene que tener input para ingresar correo y otro para ingresar contraseña
- Botón que permita validar los datos.
- Recibir al menos un Code Review de al menos una compañera de otro equipo.
- Hacer test unitarios.
- Hacer pruebas de usabilidad e incorporar el feedback del usuario.
- Desplegar la aplicación y etiquetar la versión (git tag).
- Utilizar flexbox y mediaQuery.
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.


4) Yo como usuario ya logueado, quiero poder ver  y darle like a las publicaciones de la comunidad.

Criterios de aceptación: Para realizar la historia de usuario N°4 voy a :

- Muestra sección  dónde aparecen publicaciones de la comunidad.
- El usuario puede dar like por medio de un botón a las publicaciones que le interesen.
- El usuario por medio de un botón puede quitar like a las publicaciones que el quiera.


Definición de Terminado: Para realizar la historia de usuario N°4 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Debe ser una SPA.
- Hacer prototipo de alta fidelidad para esta pantalla.
- Debe ser responsive.
- El usuario  puede dar o quitar like de publicaciones de la comunidad.
- Cada publicación tendrá un conteo de likes.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Hacer test unitarios y, además, testear producto manualmente.
- Hacer pruebas de usabilidad e incorporar el feedback del usuario.
- Desplegar la aplicación y etiquetar la versión (git tag).
- Utilizar flexbox y mediaQuery.
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.

5) Yo como usuario registrado quiero poder crear una publicación para compartir con la comunidad.

Criterios de aceptación: Para realizar la historia de usuario N°5 voy a :

- El usuario puede poder crear un post visible para la comunidad.
- Que los post se muestren en orden de publicación.
- Los post creados deben tener el nombre de quien los publicó y la fecha  de publicación.


Definición de Terminado: Para realizar la historia de usuario N°5 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Debe ser una SPA.
- Debe ser responsive.
- Tiene que tener un campo de texto donde el usuario pueda escribir su publicación.
- Botón que permita publicar el texto.
- Al apretar el botón para publicar debe validar que exista contenido en el input.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Hacer test unitarios y, además, testear producto manualmente.
- Hacer pruebas de usabilidad e incorporar el feedback del usuario.
- Desplegar  aplicación y etiquetar  versión (git tag).
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.

6) Yo como usuario registrado quiero poder editar mi publicación para poder corregir algún posible error.

Criterios de aceptación: Para realizar la historia de usuario N°6 voy a :

- El usuario puede editar su publicación mediante un botón.
- La publicación se actualizara con los cambios realizados  una vez presione el botón guardar.


Definición de Terminado: Para realizar la historia de usuario N°6 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Hacer prototipo de alta fidelidad para esta pantalla.
- Debe ser una SPA.
- Debe ser responsive.
- Tiene que tener un botón para editar.
- Al dar click para editar un post debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
- Botón que permita guardar los cambios.
- Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Hacer test unitarios y, además, testear producto manualmente.
- Desplegar  aplicación y etiquetar  versión (git tag).
- Utilizar flexbox y mediaQuery.
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.

7) Yo como miembro de la comunidad quiero poder eliminar un post que he subido anteriormente.

Criterios de aceptación: Para realizar la historia de usuario N°7 voy a :

- Que haya un botón para eliminar las publicaciones.
- Error de acción, que se pregunte al usuario si esta seguro de eliminar la publicación.
- Que el post quede eliminado de muro del usuario y el muro de la comunidad.

Definición de Terminado: Para realizar la historia de usuario N°7 voy a :

- Realizar flujo y prototipo de baja fidelidad para esta pantalla.
- Hacer prototipo de alta fidelidad para esta pantalla.
- Debe ser una SPA.
- Debe ser responsive.
- Tener un botón para eliminar el post.
- Al dar click para eliminar un post debe desaparecer del muro y del perfil del usuario.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Hacer test unitarios y, además, testear producto manualmente.
- Hacer pruebas de usabilidad e incorporar el feedback del usuario.
- Desplegar  aplicación y etiquetar  versión (git tag).
- Utilizar flexbox y mediaQuery.
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.

8) Yo como usuario de la red social deseo poder cerrar mi sesión de forma segura.

Criterios de aceptación: Para realizar la historia de usuario N°8 voy a :

- El usuario debe poder cerrar su sesión de forma segura cuando lo desee.
- Error de acción, que se pregunte al usuario si esta seguro de cerrar la sesión.
- Que al cerrar la sesión se vuelva a la pantalla de inicio de la red social.

Definición de Terminado: Para realizar la historia de usuario N°8 voy a :

- Debe haber un botón que desencadene la acción de cerrar la sesión del usuario en la comunidad.
- Que se envíe un mensaje para confirmar si el usuario desea cerrar la sesión.
- Enviar un mensaje al confirmar que la sesión ha sido cerrada.
- Debe volver a la pantalla principal una vez cerrada la sesión.
- Debe haber recibido code review de al menos una compañera de otro equipo.
- Hacer test unitarios y, además, testear producto manualmente.
- Hacer pruebas de usabilidad e incorporar el feedback del usuario.
- Desplegar  aplicación y etiquetar  versión (git tag).
- Se hace deploy para testear que los tamaños sean acordes a los distintos dispositivos.
***
## Prototipo de Baja Fidelidad
***

Una vez reconocido el usuario, comienza el proceso creativo de prototipado creando un boceto con las diferentes interfaces y usos que se proponen para la aplicación.

Acá podemos revisar la página de inicio de nuestra aplicación, donde el usuario puede iniciar sesión o crear su cuenta. 

![Foto1](src\assets\img\prototipo1.jpg)
![Foto2](src\assets\img\prototipo2.jpg)
![Foto3](src\assets\img\prototipo3.jpg)

***
## Prototipo de Alta Fidelidad
***

Al reconocer al usuario se definió los colores, el tipo de información y su distribución a desplegarse en la app web. A partir del prototipo de baja fidelidad se realizaron algunos ajustes en cuanto a la presentación de la pantalla de inicio de sesión y el muro principal.

El prototipo fue probado con posibles futuros usuarios (pruebas de usabilidad), quienes  por medio de feedback aportaron ideas para mejorar la aplicación, las cuales fueron aplicadas.

Las tareas realizadas fueron:
Registrarse como usuario nuevo.
Iniciar sesión en la aplicación con usuario creado.
Crear una publicación con un texto deseado.
Editar la publicación.
Eliminar la publicación.
Cerrar sesión.

El prototipo de Alta Fidelidad fue realizado en Figma:
[Selecciona aqui](https://www.figma.com/proto/S6TPhxUBzFfzoYBo6jxGZaep/Social-Network?node-id=4%3A47&scaling=scale-down&redirected=1)


***
## Consideraciones en el desarrollo 🛠️
***
Ejecución del interfaz de usuario HTML, CSS, JS

La lógica del proyecto fue implementada usando JS, HTML y CSS, usando para el diseño Flexbox.

Implementación de la interfaz

- Se usó firebase como plataforma de desarrollo.
- Creación de distintas vistas, gestionadas por un archivo (router.js) que permite su visualización, dependiendo de las elecciones del usuario.
- Desarrollo de funciones para autentificar usuarios, al momento de ingresar por una cuenta creada o correo gmail.
- Desarrollo de funciones para que el usuario pueda realizar publicaciones, leerlas, editarlas o eliminarlas (CRUD), utilizando la base de datos cloud firestore.
- Implementación de validaciones; como es el caso de campos vacíos, ingreso de cantidad de caracteres mínimos, formato de correo. Todo esto testeado en el archivo auth.spec.js.
- Manejo de estilos CSS pensado en mobile first; usando flexbox y media queries para celulares y tablets.
- Testeos de usabilidad y code review por cada historia de usuario finalizada.
- Trabajo colaborativo mediante el uso de Git y GitHub, realizando realeses por cada historia de usuario terminada.
- Deploy con gh-pages de la aplicación
- Deploy con firebase de la aplicación

### Implementación de vistas

templateCreate: vista que permite al usuario crear una cuenta en la aplicación.

templateEditPost: vista que permite al usuario editar una publicación realizada por él. Esta no puede ser vacía e inferior a 2 carácteres.

templatePost: vista que permite al usuario crear una publicación. Esta no puede ser vacía e inferior a 2 carácteres.

templateProfile: vista que permite al usuario visualizar su perfil.

templateHome: vista inicial, que permite al usuario iniciar sesión, con cuenta creada o correo de google.

templateWall: vista del muro, que permite al usuario ver todas las publicaciones realizadas en Sala Red de Teatro. Aquí puede crear una nueva publicación, editar o eliminar una realizada.

### Implementación de funciones💻

Se puede diferenciar dos archivos para la implementación de las principales funciones de la aplicación, siendo auth.js y data.js

auth.js

createAccount(userName, userAge,userLocation, userEmail, userPassword), para lograr crear una nueva cuenta de usuario. Los parámetros solicitados son obligatorios.

loginGoogle(), para iniciar sesion en Sala Red de teatro usando un correo de Google.

signIn(emailSignIn, passwordSignIn) , para iniciar sesión usando la cuenta creada. Los parámetros solicitados son obligatorios.

data.js

postCreate(userPost,userStageDirection), necesaria para crear una nueva publicación.

renderPost(), necesaria para mostrar la publicación creada en el muro de la red social.

postDelete(id), para eliminar una publicación del muro. El usuario solo podrá eliminar sus publicaciones y se le solicitará confirmación antes de realizarlo.

postEdit(id), para editar una publicación del muro. El usuario solo podrá editar sus publicaciones.

### Aspectos técnicos

Se realizó test para comprobar el funcionamiento de la aplicación, logrando los siguientes resultados:

#### El Diseño final
La meta de la aplicación web es cear una comunidad para amantes del teatro, donde puedan interactuar con personajes y compartir eventos. Entre otras cosas. 

La versión final esta disponible en versión demo en github:
[Ver aqui](https://cloiw.github.io/SCL009-Social-Network/src/index.html)


***
## Futuras mejoras ⌨️
***
- Que se puedan crear post con fotos.
- Buscar y agregar personajes amigos , asi como eliminarlos.
- Hacer comentarios sobre las publicaciones.

### Implementar la Hacker Edition
- Crear posts con imágenes.
- Buscar usuarios, agregar y eliminar "amigos".
- Definir la privacidad de los posts (público o solamente para amigos).
- Que el usuario pueda ver el muro de cualquier usuario "no-amigo" (solamente los posts públicos).
- Comentar o responder una publicación.
- El usuario pueda editar perfil.

### Autoras 📌
- Claudia Sirvent
- Betsi Salas
- Tatiana Castro

9° Generación de Laboratoria.

Junio, 2019.