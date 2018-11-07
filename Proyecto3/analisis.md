## Primer informe del proyecto 3 de la materia Topicos Especiales en Telématica 

1. Problema a resolver
2. Arquitectura preliminar de datos (ciclo de vida, almacenamiento, procesamiento)
3. Fuentes y naturaleza de los datos + tecnologías a utilizar
4. Sistema de ingesta de datos + tecnologías a utilizar
5. Almacenamiento de los datos + tecnologías a utilizar
6. Análisis de datos + tecnologías a utilizar 

**Problema a resolver** 

Al realizar la busqueda de casos de estudios similares a la problematica propuesta , hallamos el curso __Real-Time Analytics with Apache Storm__ al cual hacemos referencia en nuestro proyecto. El proyecto del curso consiste en realizar analitica de datos en tiempo real con twitter, obteniendo los tweets mas relevantes y que palabras están siendo mas usadas en estos tweets, visualizandolos en un navegador, entre mas se repita la palabra , mas grande se verá la visualización. 

**Fuentes y naturaleza de datos**

 Para nuestro caso de estudio, los datos son obtenidos a través de un streaming por parte de twitter, estos datos no son mas que tweets , que corresponden a la cuenta de la cual se estan consumiendo las credenciales. Todos los datos son en tiempo real, esto quiere decir que se obtienen datos como: 
 * tendencias en la red 
 * conversaciones de usuarios (hilos y comentarios)
 * recomendaciones y busquedas   
 Todos estos datos se van recibiendo instantaneamente a medida que llegan al feed de la cuenta. 
 Los naturaleza de los datos no es mas que Strings, que se modifican a tuplas y topologias en su posterior procesamiento.
 Con respecto a la tecnología a utilizar, se utiliza Twitter como fuente principal y Storm para su procesamiento.

**Sistema de ingesta de datos** 

Para la ingesta de datos tomamos la información de dos fuentes en total, las cuales venían presentes en dos archivos con formato “txt”, para este proyecto en específico los dos archivos tenían un peso de aproximadamente 0,5 GB y 0,2 GB respectivamente. Para poder pasar a hacer la ingesta, primero se debía hacer una limpieza de datos ya que contenían información irrelevante para su análisis, después de la limpieza transformar esa información en archivos JSON para poder hacer la carga en la base de datos MongoDB, todo esto se hizo a través de scripts en PHP que hacían la limpieza y transformación de la data. La carga de la data se hizo por medio de la tecnología Studio 3T que nos permite la importación y exportación de data a una base de datos mediante archivos JSON.

**Almacenamiento de los datos** 

Para el almacenamiento de los datos, no se hace uso de ninguna tecnología, puesto que los datos son recibidos en tiempo real y son procesados y analizados en el instante, por lo que no se logra alcanzar a almacenar estos datos, sin embargo, es importante tener en cuenta que , a pesar de que los datos no son almacenados, el analizis si debe de ser documentado para así poder hacer un buen uso de este. 
No se utiliza ninguna tecnología.

**Análisis de datos**

Con el fin de realizar una buena toma de decisiones en cualquier negocio, se recurre al BI a través de varias herramientas que ofrece el mundo del análisis de los datos. Para este caso en particular la herramienta propuesta para hacer inteligencia de negocio sobre la data es Pentaho Data Integration, la cual parte de su funcionalidad es el análisis de cualquier cantidad de datos. Esta herramienta nos permitirá realizar consultas complejas que pueden llegar a responder grandes interrogantes acerca del negocio, en este caso películas de Netflix, de una manera más fácil.
