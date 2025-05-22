 // Función para cambiar el tema
 function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const moonIcon = document.getElementById('moon-icon');
    const sunIconElements = [
        document.getElementById('sun-icon'),
        document.getElementById('sun-icon-ray1'),
        document.getElementById('sun-icon-ray2'),
        document.getElementById('sun-icon-ray3'),
        document.getElementById('sun-icon-ray4'),
        document.getElementById('sun-icon-ray5'),
        document.getElementById('sun-icon-ray6'),
        document.getElementById('sun-icon-ray7'),
        document.getElementById('sun-icon-ray8')
    ];
    
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        moonIcon.style.display = 'block';
        sunIconElements.forEach(el => {
            if (el) el.style.display = 'none';
        });
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        moonIcon.style.display = 'none';
        sunIconElements.forEach(el => {
            if (el) el.style.display = 'block';
        });
    }
}

// Evento para el botón de cambio de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Cargar el tema guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Usar 'dark' como valor predeterminado
    const html = document.documentElement;
    const moonIcon = document.getElementById('moon-icon');
    const sunIconElements = [
        document.getElementById('sun-icon'),
        document.getElementById('sun-icon-ray1'),
        document.getElementById('sun-icon-ray2'),
        document.getElementById('sun-icon-ray3'),
        document.getElementById('sun-icon-ray4'),
        document.getElementById('sun-icon-ray5'),
        document.getElementById('sun-icon-ray6'),
        document.getElementById('sun-icon-ray7'),
        document.getElementById('sun-icon-ray8')
    ];
    
    // Establecer el tema (siempre actualizar los atributos y estilos)
    html.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        moonIcon.style.display = 'block';
        sunIconElements.forEach(el => {
            if (el) el.style.display = 'none';
        });
    } else {
        moonIcon.style.display = 'none';
        sunIconElements.forEach(el => {
            if (el) el.style.display = 'block';
        });
    }
});