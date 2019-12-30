# Sistemas centralizados (los origenes)

* Tipo: `video`
* Formato: `self-paced`
* Duración: `2min`

***

Los sistemas de control de versiones y manejo de código fuente existen desde el
origen de la ingeniería de software. Más tarde, con la llegada de internet y
después la web se popularizan sistemas centralizados con acceso remoto, que
hicieron posible la _colaboración_, permitiendo que muchas personas trabajen
sobre los mismos archivos.

Entre las primeras generaciones de estos sistemas podemos encontrar herramientas
como [CVS - Concurrent Versions System](https://www.nongnu.org/cvs/) y más
adelante [Apache® Subversion®](https://subversion.apache.org/).

En un sistema centralizado normalmente encontramos un _repositorio_ alojado en
un servidor, y cada usuario puede obtener una _copia local_ de una _versión_
(_revision_) para trabajar. A este proceso se le conoce como `checkout`. Bajo
el modelo centralizado, nuestra copia local NO es un _repositorio_ completo, y
por lo tanto no contiene la historia completa del proyecto.

Una vez que tenemos una copia local, el sistema nos permite enviar los cambios
que hagamos de vuelta al repositorio alojado en el servidor. Para ello, en el
contexto de `svn`, por ejemplo, usaríamos el comando `commit`, para indicar que
queremos _comprometer_ estos cambios y enviarlos de vuelta al repositorio.

En sistemas centralizados operaciones como `commit` ocurren en el servidor, lo
cual nos hace depender de la conexión a dicho servidor.

```
            (A📁) copia local - NO es un repo
             ^  |
  `checkout` |  | `commit`
             |  |
          ___|__v___
         |          |
(D📁)----|    🏢   🔒----(B📁) usuarios pueden bloquear archivos (`lock`) para
         | servidor |         evitar que otros modifiquen el mismo archivo
         |  (repo)  |
         |__________|
              |
              |
              |
            (C📁)
```

Para prevenir sobre-escribir cambios y posibles conflictos, este tipo de
sistemas, dada su naturaleza centralizada, también nos permiten hacer cosas como
_bloquear_ ciertos archivos o carpetas para que otros usuarios no los puedan
cambiar hasta que los hayamos desbloqueado, así como otras herramientas para
manejar conflictos e integración.

Hoy en día los sistemas centralizados han perdido mucha relevancia desde la
aparición de los sistemas distribuidos, y en particular la abrumante popularidad
de herramientas como `git` y GitHub.
