# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.









Perfecto, el clásico TODO list es el "Hola Mundo" de las apps interactivas. Y tienes toda la razón: la clave para aprender como un verdadero desarrollador no es solo escribir código, sino **pensar en términos de módulos, responsabilidades y flujo de datos**.

Aquí vamos. Sin una sola línea de código. Solo con la lógica y las herramientas conceptuales para que tú mismo construyas los puentes.

---

## Fase 0: El Enfoque Mental (Antes de tocar el teclado)

Un desarrollador no abre VS Code y empieza a escribir. Primero, **segmenta el problema**. Tu app tiene 3 capas bien diferenciadas:

1.  **La Vista (UI):** Lo que el usuario ve (lista de tareas, botones, estilos).
2.  **La Lógica de Estado:** Cómo se crean, actualizan y eliminan las tareas en la memoria de la app.
3.  **La Persistencia:** Cómo se guardan esas tareas para que no mueran al actualizar la página.

Cada capa puede (y debe) desarrollarse de forma independiente.

---

## Fase 1: Modelado de Datos (¿Qué es una "Tarea"?)

Antes de guardar nada, define la forma de tu dato principal.

- **Concepto a aprender:** ¿Cuáles son las propiedades mínimas que necesita una tarea?
    - Un identificador único (para que React sepa diferenciarlas).
    - Un texto descriptivo.
    - Un estado booleano (completada o no).

- **Ejemplo ajeno:** Si modelaras un libro, sería `{ id: 1, titulo: "Cien años de soledad", autor: "GGM", leido: false }`. Tú haz lo mismo con tu tarea.

**Tu tarea aquí:** Define en papel (o en un comentario en tu código) el objeto "Tarea" con 3 o 4 propiedades esenciales.

---

## Fase 2: El Estado Central (Donde viven las tareas mientras usas la app)

React necesita saber en todo momento cuál es la lista actual de tareas.

- **Concepto a aprender:** `useState` con un array. El estado inicial puede ser un array vacío `[]`.

- **Ejemplo ajeno:** Si hicieras un carrito de compras, tu estado sería `[ { producto: "leche", cantidad: 2 }, { producto: "pan", cantidad: 1 } ]`. Aquí tu array será de tareas.

**Tu tarea aquí:** Piensa en qué componente debería "poseer" este estado. ¿En el componente principal `App`? (spoiler: sí, para que otros componentes hijos puedan acceder a él o modificarlo).

---

## Fase 3: El CRUD desde la Vista (Las 4 operaciones básicas)

Cada acción del usuario debe modificar el estado. No modificas el DOM directamente, modificas el estado y React re-dibuja.

- **Concepto a aprender:** Funciones que actualizan el estado usando el **spread operator** `...` o `map` / `filter`. Recuerda: nunca mutar el estado directamente.

### a) Crear una tarea
- ¿Qué dispara la acción? Un formulario con un input y un botón "Agregar".
- ¿Qué necesitas? Obtener el texto del input, crear un nuevo objeto tarea (`id: Date.now()`, texto, completada: false) y añadirlo al array del estado.

- **Ejemplo ajeno (crear):** Agregar un nuevo correo a una lista de correos. Tomas el asunto y el cuerpo, creas un objeto `correo` y usas `setCorreos([...correos, nuevoCorreo])`.

### b) Leer (Mostrar la lista)
- Es simplemente recorrer el array del estado con `.map()` y por cada tarea, renderizar un componente que muestre su texto y su estado.

- **Concepto ajeno:** Es como tener una lista de nombres en Excel y pedirle a React que pinte una fila por cada nombre.

### c) Actualizar (Marcar como completada)
- La tarea tiene que cambiar su propiedad `completada` de `false` a `true` (o viceversa).
- ¿Cómo saber a cuál tarea afecta? Cada tarea necesita un botón o checkbox que, al hacer clic, envíe su `id`.
- La función debe recorrer el array, encontrar la tarea con ese `id` y crear *una copia nueva de esa tarea* con el valor cambiado.

- **Ejemplo ajeno (actualizar):** Tienes una lista de alumnos. Quieres marcar a uno como "presente". Buscas a Juan Pérez (por su ID) y devuelves un nuevo objeto `{ ...juan, presente: true }` dentro de un nuevo array.

### d) Borrar una tarea
- Botón "Eliminar" junto a cada tarea. Al hacer clic, se envía el `id`.
- La función debe filtrar el array, quedándose solo con las tareas cuyo `id` sea **diferente** al que quieres borrar.

- **Ejemplo ajeno (borrar):** De una lista de canciones en una playlist, eliminar "Despacito". Usas `filter(cancion => cancion.id !== idAEliminar)`.

