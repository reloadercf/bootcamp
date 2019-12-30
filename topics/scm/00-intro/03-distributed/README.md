# Sistemas distribuidos

* Tipo: `video`
* Formato: `self-paced`
* Duración: `2min`

***

Hoy en día, en el mundo del software, lo más común es usar sistemas de control
de versiones distribuidos, y NO centralizados. Esto básicamente significa que no
hay un nodo central, sino que cada nodo es una copa completa del repositorio,
con su propia versión de la historia completa del proyecto.

En el contexto de los sistemas de control de versiones distribuidos encontramos
herramientas como [Git](https://git-scm.com/) (indiscutiblemente el más popular)
o [Mercurial](https://www.mercurial-scm.org/).

Comparado al modelo centralizado, la primera diferencia que veremos es que la
operación de `commit` se convierte en una operación local, si necesitar del
servidor, permitiendo así el trabajo desconectado.

Al mismo tiempo, al ser un sistema distribuido, veremos que podemos enviar y
traer cambios de cualquier otro nodo al que tengamos acceso, creando una red
mucho más compleja.

En un sistema distribuido como `git`, para obtener una _copia local_ de un
repositorio remoto lo que hacemos es _clonar_ el repo remoto. La operación
`clone` nos da una _copia local_ de todo el repo, con toda la historia del
proyecto.

Por otro lado, también podemos hacer un _fork_ de un repositorio remoto, que
simplificando podríamos decir que es una _copia remota_ del repositorio,
original, que a su vez también es un repositorio completo, con toda la historia.

Al trabajar bajo el modelo distribuido, es común seguir un flujo de trabajo
donde cada desarrollador tenga su propio _fork_ del repositorio original,
normalmente llamado _upstream_, y que es donde se hará la integración final,
releases, etc. Una vez creado su fork, cada una _clonaría_ el repositorio de su
propio _fork_, al cual tiene acceso completo (escritura y lectura). Más adelante
veremos ejemplos más detallados cuando veamos `git` y GitHub en conjunto.

```
 __________________________________________pull___________________
|                                                                 |
|   _________            _________          _________          ___v_____
|  |         |          |         |        |         |        |         |
|  |   A📁   |          |   B📁   |        |   C📁   |        |   D📁   |
|  | (local) |          | (local) |        | (local) |        | (local) |
|  |_________|          |_________|        |_________|        |_________|
|    |    ^               ^   | ^            ^  |               ^    |
|    |    |        _clone_|   | |      clone |  | push   _clone_|    |
|    |    |       /           | |            |  |       /            |
|    |    |_pull_/__          | |            |  |      /             |
|----|----------/---\---------|-|------------|--|-----/-- Internet --|----------
|    | push    /     \        | |            |  |    /               |
|    |        /       \  push | |            |  |   /                |
|   _v_______/__       \______v_|_        ___|__v__/_                |
|  |            |     |           |      |           |               |
---|     🏢     |     |    🏢     |      |    🏢     |<-----push----/
   | (upstream) |     |  (remote) |      |  (fork)   |
   |____________|     |___________|      |___________|
       ^   |                                ^   |
       |   |______________fork______________|   |
       |__________________pull request__________|
```

En la ilustración de arriba vemos un ejemplo de como el usuario `A` comienza por
crear un _repositorio local_, depués crea un _repositorio remoto_ (_upstream_).
Después el usuario `B` _clona_ directamente de _upstream_, y después crea un
repo remoto (posiblemente en un proveedor diferente), al que empuja sus cambios.
El usuario `C` en cambio crea su propio _fork_, que después clonará y al que
podrá enviar cambios. Finalmente el usuario `D` _clona_ directamente del _fork_
de `C`, y en este ejemplo asumimos que `C` le ha dado permisos tanto de lectura
como de escritura ya que vemos que `D` empuja camnios (`push`) directamente al
_fork_ de `C`.

También podemos ver que se envian _pull requests_ desde el _fork_ de `C` a
_upstream_ y que cualquiera puede interactuar con cualquier otro nodo al que
tenga acceso - por ejemplo `D` trae cambios directamente de _upstream_.

Como reflexión, es importante entender que los sistemas distribuidos agregan una
complejidad considerable, pero a su vez nos empoderan como desarrolladores
dándonos mucha más flexibilidad, capacidad de colaboración y seguridad.
