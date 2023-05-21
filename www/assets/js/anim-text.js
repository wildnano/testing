const textAnim = document.querySelector(".share");
new Typewriter(textAnim, {
    deleteSpeed: 20,
    loop: true
})
    .changeDelay(20)
    .typeString("Partagez")
    .pauseFor(1500)
    .deleteChars(8)
    .typeString("Osez")
    .pauseFor(1500)
    .deleteChars(5)
    .typeString('<i style="font-size:30px">Démarquez-vous</i>')
    .pauseFor(7000)
    .start();
