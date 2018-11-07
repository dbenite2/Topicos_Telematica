## PASOS PARA UNA CORRECTA EJECUCIÓN DEL PROYECTO
 
 Para poder visualizar el proyecto, es necesario tener primero el ambiente configurado:
 * Primero vamos a descargar un ambiente de virtualización como VMware o VirtualBox. Para los siguientes ejemplos pasos vamos a estar utilizando VirtualBox:
    https://www.virtualbox.org/wiki/Downloads
 * Ahora vamos a descargar e instalar Vagrant: 
    https://www.vagrantup.com
Recuerda descargar la versión segun el sistema operativo en el que estés trabajando.

* Ahora procedemos a clonar o descargar la aplicación : 
* nos dirigimos a la carpeta del proyecto y ejecutamos el siguiente comando:
  ```
  vagrant up 
  ``` 
 Esto puede tomar algun tiempo segun la velocidad de red de la que disponga. 
 
 * Despues de todo esté listo, vamos a entrar a la maquina virtual a través del ssh provisto por vagrant: 
    ```
    vagrant ssh
    ``` 
 
 * Nos cercioramos de que si estemos en la maquina virtual y no en nuestra maquina y ejecutamos el siguiente comando: 
 
    ```
    mvn clean
    ``` 
    
Van a aparecer una serie de descargas que tomaran aproximadamente de 1-2 min segun la velocidad de la red. 

* Una vez que aparezca el mensaje " Build success " , ejecutamos por ultimo el siguiente comando: 

   ```
   mvn package
   ``` 
   
* Nos dirigimos a vagrant/viz y ejecutamos el comando:
    ```
    python app.py
    ```

Ahora en nuestro navegador de preferencia y abrimos http://127.0.0.1:5000  para poder ver la aplicación ejecutando.
 
