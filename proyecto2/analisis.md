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

**Sistema de ingesta de datos** 

Para la ingesta de datos tomamos la información de dos fuentes en total, las cuales venían presentes en dos archivos con formato “txt”, para este proyecto en específico los dos archivos tenían un peso de aproximadamente 0,5 GB y 0,2 GB respectivamente. Para poder pasar a hacer la ingesta, primero se debía hacer una limpieza de datos ya que contenían información irrelevante para su análisis, después de la limpieza transformar esa información en archivos JSON para poder hacer la carga en la base de datos MongoDB, todo esto se hizo a través de scripts en PHP que hacían la limpieza y transformación de la data. La carga de la data se hizo por medio de la tecnología Studio 3T que nos permite la importación y exportación de data a una base de datos mediante archivos JSON.
