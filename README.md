# 📦 json-to-firestore

**json-to-firestore** es una pequeña herramienta en **JavaScript/Node.js** para **cargar archivos JSON directamente a Cloud Firestore** (parte de Firebase) de forma rápida y automatizada.

Este proyecto está pensado como una utilidad práctica para desarrolladores que necesitan **poblar Firestore con datos JSON** sin escribir manualmente cada documento.

---

## 🚀 ¿Qué hace?

✔ Lee un archivo JSON local  
✔ Conecta con tu proyecto de **Cloud Firestore (Firebase)**  
✔ Sube los datos como documentos/colecciones de forma automática  

Ideal para:
* Migrar datos de prueba a Firestore  
* Inicializar bases de datos de desarrollo  
* Automatizar importaciones desde JSON

---

## 🛠 Tecnologías usadas

* **Node.js** – Plataforma de ejecución
* **Firebase Admin SDK** – API para interactuar con Firestore
* **JavaScript** – Lógica de la herramienta

---

## 🗂 Estructura del proyecto

```text
json-to-firestore/
├─ node_modules/        ← Dependencias
├─ data.json            ← Datos de ejemplo a subir
├─ upload.js            ← Script principal de carga
├─ package.json         ← Configuración del proyecto
└─ package-lock.json    ← Lock de dependencias
