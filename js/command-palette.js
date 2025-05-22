document.addEventListener('DOMContentLoaded', () => {
    const commandPalette = document.getElementById('command-palette');
    const commandSearch = document.getElementById('command-search');
    const cmdKLink = document.querySelector('.footer-note a');

    // Función para abrir la paleta de comandos
    function openCommandPalette() {
        commandPalette.showModal();
        commandSearch.focus();
    }

    // Función para cerrar la paleta de comandos
    function closeCommandPalette() {
        commandPalette.close();
    }

    // Manejador de clic en el enlace Cmd + K
    cmdKLink.addEventListener('click', (e) => {
        e.preventDefault();
        openCommandPalette();
    });

    // Manejador de teclas para atajos
    document.addEventListener('keydown', (e) => {
        // Abrir con Cmd/Ctrl + K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openCommandPalette();
        }

        // Cerrar con Escape
        if (e.key === 'Escape' && commandPalette.open) {
            closeCommandPalette();
        }

        // Atajos de comandos cuando la paleta está abierta
        if (commandPalette.open) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                e.preventDefault();
                window.print();
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                window.location.href = 'https://linkedin.com/in/frank-cairampoma-dev';
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
                e.preventDefault();
                window.location.href = 'https://github.com/frankcairampoma';
            } else if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
                e.preventDefault();
                // Aquí iría la URL de X (Twitter) cuando esté disponible
            }
        }
    });

    // Filtrar comandos al escribir en la búsqueda
    commandSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const commandItems = document.querySelectorAll('.command-item');

        commandItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });

    // Manejar clics en los comandos
    document.querySelectorAll('.command-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.action;
            switch(action) {
                case 'print':
                    window.print();
                    break;
                case 'linkedin':
                    window.location.href = 'https://linkedin.com/in/frank-cairampoma-dev';
                    break;
                case 'github':
                    window.location.href = 'https://github.com/frankcairampoma';
                    break;
                case 'x':
                    // Aquí iría la URL de X (Twitter) cuando esté disponible
                    break;
            }
            closeCommandPalette();
        });
    });

    // Cerrar al hacer clic fuera del diálogo
    commandPalette.addEventListener('click', (e) => {
        if (e.target === commandPalette) {
            closeCommandPalette();
        }
    });
});
