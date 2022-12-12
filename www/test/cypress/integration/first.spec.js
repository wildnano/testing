it("test long press", () => {
    cy.visit("http://127.0.0.1:5500/www/index.html");
    cy.get(".go-to-menu a").trigger("mousedown", {force: true});
    cy.wait(5000);
    cy.get(".go-to-menu a").trigger("mouseup", {force: true});
    var $app;
    // console.log("test ", cy.get(".seo").invoke("attr", "app"));
    cy.get(".seo")
        .invoke("attr", "app")
        .then((app) => {
            return $app;
        });
});
