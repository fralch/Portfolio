 // Datos detallados de los proyectos
 const projectDetails = {
    'CrediApp': {
        title: 'CrediApp - Sistema Integral de Gestión',
        description: 'Aplicación web completa para la gestión integral de créditos y préstamos, incluyendo módulos especializados para logística, recursos humanos, facturación y sistema de pagos. Desarrollada con arquitectura escalable y diseño responsivo.',
        features: [
            'Sistema de autenticación multinivel con roles personalizados',
            'Módulo de gestión de créditos con flujos automatizados',
            'Dashboard analítico con métricas en tiempo real',
            'Sistema de facturación electrónica integrado',
            'Gestión de recursos humanos con control de asistencia',
            'Módulo logístico para seguimiento de operaciones',
            'API REST para integración con servicios externos',
            'Notificaciones push y por email automatizadas'
        ],
        techStack: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'JWT', 'Bootstrap', 'Chart.js', 'WebSockets'],
        stats: ['Vue + Laravel', 'Authentication', 'MySQL + Redis'],
        links: {
            demo: 'https://crediapp.credipyme.com.pe/',
            github: null
        }
    },
    'MegaEquipamiento eCommerce': {
        title: 'MegaEquipamiento - Plataforma eCommerce',
        description: 'Plataforma completa de comercio electrónico especializada en equipos de laboratorio e industriales. Incluye sistema avanzado de comparación de productos, reviews de usuarios, carrito persistente y múltiples pasarelas de pago integradas.',
        features: [
            'Catálogo filtrable con búsqueda avanzada por especificaciones',
            'Sistema de comparación de productos lado a lado',
            'Reviews y calificaciones de usuarios verificados',
            'Carrito de compras persistente con sincronización',
            'Integración con múltiples pasarelas de pago',
            'Panel administrativo para gestión de inventario',
            'Sistema de cupones y descuentos programables',
            'Notificaciones de stock y ofertas especiales'
        ],
        techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'PayPal', 'Tailwind CSS', 'Redux'],
        stats: ['React + TypeScript', 'Sistema de pagos integrado', 'Catálogo filtrable avanzado'],
        links: {
            demo: 'https://equipamientoindustriales.hpservidor.com/',
            github: 'https://github.com/fralch/megaEquipamiento'
        }
    },
    'Villding Multi-Platform': {
        title: 'Villding - App Multiplataforma',
        description: 'Aplicación híbrida desarrollada con React Native que funciona tanto online como offline. Incluye manejo avanzado de archivos multimedia, notificaciones push en tiempo real y sincronización automática de datos.',
        features: [
            'Funcionalidad completa en modo offline con SQLite',
            'Sincronización automática al recuperar conexión',
            'Carga y gestión de imágenes desde galería y cámara',
            'Notificaciones push personalizadas en tiempo real',
            'Sistema de autenticación con biometría',
            'Interfaz adaptativa para iOS y Android',
            'Almacenamiento local seguro con encriptación',
            'Geolocalización y mapas interactivos'
        ],
        techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'AsyncStorage', 'Laravel', 'Firebase', 'JWT'],
        stats: ['React Native + Expo', 'AsyncStorage + SQLite', 'Laravel Backend'],
        links: {
            demo: 'https://expo.dev/artifacts/eas/cQo6xn58rXNU7ygnQtnaeh.apk',
            github: 'https://github.com/fralch/Villding'
        }
    },
    'Legal DocManager': {
        title: 'Legal DocManager - Gestión Documentaria',
        description: 'Sistema integral de gestión documentaria diseñado específicamente para despachos legales. Incluye control de acceso basado en roles, encriptación end-to-end y flujos de trabajo automatizados para procesos legales.',
        features: [
            'Control de acceso basado en roles (RBAC) granular',
            'Encriptación end-to-end de documentos confidenciales',
            'Flujos de trabajo automatizados para procesos legales',
            'Versionado automático de documentos con historial',
            'Búsqueda inteligente con indexación de contenido',
            'Recordatorios automáticos de plazos legales',
            'Firma digital integrada con validación legal',
            'Auditoría completa de accesos y modificaciones'
        ],
        techStack: ['Astro.js', 'React', 'NestJS', 'PostgreSQL', 'Redis', 'JWT', 'bcrypt', 'Winston'],
        stats: ['Astro.js + React', 'NestJS + PostgreSQL', 'RBAC Security'],
        links: {
            demo: 'https://docmanager.frankcairampoma.dev',
            github: 'https://github.com/fralch'
        }
    },
    'ContainerTracker GPS': {
        title: 'ContainerTracker - Seguimiento GPS',
        description: 'Sistema avanzado de geolocalización en tiempo real para contenedores refrigerados. Incluye alertas inteligentes, monitoreo 24/7 de temperatura y ubicación, con dashboard analítico para optimización de rutas.',
        features: [
            'Seguimiento GPS en tiempo real con precisión submétrica',
            'Monitoreo continuo de temperatura y humedad',
            'Alertas automáticas por desviaciones de ruta o temperatura',
            'Dashboard analítico con métricas de rendimiento',
            'Optimización de rutas con algoritmos de ML',
            'Geofencing con notificaciones personalizadas',
            'Reportes automáticos y exportación de datos',
            'API para integración con sistemas ERP'
        ],
        techStack: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'WebSockets', 'Google Maps API', 'Chart.js', 'Pusher'],
        stats: ['Laravel + Vue.js', 'MySQL + Redis Cache', 'Real-time GPS tracking'],
        links: {
            demo: 'https://containertracker.frankcairampoma.dev',
            github: 'https://github.com/fralch'
        }
    },
    'IoT Rural Solutions': {
        title: 'IoT Rural Solutions - Soluciones Agrícolas',
        description: 'Conjunto de soluciones IoT basadas en Arduino para monitoreo agrícola y medición ambiental en zonas rurales. Incluye sensores especializados y conectividad de largo alcance para áreas remotas.',
        features: [
            'Monitoreo de humedad de suelo en tiempo real',
            'Sensores de temperatura y humedad ambiental',
            'Medición de pH del suelo automatizada',
            'Conectividad LoRaWAN para largas distancias',
            'Paneles solares para alimentación autónoma',
            'Dashboard web para visualización de datos',
            'Alertas por WhatsApp y SMS',
            'Predicción de riego con machine learning'
        ],
        techStack: ['Arduino', 'C++', 'LoRaWAN', 'Python', 'Flask', 'SQLite', 'MQTT', 'Grafana'],
        stats: ['Arduino + C++', 'Sensores ambientales', 'Conectividad LoRaWAN'],
        links: {
            demo: 'https://iot.frankcairampoma.dev',
            github: 'https://github.com/fralch'
        }
    }
};

