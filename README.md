<div align="center">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<h1 align="center">🎓 EgreMatch</h1>
<p align="center"><strong>Conectando graduados al éxito - Equipo KaliNexus</strong></p>

---

## 📖 Descripción del Proyecto

**EgreMatch** es una innovadora plataforma desarrollada para establecer un puente directo y efectivo entre jóvenes egresados de la Universidad Nacional de San Agustín y el mundo laboral corporativo. Utilizando un sistema intuitivo de "match" interactivo enfocado 100% en lo profesional, EgreMatch permite a las empresas descubrir talento emergente y a los graduados encontrar su primera gran oportunidad.

## ✨ Características Principales

### Para Egresados 👨‍🎓
*   **Perfiles Completos:** Creación de perfiles ricos en datos con información académica, experiencia laboral, proyectos de portafolio y certificaciones técnicas.
*   **Exploración de Vacantes Dinámica:** Interfaz de evaluación de oportunidades laborales con indicadores de afinidad ("Match") representados en porcentajes claros y etiquetas visuales.
*   **Seguimiento Personal:** Dashboards dedicados al historial de postulaciones, aprobaciones (Likes), rechazos y gestión de empresas favoritas.

### Para Empresas 🏢
*   **Perfiles Corporativos Verificados:** Registro seguro con validación de identidad empresarial.
*   **Filtro Inteligente de Candidatos:** Capacidad de visualizar a los egresados cuyo perfil mejor se adapta (Highest Match) a los requisitos técnicos de las convocatorias activas.

## 🛠️ Stack Tecnológico

La arquitectura frontend del proyecto se basa en el siguiente ecosistema:

*   **Librería Principal:** React 19
*   **Herramienta de Construcción (Bundler):** Vite (seleccionado por su extremada rapidez en HMR y optimización de assets).
*   **Motor de Estilos:** Tailwind CSS v4 (implementando utilidades personalizadas, animaciones `.animate-fade-in` y diseño modular).
*   **Lenguaje:** TypeScript (TSX)
*   **Iconografía:** SVG nativos e integraciones directas.
*   **Automatización de Despliegue:** GitHub Actions y GitHub Pages.

## 🚀 Guía de Instalación Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Lizardo-Castillo/EgreMatch_KaliNexus.git
   ```
2. **Entrar al directorio del proyecto:**
   ```bash
   cd EgreMatch_KaliNexus
   ```
3. **Instalar todas las dependencias requeridas:**
   ```bash
   npm install
   ```
4. **Iniciar el entorno local de desarrollo:**
   ```bash
   npm run dev
   ```
   *La aplicación estará accesible en tu navegador abriendo el enlace proporcionado por Vite (usualmente `http://localhost:5173/`).*

## 🌐 Despliegue en Vivo

El sistema cuenta con un pipeline de CI/CD automatizado vía `.github/workflows/deploy.yml`. 

Cada *commit* empujado a la rama `main` acciona de manera automática la compilación (`npm run build`) y el posterior despliegue del empaquetado estático hacia **GitHub Pages**. Esto garantiza un entorno de producción que refleja siempre la iteración más reciente del código base de manera inmediata.
