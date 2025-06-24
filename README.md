# NexusAlpri - Plataforma E-learning Corporativa

Esta es una aplicación de Next.js que sirve como una plataforma de e-learning corporativa, construida con Firebase Studio.

## Primeros Pasos

Para poner en marcha el proyecto en tu entorno local, sigue estos pasos.

### 1. Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn

### 2. Instalación

Primero, instala todas las dependencias del proyecto. Abre una terminal en la raíz del repositorio clonado y ejecuta:

```bash
npm install
```

### 3. Configuración del Entorno

Este proyecto utiliza Clerk para la autenticación de usuarios. Necesitarás configurar tus claves de API en un archivo de entorno.

1.  Crea una cuenta gratuita en [Clerk.com](https://clerk.com).
2.  Desde tu dashboard de Clerk, crea una nueva aplicación.
3.  Navega a la sección de "API Keys" de tu aplicación en Clerk.
4.  Abre el archivo `.env` en la raíz de este proyecto.
5.  Pega tus claves `Publishable key` y `Secret key` en las variables correspondientes. El archivo se verá así:

    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
    CLERK_SECRET_KEY="sk_test_..."

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    ```

### 4. Ejecutar el Servidor de Desarrollo

Una vez que hayas instalado las dependencias y configurado tus variables de entorno, puedes iniciar la aplicación:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:9002`. ¡Ya puedes abrirlo en tu navegador y empezar a explorar la aplicación!

## Roles de Usuario

La aplicación tiene un sistema de roles predefinido: `admin`, `instructor` y `student`. Puedes gestionar los roles de los usuarios desde el dashboard de Clerk en la sección de "Users".
