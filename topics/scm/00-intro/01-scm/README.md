# Qué es SCM y control de versiones?

* Tipo: `video`
* Formato: `self-paced`
* Duración: `2min`

***

_SCM (Source Code Management en inglés)_, también conocido como
[_control de versiones_](https://es.wikipedia.org/wiki/Control_de_versiones),
hace referencia al manejo de cambios que se hace a archivos y carpetas a lo
largo de la vida de un producto de software.

La necesidad de organizar diferentes versiones de un mismo _documento_ existe
prácticamente desde el inicio de la escritura misma. Con la aparición de la
imprenta, veremos aparecer conceptos como _ediciones_ y _revisiones_, y al
llegar la era de la computación veremos como esta necesidad se vuelve todavía
más importante dando lugar a soluciones cada vez más sofisticadas y poderosas.

Veamos un ejemplo...

Imagina que un cliente te pide que le hagas una página web.

Para comenzar creas un prototipo en una carpeta local en tu computadora, y una
vez estás contenta con el resultado, lo publicas en un servidor y le compartes
el link a tu cliente.

El cliente ve el link y queda sorprendido, le encanta tu trabajo, pero quiere
que pruebes otra paleta de colores y un par de cambios más.

Ahora, para no afectar al prototipo original, ya que el cliente solo quiere
_probar_ y todavía no lo tiene claro, duplicamos la carpeta completa, hacemos
los cambios sobre la copia, publicamos, y volvemos a pedir feedback...

Parece que le gustaron los cambios, pero ahora quiere algunos cambios más, ...
me imagino que ya te imaginas por dónde va la cosa... pasadas unas semanas es
posible que terminemos con una docena de carpetas con _versiones_ distintas del
proyecto... y esto es un problema. Es un problema porque es fácil confundirse,
es fácil _sobre-escribir_ (_pisar_) cambios sin darse cuenta, es difícil
regresar a un estado anterior, es difícil integrar cambios entre diferentes
versiones, ... y todo esto sin mencionar temas de colaboración. Te imaginas que
ahora el cliente te pida que le mandes la _carpeta_ a otra persona, que también
va a hacer cambios? :scream:

El control de versiones nos permite organizar conjuntos de cambios en una
historia que nos permite regresar a ciertos puntos en esa historia, comparar y
ver los cambios que se introducen, así como quién los hace.
