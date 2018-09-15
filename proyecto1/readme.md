# Proyecto de la materia Topicos Especiales en Telemática

Objetivo:

Desarrollar una aplicación web tipo IoT haciendo uso de frameworks web modernos y utilizando buenas prácticas DevOps

__Condiciones Especiales__
   Al ejecutar la aplicación es necesario tener en cuenta algunos aspectos especiales.
   - Es necesario tener instalado nginx 
   ```
   $ sudo apt-get update
   $ sudo apt-get install nginx 
   ```
   - Una vez instalado, se procede a generar los certificados autofirmados
   ```
   $ sudo mkdir /etc/nginx/ssl
   $ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt
   ```
   - Al realizar el ultimo comando, se daran una serie de preguntas de la siguiente forma:
   ```
   Country Name (2 letter code) [AU]:CO
   State or Province Name (full name) [Some-State]:Antioquia
   Locality Name (eg, city) []:Medellin
   Organization Name (eg, company) [Internet Widgits Pty Ltd]:Universidad EAFIT
   Organizational Unit Name (eg, section) []:Departamento de Sistemas
   Common Name (e.g. server FQDN or YOUR name) []:dbenite2.dis.eafit.edu.co
   Email Address []:dbenite2@eafit.edu.co
   ```
   - Con esto listo , ejecutamos la aplicacion en su carpeta.
   
__Creación del cluster (QA Disponibilidad)__

Para poder replicar el QA de disponibilidad es necesario seguir los siguientes pasos 
* Definir las direcciones entre las que los nodos se van a escuchar entre si:
   para esto vamos a modificar el archivo hosts ubicado en la carpeta etc de las maquinas 
   ```
    $ sudo emacs /etc/hosts
   ```
   y vamos a colocar lo siguiente: 
   * "direccion ip maquina1" "dns publico" managernode
   * "direccion ip maquina2" "dns publico" workernode1
   * "direccion ip maquina3" "dns publico" workernode2
   
   por ultimo, vamos a configurar los nombres de las maquinas segun el archivo 
   
   ```
   $ sudo hostnamectl set-hostname managernode 
   ```
   es necesario realizar esto en cada maquina con su respectivo nombre 
   
* Instalar docker engine 
   Para esto, basta con buscar como instalar este servicio en su SO 
   
* Abrir los puertos para que los nodos se escuchen entre si:
   Vamos a realizar el siguiente comando para los siguientes puertos 
   ```
   $ firewall-cmd --permanent --add-port=2376/tcp 
   ```
   * 2377/tcp
   * 7946/tcp
   * 7946/udp
   * 4789/upd
   * 80/tcp 
   
   luego realizamos el siguiente comando 
   ```
   $ firewall-cmd --reload
   ```
   
__Implementación QA rendimiento__

La implementación la haremos a través de guías encontradas en internet que fueron las seguidas para implementar este QA y que nos van a dar mas claridad de que hacen, como lo hacen y para que lo hacen.
Las guías usadas fueron:
*	Caché del lado del servidor:  https://goenning.net/2016/02/10/simple-server-side-cache-for-expressjs/
*	Responsive: https://www.w3schools.com/css/css_rwd_viewport.asp
*  Compression: Para este debemos instalar el modulo compression asi `npm install compression` y añadir las siguientes líneas a nuestro código
 ```
   var compression = require('compression');
   var express = require('express');
   var app = express();
   app.use(compression());

 ```
 *  Para las alertas proactivas necesitaremos la mezcla de dos módulos, uno que nos monitoree el consumo de recursos y otro para enviar correos.
Primero debemos ver como instalar y usar los dos módulos a través de los siguientes enlaces   os-monitor  https://www.npmjs.com/package/os-monitor   y nodemailer  https://cursos.mejorcodigo.net/article/enviar-correo-electronico-con-nodejs-17

Luego de haber entendido el funcionamiento de los dos módulos necesitaremos hacer la combinación de los dos y lo haremos así, tomare como ejemplo el monitoreo de CPU. 

```
monitor.on('loadavg1', function(event) {
  	console.log(event.type, ' Load average is exceptionally high!');
  	console.log('enviando mail')
  	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email enviado: ' + info.response);
	  }
	});
});
```
Para permitir que la aplicación envié los correos a través de nuestro Gmail debemos darle permisos desde las configuraciones de la cuenta de Google, nos vamos a “Acceso y seguridad” y después hasta permitir el acceso de aplicaciones menos seguras.
O damos clic [aquí](https://myaccount.google.com/security) y nos llevará automáticamente a la sección de configuración.  


__Ejecucion de la aplicacion__
* Es necesario tener instalado en la máquina los servicios de Docker y Docker-compose
* Una vez descargado el repositorio, se realizan los siguientes comandos:
###
   ```
    $ sudo docker-compose build
    $ sudo docker-compose up
   ```
   - Se recomienda terminar la ejecución cuando se forme un error, luego de esto realizar el siguiente comando en la carpeta    /etc/nginx/ssl
   
   ```
   $sudo cp nginx.crt ../../../home/username/path/ssl/
   $sudo cp nginx.key ../../../home/username/path/ssl/
   ```
   
###  
* Ejecutar de nuevo los comandos de docker y listo, nuestra aplicacion estará corriendo en nuestro servidor

Se puede acceder a la aplicación actual a través del siguiente link:[dbenite2.dis.eafit.edu.co](https://dbenite2.dis.eafit.edu.co)
O tambien por servicio [Amazon](https://ec2-18-191-182-154.us-east-2.compute.amazonaws.com)
