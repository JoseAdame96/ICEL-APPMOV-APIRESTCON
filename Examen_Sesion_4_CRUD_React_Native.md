# Examen Practico - Sesion 4

## Desarrollo de Aplicaciones Moviles

**Universidad ICEL**  
**Carrera:** Sistemas  
**Modalidad:** Curso sabatino intensivo  
**Tecnologias:** Expo, React Native, Git, GitHub, Spring Boot, PostgreSQL y Railway  
**Entrega:** App movil funcionando + repositorio GitHub + documento de evidencia  
**Modalidad de entrega:** Individual

---

## 1. Objetivo del examen

Terminar una aplicacion movil en React Native con Expo que consuma la API del curso.

La app debe permitir trabajar con tareas/items usando operaciones CRUD:

- Consultar registros.
- Ver el detalle de un registro.
- Crear un nuevo registro.
- Actualizar un registro existente.
- Eliminar un registro.

En esta entrega se debe demostrar el uso de navegacion, estado, formularios, peticiones HTTP y evidencia con Git/GitHub.

---

## 2. Punto de partida

Durante el curso ya se trabajo con:

- Proyecto Expo base.
- Componentes basicos de React Native.
- `useState`.
- Navegacion con React Navigation.
- Pantallas `Home`, `Items`, `Detail` y `AddItem`.
- Consumo de API con `fetch`.
- Carga de listado remoto con `GET /items`.
- Manejo basico de `loading`, `error` y datos.
- Uso de Git y GitHub como evidencia de proceso.

El trabajo final consiste en completar la app para que funcione como una aplicacion CRUD conectada a la API.

---

## 3. API a utilizar

**URL base:**

```text
https://api-items-icel-production.up.railway.app
```

Importante:

- La URL base no debe terminar en `/items` si en el codigo se arma la ruta como `${BASE_URL}/items`.
- El campo `id` viene desde la API y puede llegar como numero. Si se usa en `FlatList`, conviertanlo a texto con `item.id.toString()`.
- La API sera usada por todo el grupo. Para evitar borrar trabajo de otras personas, cada item creado debe incluir el nombre o iniciales del estudiante en el titulo o descripcion.
- Solo deben editar o eliminar items creados por ustedes.

---

## 4. Contrato de endpoints

### Probar estado de la API

```text
GET /health
```

Respuesta esperada:

```text
API Items ICEL OK
```

---

### Listar items

```text
GET /items
```

Respuesta esperada:

```json
[
  {
    "id": 1,
    "title": "Crear app con Expo",
    "description": "Proyecto base creado con Expo Go y React Native"
  }
]
```

---

### Consultar detalle

```text
GET /items/{id}
```

Ejemplo:

```text
GET /items/1
```

Respuesta esperada:

```json
{
  "id": 1,
  "title": "Crear app con Expo",
  "description": "Proyecto base creado con Expo Go y React Native"
}
```

---

### Crear item

```text
POST /items
```

Body:

```json
{
  "title": "Nuevo desde app",
  "description": "Creado desde React Native"
}
```

Respuesta esperada:

```json
{
  "id": 4,
  "title": "Nuevo desde app",
  "description": "Creado desde React Native"
}
```

---

### Actualizar item

```text
PUT /items/{id}
```

Ejemplo:

```text
PUT /items/4
```

Body:

```json
{
  "title": "Titulo actualizado",
  "description": "Descripcion actualizada"
}
```

Respuesta esperada:

```json
{
  "id": 4,
  "title": "Titulo actualizado",
  "description": "Descripcion actualizada"
}
```

---

### Eliminar item

```text
DELETE /items/{id}
```

Ejemplo:

```text
DELETE /items/4
```

Respuesta esperada:

```text
204 No Content
```

---

## 5. Estructura recomendada

La app debe mantener una estructura clara:

```text
services/
  api.js

screens/
  HomeScreen.js
  ItemsScreen.js
  DetailScreen.js
  AddItemScreen.js
  EditItemScreen.js

components/
  ItemCard.js opcional
```

No es obligatorio crear componentes extra, pero se recomienda separar el codigo de API en `services/api.js`.

La pantalla de edicion puede ser una pantalla nueva (`EditItemScreen`) o una reutilizacion del formulario de `AddItemScreen`, siempre que permita modificar un item existente.

---

## 6. Funciones sugeridas en services/api.js

El archivo `services/api.js` debe concentrar las peticiones HTTP.

Funciones esperadas:

```js
getItems()
getItemById(id)
createItem(item)
updateItem(id, item)
deleteItem(id)
```

Pista:

```js
const BASE_URL = 'https://api-items-icel-production.up.railway.app';
```

Para enviar datos al backend deben usar:

```js
headers: {
  'Content-Type': 'application/json',
}
```

