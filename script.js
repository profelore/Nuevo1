document.addEventListener('DOMContentLoaded', () => {
    // referencias a los elementos del HTML
    const form = document.getElementById('personal-form');
    const normalStyleBtn = document.getElementById('normal-style-btn');
    const contrastStyleBtn = document.getElementById('contrast-style-btn');
    const body = document.body;

    // botón de estilo normal
    normalStyleBtn.addEventListener('click', () => {
        body.classList.remove('high-contrast');
    });

    // botón de alto contraste
    contrastStyleBtn.addEventListener('click', () => {
        body.classList.add('high-contrast');
    });

    // botón de "Enviar"
    form.addEventListener('submit', (e) => {
        
        if (form.checkValidity()) {
            alert('¡Formulario enviado con éxito!');
        } else {
        }
    });
});