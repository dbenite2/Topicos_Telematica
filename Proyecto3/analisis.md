## Primer informe del proyecto 2 de la materia Topicos Especiales en Telématica 

1. Problema a resolver
2. Arquitectura preliminar de datos (ciclo de vida, almacenamiento, procesamiento)
3. Fuentes y naturaleza de los datos + tecnologías a utilizar
4. Sistema de ingesta de datos + tecnologías a utilizar
5. Almacenamiento de los datos + tecnologías a utilizar
6. Análisis de datos + tecnologías a utilizar 

**Problema a resolver** 

Basados en el proyecto que se realizo en la materia Gestión de Datos Grandes el semestre pasado(2018-1)
se decidió usar el proyecto como base para realizar la prueba de concepto.

El proyecto consiste en tomar datos proveeidos por Netflix , normalizarlos para su posterios analisis y mejor uso , y luego , a traves del uso de las redes sociales (twitter) recopilar información en tiempo real (datos vivos) sobre la opinion publica de las peliculas que constituan los datasets de netflix. 

**Fuentes y naturaleza de datos**

Los datos fueron suministrados por Netflix a través de la reconocida pagina de data scientists Kaggle, con el fin de realizar un concurso de data mining. Los datos fueron tomados para el proyecto y estos se encontraban divididos en 2 formas: Las peliculas con su información basica, y una combinación de datos con la puntuación de las peliculas dada por los usuarios.
Los dataset vinieron en dos formatos: csv y txt ;  La información de las peliculas, llamado movie_titles , era la que estaba en formato csv, mientras que los datos combinados , llamado combined_data_2, la cual era la que estaba en formato txt.
Los datos contenian en el archivo movie_titles lo siguiente 
* nombre de la pelicula 
* fecha del lanzamiento 
* id(por parte de Netflix) de la pelicula.

Los datos contenidos en el archivo combined_data_2 fueron los siguientes: 
* id de la pelicula 
* nombre de la pelicula 
* fecha de lanzamiento 
* puntuación por usuario 
* fecha de puntuación 

**Sistema de ingesta de datos** 

Para la ingesta de datos tomamos la información de dos fuentes en total, las cuales venían presentes en dos archivos con formato “txt”, para este proyecto en específico los dos archivos tenían un peso de aproximadamente 0,5 GB y 0,2 GB respectivamente. Para poder pasar a hacer la ingesta, primero se debía hacer una limpieza de datos ya que contenían información irrelevante para su análisis, después de la limpieza transformar esa información en archivos JSON para poder hacer la carga en la base de datos MongoDB, todo esto se hizo a través de scripts en PHP que hacían la limpieza y transformación de la data. La carga de la data se hizo por medio de la tecnología Studio 3T que nos permite la importación y exportación de data a una base de datos mediante archivos JSON.

**Análisis de datos**

Con el fin de realizar una buena toma de decisiones en cualquier negocio, se recurre al BI a través de varias herramientas que ofrece el mundo del análisis de los datos. Para este caso en particular la herramienta propuesta para hacer inteligencia de negocio sobre la data es Pentaho Data Integration, la cual parte de su funcionalidad es el análisis de cualquier cantidad de datos. Esta herramienta nos permitirá realizar consultas complejas que pueden llegar a responder grandes interrogantes acerca del negocio, en este caso películas de Netflix, de una manera más fácil.
