# 🚀 Clase #13 - Construcción de una API desde Cero

Este repositorio contiene el código desarrollado durante la práctica de la **Clase #13**, cuyo objetivo principal fue la construcción de una API RESTful funcional desde cero. La práctica incluyó el uso de contenedores para la gestión del entorno y la implementación de endpoints para interactuar con una base de datos.

## 🌟 Características

* **API RESTful:** Implementación de rutas y lógica de negocio (endpoints) para la gestión de usuarios.
* **Contenerización con Docker:** Uso de Docker para asegurar un entorno de ejecución consistente y facilitar el despliegue.
    * Se abordan conceptos clave como **Imagen**, **Contenedor** y **Dockerfile**.
* **Persistencia de Datos:** Conexión y uso de un modelo de datos (similar a MongoDB/NoSQL) para registrar y consultar información.
* **Manejo Asíncrono:** Implementación de funciones asíncronas para la interacción con la base de datos, vital para garantizar la correcta persistencia de la información.

## 🛠️ Tecnologías Utilizadas

* **Node.js / JavaScript:** Entorno de ejecución principal.
* **Docker:** Para la contenerización del proyecto.
* **Express (o similar):** Framework para la creación de la API.
* **Base de Datos NoSQL (ej. MongoDB/Mongoose):** Utilizada para la persistencia de los datos del usuario (se mencionó el uso de esquemas y la generación automática del `_id`).
* **Postman (o similar):** Herramienta utilizada para la prueba de los endpoints.

## ⚙️ Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener instalado:

* **Git**
* **Node.js** y **npm** (o **yarn**)
* **Docker** y **Docker Compose** (recomendado para entornos de desarrollo)

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd [NOMBRE_DEL_REPOSITORIO]
    ```

2.  Instala las dependencias del proyecto:
    ```bash
    npm install
    # o yarn install
    ```

### Ejecución con Docker

Para iniciar el proyecto y la base de datos usando Docker:

```bash
docker-compose up --build
