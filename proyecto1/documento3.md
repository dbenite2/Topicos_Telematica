# Documento 3 

## 1. Miembros del equipo

* David Alejandro Benitez Cuevas 
* Efrain Gonzalez Arias 
* Santiago Mendoza Montoya 

## 2. Diseñor de arquitectura de la aplicación y sistema 

### a. Vista de desarrollo 

![Diagrama de componentes](componentes.png)

#### i. Definición de Tecnologia de desarrollo 

Las tecnologias que fueron utilizadas para la aplicación fueron : 
*Express : framework de NodeJS que permite realizar aplicaciones web con MVC 
*JavaScript
*HTML5 
*CSS 
*Bootstrap

#### ii. URL de repositorio 
https://github.com/dbenite2/proyecto1

### b. Vista de despliegue 
![Diagrama de despliegue](despliegue.png)

#### i. Definición de Tecnología v3 - Infrastructura TI 

La aplicación se desplegó tanto en los servicios de AWS como en el DCA proveeido por la universidad, ambos con el SO Centos7
Se hizo uso de contenedores docker para el despliegue de la aplicación, para asegurar la disonibilidad del servicio, se utilizó docker swarm, de tal modo que la aplicación quedara distribuida en 3 nodos distintos , adicionalmente se utilizo el servicio web de NGINX para que actuara como un load balancer.


#### ii. URL de ejecución DCA (privada)

http://10.131.137.231

#### ii. URL de ejecución AWS (publica/segura)
 
 carrea2.tk / ec2-18-219-226-7.us-east-2.compute.amazonaws.com
 
 ## 3. Implementación y pruebas por pruebas de calidad 
 
 ### a. Implementación 
 
 Para el QA de disponibilidad se realizó despliegue en distintos nodos con contenedores conectados entre si por docker Swarm, con el objetivo  de que la aplicación no falle si el nodo en el que se encuentra ubicado
 no falle si el nodo se cae.
 
 Para el QA de rendimiento se implementó Caché del lado del servidor, compresión de paquetes, se pusieron responsive las vistas y por ultimo se implemento alarmas proactivas para el monitoreo del servidor, todo esto se explica mas a fondo en el README.md del proyecto a través de las guías que se siguieron para el desarrollo del proyecto y de explicación en como fue la forma de su implementación. 
 
 ### i. Herramientas utilizadas 
 
 Las herramientas que fueron utilizadas son : framework Express, Auth0 para la autenticación, Jmeter para las pruebas, os-monitor, nodemailer para el monitoreo y Google Maps API 
 
 ### b. Esquemas de pruebas para comprobar el atributo de calidad 
 
 * **Disponibilidad:** Las pruebas para disponibilidad serán realizadas con el enfoque de la independcencia de nodos entre sí. La planeación consiste en desconectar un nodo y verificar que los demas nodos sigan funcionando.
 * **Rendimiento:**  Para las pruebas se utilizó Jmeter donde al analizar los resultados se presentó una mejora en el rendimiento ya que, si nos fijamos en la desviación estándar de 100 antes de aplicar las técnicas y 100 después de aplicarlas, notamos que se redujo y esto evidencia una mejora porque significa que los tiempos de respuestas están más cerca del promedio entonces se eliminan los picos donde el tiempo de respuesta es muy lento.
 
 [Imágenes en Dropbox ](https://www.dropbox.com/sh/57p6xvyjbdmd3ys/AADRxW3YL3XxkI2dAcRvoJ4la?dl=0)
 
 * **Seguridad:**
 
 ## 4. Marco-referencia-v3: Versión final de las bases conceptuales, patrones, mejores prácticas, etc de los atributos de calidad seleccionados.
 
 ### Disponibilidad (confiabilidad y recuperación)

El principal objetivo de este QA es permitir soportar las fallas de tal modo que el servicio ofrecido por dicho sistema continue siendo 
compatible con sus especificaciones.
De igual forma implica que una falla se vuelve amenaza cuando esta afecta a los servidores del sistema, de tal modo que las especificaciones del sistema
dejan de funcionar.

Algunas estrategias y tácticas:

* **Detección de fallas**
* **Recuperación de fallas**
  * **Reparation and repair**
  * **Reintroduction**
* **prevencíon de fallas**


### Rendimiento

Rendimiento se trata del tiempo y la capacidad del sistema de software para cumplir los requisitos de tiempo. Cuando ocurren eventos (interrupciones, mensajes, solicitudes de usuarios u otros sistemas, o eventos del reloj que marcan el paso del tiempo) el sistema, o algún elemento del sistema, debe responder a ellos a tiempo. Caracterizar los eventos que pueden ocurrir (y cuándo pueden ocurrir) y la respuesta basada en el tiempo del sistema o elemento a esos eventos es la esencia es discutir el rendimiento.
Los eventos del sistema basados en la web vienen en forma de solicitudes de los usuarios (que suman decenas o decenas de millones) a través de sus clientes, como los navegadores web.
Para un sistema basado en web, la respuesta deseada puede expresarse como el número de transacciones que pueden procesarse en un minuto. Para el sistema de control del motor, la respuesta puede ser la variación permisible en el tiempo de encendido. En cada caso, el patrón de eventos que llegan y el patrón de respuestas se pueden caracterizar, y esta caracterización forma el lenguaje con el que construir escenarios de rendimiento.
Durante gran parte de la historia de la ingeniería de software, el rendimiento ha sido el factor determinante en la arquitectura del sistema. Como tal, con frecuencia ha comprometido el logro de todas las demás cualidades. A medida que la relación precio-rendimiento del hardware continúa cayendo en picado y el costo del desarrollo de software continúa aumentando, otras cualidades se han convertido en importantes competidores para el rendimiento. [1]

#### Análisis QA rendimiento
Para el desarrollo de este QA, primero se empezó por analizar donde podría presentar fallos de rendimiento, luego de una exploración a los posibles cuellos de botella que podrían presentarse ya sean a nivel de servidor, programación o datos, se tomó la decisión de aplicar las técnicas a la parte del servidor.

### Bibliografía
[1] 	L. Bass, P. Clements and R. Kazman, Software Architecture in Practice, Third Edition, Addison-Wesley Professional, 2012.

 
