document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contact-button');

    contactButton.addEventListener('click', () => {
        window.location.href = 'mailto:email@example.com?subject=Запрос%20на%20массаж&body=Здравствуйте,%20я%20хотел(а)%20бы%20узнать%20подробнее%20о%20ваших%20услугах.';
    });
});
