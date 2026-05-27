const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `Hello Pratiksha,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Message: ${message}`;

    const whatsappURL =
        `https://wa.me/918197351525?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});