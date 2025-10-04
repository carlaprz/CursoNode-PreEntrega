# Proyecto Gestión de Productos con FakeStore API

## 1. Descripción
Aplicación en Node.js que interactúa con la FakeStore API desde la terminal. Permite consultar todos los productos, consultar por ID, crear y eliminar productos. El objetivo es practicar consumo de APIs, manejo de argumentos en CLI y organización de un proyecto con Node.js y ESModules.

---

## 2. Requerimientos Técnicos
- Node.js **18 o superior** (incluye `fetch` nativo).
- npm para gestionar scripts y dependencias.
- Si usas Node **< 18**, instala `node-fetch` (ver sección de instalación).

---

## Instalación

1. Clonar el repositorio o descargar el proyecto.
2. Instalar dependencias (solo necesario si se usa Node < 18):
   ```bash
   npm install

## 4. Estructura del Proyecto
La organización de archivos es la siguiente:

```
├── api.js         # Funciones asíncronas que manejan las llamadas a la API
├── index.js       # Punto de entrada: interpreta comandos y usa las funciones de api.js
├── package.json   # Configuración de npm, scripts y dependencias
```

---

## 5. Comandos Disponibles

- **Consultar todos los productos**
```bash
npm run start GET products
```

- **Consultar un producto específico (ejemplo: ID 5)**
```bash
npm run start GET products 5
```

- **Crear un producto nuevo**
```bash
npm run start POST products "Remera TechLab" 250 "ropa"
```

- **Eliminar un producto (ejemplo: ID 7)**
```bash
npm run start DELETE products/7
```

---

## 6. Ejemplo de Salida
```bash
> npm run start GET products 10
{
  "id": 10,
  "title": "Mens Casual Premium Slim Fit T-Shirts",
  "price": 22.3,
  "category": "men's clothing"
}
```

---

## 7. Apuntes Técnicos
- Uso de `process.argv` para interpretar argumentos en CLI.
- Consumo de APIs con `fetch` y manejo de errores (status HTTP).
- Separación de responsabilidades: `index.js` (CLI) y `api.js` (lógica de red).
- Script `npm run start` para simplificar ejecuciones.
