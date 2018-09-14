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
 
 ### i. Herramientas utilizadas 
 
 Las herramientas que fueron utilizadas son : framework Express, Auth0 para la autenticación y Google Maps API 
 
 ### b. Esquemas de pruebas para comprobar el atributo de calidad 
 
 * **Disponibilidad:** Las pruebas para disponibilidad serán realizadas con el enfoque de la independcencia de nodos entre sí. La planeación consiste en desconectar un nodo y verificar que los demas nodos sigan funcionando.
 * **Rendimiento:**
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
 
