# Apertura

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `5min`

***

## ¿Por qué aprender esto?

Probar tu código es importante para garantizar que funcione como unx espera,
pero no solo eso, si no que escribir pruebas/tests desde el principio nos ayuda
a diseñar mejor nuestro código.

Escribimos tests para:

1. Facilitar el proceso de **diseño y especificación** (spec).
2. **Detectar problemas pronto**, lo que permite reducir el costo de
   modificaciones y facilitar la _mejora continua_.
3. **Probar/demostrar** que un programa funciona y/o no tiene fallas.
4. Poder **replicar bugs** y otras incidencias y validar soluciones (_fixes_).
5. Averiguar la **fiabilidad** de nuestro código.
6. **Verificar integración** en un sistema más grande.
7. **Asegurar comportamiento de interfaces**.
7. **Comprobar compatibilidad** con diferentes sistemas/entornos.

En esta unidad pondremos especial énfasis en el diseño orientado a pruebas
([Test Driven Development - TDD](https://en.wikipedia.org/wiki/Test-driven_development)).
Paso a paso veremos cómo escribir tus primeros tests y entender el valor tan
grande que aportan.

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

* ¿**Para qué** sirven las pruebas unitarias?
* ¿Qué es un **test**/prueba?
* ¿Cómo usar la librería standard de Node.js para **aserciones con `assert`**.
* ¿Qué es un **framework** de testing?
* ¿Cómo escribir tests (`describe()`, `it()`, `test()` ...).
* ¿Cómo usar las **aserciones de `jest`** (`expect`).
* ¿Cómo probar **funciones asíncronas (callbacks y promesas)**?
* ¿Cómo probar funciones que usen **`DOM`**, _emulando_ un entorno de navegador
  con `jest` y `jsdom`.
* ¿Cómo hacer **_mocks_** de módulos para evitar depender de la red u otras
  dependencias externas?
* ¿Como usar **funciones espía** para saber si otras funciones se invocaron?
* ¿Cómo usar **_fixtures_** y **_snapshots_** para facilitar el diseño de tests?
* ¿Qué es el **_code coverage_** (cobertura de código), para qué sirve, y cómo
  puedo mejorar la cobertura de mis tests?
* ¿En qué se diferencian las **pruebas unitarias** de las **pruebas de
  integración**?
* ¿Qué **otros tipos de pruebas** existen? (rendimiento, carga, seguridad,
  usuario, ...)
* ¿Qué **buenas prácticas** nos pueden ayudar a mantener nuestro código
  _testeable_? (responsabilidad única, efectos colaterales, estado compartido,
  dependencias, ...)