// Función para abrir el modal
function openProjectModal(projectName) {
    const modal = document.getElementById('projectModal');
    const project = projectDetails[projectName];
    
    if (!project) return;
    
    // Actualizar contenido del modal
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectTitle').href = project.links.demo || '#';
    document.getElementById('modalProjectDescription').textContent = project.description;
    
    // Características
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Stack tecnológico
    const techContainer = document.getElementById('modalTechTags');
    techContainer.innerHTML = '';
    project.techStack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'modal-tech-tag';
        span.textContent = tech;
        techContainer.appendChild(span);
    });
    
    // Stats
    const statsContainer = document.getElementById('modalProjectStats');
    statsContainer.innerHTML = '';
    project.stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'modal-project-stat';
        div.textContent = stat;
        statsContainer.appendChild(div);
    });
    
    // Enlaces
    const linksContainer = document.getElementById('modalProjectLinks');
    linksContainer.innerHTML = '';
    
    if (project.links.demo) {
        const demoLink = document.createElement('a');
        demoLink.href = project.links.demo;
        demoLink.target = '_blank';
        demoLink.className = 'modal-project-link';
        demoLink.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15,3 21,3 21,9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Ver 
        `;
        linksContainer.appendChild(demoLink);
    }
    
    if (project.links.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.links.github;
        githubLink.target = '_blank';
        githubLink.className = 'modal-project-link';
        githubLink.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Ver Código
        `;
        linksContainer.appendChild(githubLink);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevenir que se active si se hace click en un enlace
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            const projectTitle = card.querySelector('.project-title').textContent.trim();
            openProjectModal(projectTitle);
        });
        
        // Hacer las tarjetas más interactivas
        card.style.cursor = 'pointer';
    });
    
    // Event listener para cerrar el modal
    document.getElementById('modalClose').addEventListener('click', closeProjectModal);
    
    // Cerrar modal al hacer click fuera de él
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
});