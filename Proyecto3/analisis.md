## Primer informe del proyecto 3 de la materia Topicos Especiales en Telématica 

1. Problema a resolver
2. Arquitectura preliminar de datos (ciclo de vida, almacenamiento, procesamiento)
3. Fuentes y naturaleza de los datos + tecnologías a utilizar
4. Sistema de ingesta de datos + tecnologías a utilizar
5. Almacenamiento de los datos + tecnologías a utilizar
6. Análisis de datos + tecnologías a utilizar 

**Problema a resolver** 

Al realizar la busqueda de casos de estudios similares a la problematica propuesta , hallamos el curso __Real-Time Analytics with Apache Storm__ al cual hacemos referencia en nuestro proyecto. El proyecto del curso consiste en realizar analitica de datos en tiempo real con twitter, obteniendo los tweets mas relevantes y que palabras están siendo mas usadas en estos tweets, visualizandolos en un navegador, entre mas se repita la palabra , mas grande se verá la visualización. 

**Arquitectura preliminar de datos**

![arch](https://user-images.githubusercontent.com/26205558/48113709-27db7e00-e22a-11e8-8705-d1c672143915.jpeg)
La arquitectura de los datos en Twitter, son simplemente conjuntos de multiples frases u oraciones, así que la solución a desarrollar es tomar ese conjunto de frases que fluye por algo denominado Tweet Spout Tasks, interpretarlo como tuplas, que son listas inmutables de elementos ordenados, donde estas a su vez, generan nuevas tuplas, que son la unión de tuplas anteriores o conservación de las mismas y con esa arquitectura de datos ya se puede realizar un simple conteo de palabras (Word count)

**Fuentes y naturaleza de datos**

 Para nuestro caso de estudio, los datos son obtenidos a través de un streaming por parte de twitter, estos datos no son mas que tweets , que corresponden a la cuenta de la cual se estan consumiendo las credenciales. Todos los datos son en tiempo real, esto quiere decir que se obtienen datos como: 
 * tendencias en la red. 
 * conversaciones de usuarios (hilos y comentarios).
 * recomendaciones y busquedas.   
 
 Todos estos datos se van recibiendo instantaneamente a medida que llegan al feed de la cuenta. 
 Los naturaleza de los datos no es mas que Strings, que se modifican a tuplas y topologias en su posterior procesamiento.
 Con respecto a la tecnología a utilizar, se utiliza Twitter como fuente principal y Storm para su procesamiento.

**Sistema de ingesta de datos** 

Para esta prueba de concepto especifica no aplica este punto, porque si partimos de la definición de ingesta de datos, propuesta para el curso tópicos especiales en telemática, la cual es el paso o proceso de pasar de la fuente hasta el almacenamiento nos encontramos con una restricción, y es que la tecnología Apache Storm no hace uso de almacenamiento para la realización de datastreaming al contrario, pasa directo de la fuente de datos hasta su procesamiento.

**Almacenamiento de los datos** 

Para el almacenamiento de los datos, no se hace uso de ninguna tecnología, puesto que los datos son recibidos en tiempo real y son procesados y analizados en el instante, por lo que no se logra alcanzar a almacenar estos datos, sin embargo, es importante tener en cuenta que , a pesar de que los datos no son almacenados, el analizis si debe de ser documentado para así poder hacer un buen uso de este. 
No se utiliza ninguna tecnología.

**Análisis de datos**

Para el análisis de esta información transformada no se está utilizando una tecnología específica, dicho análisis es superficial ya que se hace a través de datos visualizados en un browser, esto se logró gracias a una biblioteca de javascript llamada D3 Viz, la cual permite la creación de graficas o infogramas que se conciben a través de los datos procesados por el pipeline de Apache Storm, estos infogramas van variando según los parámetros que reciben, para nuestra prueba de concepto se tiene un infograma que va aumentando el tamaño de la palabra a medida que esta va incrementado en la cantidad de apariciones en los tweets.

**Resumen Marco Teorico**
¿Qué son los datos streaming?
Los datos de streaming son datos que se generan constantemente a partir de miles de fuentes de datos, que normalmente envían los registros de datos simultáneamente en conjuntos de tamaño pequeño (varios kilobytes). Los datos de streaming incluyen diversos tipos de datos, como archivos de registros generados por los clientes que utilizan sus aplicaciones móviles o web, compras electrónicas, actividades de los jugadores en un juego, información de redes sociales, operaciones bursátiles o servicios geoespaciales, así como telemetría de dispositivos conectados o instrumentación en centros de datos. [1]
Teniendo claro el concepto de Data Streaming, necesitaremos una fuente de datos la cual analizar, que en nuestro caso específico utilizaremos la red social Twitter, además de otras herramientas como lo son Storm que es un sistema de procesamiento de datos en tiempo real, Vagrant la herramienta para la configuración del entorno soportada por Virtual Box.

###### Referencias

[1]	Amazon, «Amazon,» [En línea]. Available: https://aws.amazon.com/es/streaming-data/. 