Y convertir el objeto a JSON con:

```js
body: JSON.stringify(item)
```

---

## 7. Funcionalidad minima obligatoria

Para considerar el examen como entregado, la app debe:

1. Ejecutarse con Expo.
2. Mostrar listado remoto usando `GET /items`.
3. Abrir el detalle de un item usando navegacion.
4. Crear un item nuevo usando `POST /items`.
5. Actualizar el listado despues de crear.
6. Subirse a GitHub con commits del proceso.
7. Incluir documento de evidencia.

---

## 8. Funcionalidad esperada para calificacion completa

Ademas de lo minimo, la app debe:

1. Permitir editar un item con `PUT /items/{id}`.
2. Permitir eliminar un item con `DELETE /items/{id}`.
3. Mostrar estados de carga cuando se consulte o guarde informacion.
4. Mostrar mensajes de error cuando falle una peticion.
5. Validar que el formulario no envie campos vacios.
6. Mantener la navegacion entre pantallas de forma ordenada.

---

## 9. Nivel destacado

Se considerara trabajo destacado si la app incluye:

- Confirmacion antes de eliminar.
- Boton para recargar el listado.
- Pantalla o modo de edicion reutilizando el formulario.
- Mensajes claros para el usuario.
- Codigo limpio y separado por responsabilidades.
- Commits descriptivos.

---

## 10. Restricciones

- Usar Expo Go.
- No es obligatorio Android Studio.
- Usar `fetch`, no Axios.
- No agregar dependencias innecesarias.
- No modificar el backend.
- No usar datos locales como resultado final del listado.
- No borrar items creados por otros companeros.
- No entregar solo capturas: la app debe estar en GitHub.
- No entregar el proyecto sin commits.

---

## 11. Actividad principal

Completar la app movil para que realice CRUD contra la API del curso.

Flujo esperado:

1. El usuario entra a la app.
2. Entra a la pantalla de listado.
3. La app carga datos desde Railway.
4. El usuario puede abrir el detalle.
5. El usuario puede crear un nuevo item.
6. El usuario puede editar un item.
7. El usuario puede eliminar un item.
8. La app actualiza el listado despues de crear, editar o eliminar.

---

## 12. Evidencia de entrega

Entrega un documento en PDF o Word con:

1. Nombre completo.
2. Nombre de la materia.
3. URL del repositorio en GitHub.
4. Captura de la terminal ejecutando Expo.
5. Captura del codigo de `services/api.js`.
6. Captura del listado cargado desde la API.
7. Captura del formulario para crear.
8. Captura de un item creado en la app.
9. Captura de la pantalla de edicion funcionando o del codigo que realiza el `PUT`.
10. Captura de la eliminacion funcionando o del codigo que realiza el `DELETE`.
11. Captura de commits en GitHub.
12. Breve explicacion de que fue lo mas dificil y como se resolvio.

El repositorio debe incluir un `README.md` breve con:

- Nombre del proyecto.
- Comando para instalar dependencias.
- Comando para ejecutar la app.
- URL base usada para la API.

---

## 13. Commits esperados

El repositorio debe mostrar evidencia del proceso.

Commits sugeridos:

```text
Sesion 4 - conectar POST con API
Sesion 4 - agregar edicion de item
Sesion 4 - agregar eliminacion de item
Sesion 4 - evidencia final CRUD
```

No es necesario usar exactamente esos nombres, pero los commits deben ser claros.

---

## 14. Rubrica de evaluacion

| Criterio | Puntos |
|---|---:|
| App ejecuta correctamente en Expo | 10 |
| Listado remoto con `GET /items` | 15 |
| Navegacion a detalle funcionando | 10 |
| Creacion con `POST /items` | 15 |
| Edicion con `PUT /items/{id}` | 15 |
| Eliminacion con `DELETE /items/{id}` | 15 |
| Manejo basico de loading/error/validacion | 10 |
| GitHub con commits y documento de evidencia | 10 |
| **Total** | **100** |

---

## 15. Entrega

Entrega:

1. URL del repositorio GitHub.
2. Documento de evidencia en PDF o Word.
3. El repositorio debe estar publico o accesible para revision.
4. La app debe poder ejecutarse con:

```bash
npm install
npx expo start
```

---

## 16. Recomendaciones finales

- Primero hagan funcionar `GET`.
- Despues conecten `POST`.
- Luego resuelvan `PUT`.
- Al final agreguen `DELETE`.
- Prueben cada endpoint por separado.
- Hagan commits cuando una parte ya funcione.
- Si algo falla, revisen primero la URL, el metodo HTTP y el body enviado.
- No eliminen items que no hayan creado ustedes.

El objetivo no es memorizar codigo, sino demostrar que pueden conectar una app movil con la API del curso y documentar su proceso de desarrollo.
