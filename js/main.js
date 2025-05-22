// Variables para el modal de comandos
document.addEventListener('DOMContentLoaded', function() {
    const commandPalette = document.getElementById('command-palette');
    const commandSearch = document.getElementById('command-search');
    const commandItems = document.querySelectorAll('.command-item');
    let selectedIndex = 0;

    // Función para abrir el modal de comandos
    function openCommandPalette() {
        commandPalette.showModal();
        commandSearch.value = '';
        commandSearch.focus();
        updateSelection();
    }

    // Función para cerrar el modal de comandos
    function closeCommandPalette() {
        commandPalette.close();
    }

    // Manejador de eventos para los atajos de teclado
    document.addEventListener('keydown', function(e) {
        // Abrir el modal con Cmd/Ctrl + K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openCommandPalette();
        }

        // Cerrar con Escape
        if (e.key === 'Escape' && commandPalette.open) {
            closeCommandPalette();
        }

        // Navegación con flechas cuando el modal está abierto
        if (commandPalette.open) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % commandItems.length;
                updateSelection();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = selectedIndex === 0 ? commandItems.length - 1 : selectedIndex - 1;
                updateSelection();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const visibleItems = Array.from(commandItems).filter(item => item.style.display !== 'none');
                if (visibleItems.length > 0) {
                    executeCommand(visibleItems[selectedIndex]);
                }
            }
        }
    });

    // Cerrar al hacer click fuera
    commandPalette.addEventListener('click', function(e) {
        if (e.target === commandPalette) {
            closeCommandPalette();
        }
    });

    // Ejecutar comando al hacer click y manejar hover
    commandItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            executeCommand(item);
        });

        item.addEventListener('mouseenter', function() {
            selectedIndex = index;
            updateSelection();
        });
    });

    // Filtrar comandos
    commandSearch.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        let hasVisibleItems = false;

        commandItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'flex';
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });

        if (hasVisibleItems) {
            selectedIndex = 0;
            updateSelection();
        }
    });

    // Limpiar búsqueda al cerrar
    commandPalette.addEventListener('close', function() {
        commandSearch.value = '';
        commandItems.forEach(item => {
            item.style.display = 'flex';
        });
        selectedIndex = 0;
    });

    // Actualizar selección visual
    function updateSelection() {
        commandItems.forEach((item, index) => {
            if (item.style.display !== 'none') {
                item.classList.toggle('selected', index === selectedIndex);
            }
        });
    }

    // Ejecutar comandos
    function executeCommand(item) {
        const action = item.getAttribute('data-action');
        switch (action) {
            case 'print':
                window.print();
                break;
            case 'linkedin':
                window.open('https://linkedin.com/in/frank-cairampoma-dev', '_blank');
                break;
            case 'github':
                window.open('https://github.com/fralch', '_blank');
                break;
            case 'x':
                window.open('https://twitter.com/frankcairampoma', '_blank');
                break;
        }
        closeCommandPalette();
    }

    // Atajos de teclado globales
    document.addEventListener('keydown', function(e) {
        if (!commandPalette.open && (e.ctrlKey || e.metaKey)) {
            switch (e.key.toLowerCase()) {
                case 'p':
                    e.preventDefault();
                    window.print();
                    break;
                case 'l':
                    e.preventDefault();
                    window.open('https://linkedin.com/in/frank-cairampoma-dev', '_blank');
                    break;
                case 'g':
                    e.preventDefault();
                    window.open('https://github.com/fralch', '_blank');
                    break;
            }
        }
    });
});

// Tema oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const sunIconRays = document.querySelectorAll('[id^="sun-icon-ray"]');
const htmlElement = document.documentElement;

// Función para cambiar el tema
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        sunIconRays.forEach(ray => {
            if (ray) ray.style.display = 'none';
        });
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        sunIconRays.forEach(ray => {
            if (ray) ray.style.display = 'block';
        });
    }
}

// Evento para el botón de cambio de tema
themeToggle.addEventListener('click', toggleTheme);

// Cargar el tema guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    if (savedTheme === 'dark') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        sunIconRays.forEach(ray => {
            if (ray) ray.style.display = 'none';
        });
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        sunIconRays.forEach(ray => {
            if (ray) ray.style.display = 'block';
        });
    }
});