**Tu tarea aquí:** Sin escribir el código, escribe en español los pasos que haría la función `agregarTarea` y la función `borrarTarea`.

---

## Fase 4: Estilo Condicional (El cambio visual al completar)

No basta con cambiar el estado booleano. La tarea completada debe verse "tachada", gris, o con otro color.

- **Concepto a aprender:** Asignar una clase CSS de forma condicional usando **template literals** o bibliotecas como `classnames`.

- **Ejemplo ajeno:** En un chat, los mensajes del usuario se ven con fondo azul, los de los demás con fondo gris. Si `esUsuario === true`, aplicas la clase `.mensaje-propio`.

**Tu tarea aquí:** Piensa en qué propiedad de la tarea decides si la línea del texto debe aparecer tachada (`text-decoration: line-through`).

---

## Fase 5: Persistencia con LocalStorage (La magia contra el olvido)

Aquí separamos responsabilidades: un módulo exclusivo para guardar y cargar datos.

- **Concepto a aprender:**
    - `localStorage.setItem('clave', JSON.stringify(tusDatos))` → para guardar.
    - `localStorage.getItem('clave')` → para recuperar. Como devuelve string, usas `JSON.parse()` para convertirlo a array nuevamente.
    - `useEffect` → para sincronizar el estado con el localStorage cada vez que el estado cambie.

- **Ejemplo ajeno:** Una app de notas que guarda tu último borrador. Cada vez que escribes algo, se guarda en localStorage. Cuando vuelves a abrir la app, se carga ese borrador automáticamente.

**Tu tarea aquí:** Define el flujo:
1. ¿Cuándo debe **cargarse** los datos desde localStorage? (Pista: justo al iniciar la app, como valor inicial del estado).
2. ¿Cuándo debe **guardarse** los datos en localStorage? (Pista: cada vez que cambie la lista de tareas: agregar, completar, borrar... Para eso sirve `useEffect` que "escucha" cambios en el estado).

---

## Fase 6: Modularización (Piensa en componentes pequeños)

Un solo componente `App` con todo dentro es un caos. Divídelo en piezas con **una sola responsabilidad**.

Posible estructura de carpetas (solo nombres, no código):

- `components/`
    - `TaskList.jsx` → Solo se encarga de recibir la lista de tareas y renderizar cada `<TaskItem />`
    - `TaskItem.jsx` → Recibe UNA tarea y las funciones para completarla/borrarla. Se encarga del estilo condicional.
    - `TaskForm.jsx` → Solo contiene el input y el botón para agregar. Maneja su propio estado local del input (con `useState` para el texto temporal).
- `hooks/`
    - `useLocalStorage.js` → Un custom hook que abstrae la lógica de guardar/cargar. (Concepto avanzado pero poderoso).
- `App.jsx` → El orquestador: tiene el estado principal y las funciones del CRUD, y pasa los datos a los hijos mediante `props`.

- **Ejemplo ajeno (modularizar):** Una calculadora. No pones todo en un archivo. Tienes `Display.jsx`, `Button.jsx`, `ButtonPanel.jsx`. Cada uno es fácil de probar y mantener por separado.

**Tu tarea aquí:** Dibuja en una hoja cómo se comunicarían estos componentes. ¿Quién tiene el estado? ¿Quién le pasa la función `onComplete` a `TaskItem`?

---

## Resumen de tu Plan de Ataque (Orden sugerido)

1.  **Define el objeto Tarea** (modelo).
2.  **Crea el estado inicial** en `App` con `useState` y un array de 2 o 3 tareas de ejemplo (hardcodeadas, sin localStorage aún).
3.  **Renderiza la lista** con `.map()` y muestra el texto de cada tarea.
4.  **Implementa el CRUD uno por uno:**
    - Agregar tarea (necesitas un input controlado).
    - Borrar tarea (usa `filter`).
    - Completar tarea (usa `map` y cambia el booleano).
5.  **Añade el estilo condicional** (clase CSS dinámica).
6.  **Añade el localStorage**:
    - Carga inicial: si hay datos guardados, úsalos; si no, array vacío.
    - Guardado: con `useEffect` que se ejecute cada vez que `tareas` cambie.
7.  **Refactoriza en componentes pequeños** (empieza separando `TaskItem`, luego `TaskForm`...).

Cada paso debe funcionar por sí solo antes de pasar al siguiente. Así trabajan los profesionales: **incrementos funcionales pequeños y estables**.

¿Empezamos por el paso 1? Define tu objeto `Tarea` en comentarios o en papel y dime cuando lo tengas claro.