emailjs.init({
    publicKey: "VP_hTIoSO98e2ekkH",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_2mpck1f",
        "template_mzxff4m",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send message!");
    });
});