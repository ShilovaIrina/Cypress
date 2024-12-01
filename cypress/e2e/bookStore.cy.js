describe('the book store 2e2 test', () => {
  it.skip('Should open the main page', () => {
    cy.visit("/"),
    cy.get(".text-light>.ml-2");
  });

  it.skip('Should valid authentication', () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it.skip('Should not login with empty login', () => {
    cy.visit("/");
    cy.contains('Log in').click();
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.get("#mail").then(($el) => $el[0].checkValidity()).should("be.false");
  });
  
  it.skip('Should not login with empty password', () => {
    cy.visit("/");
    cy.contains('Log in').click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass").then(($el) => $el[0].checkValidity()).should("be.false");
  });

  it.skip('Should add books', () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.createBook(
      "Маленький Принц",
      "Невероятное приключение мальчика по планетам",
      "Антуан де Сент-Экзюпери");
    cy.get("[href='book/cdceb1e9-1766-40d5-ba64-41f1cff01845'] > .h-100 > .card-body").should("be.visible");
  });

  it('Should add book in favorites the main page', () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.get(
      "[href='book/cdceb1e9-1766-40d5-ba64-41f1cff01845'] > .h-100 > .card-footer > .btn").click();
    cy.contains("Delete from favorite").should("be.visible");
  });

  it('Should delete book in favorites', () => {
    Cypress.env("view-port mobile"); 
    Cypress.env("viewportWidth1");
    Cypress.env("viewportHeight1");
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Delete from favorite").click();
    cy.contains("Favorites").click();
    cy.contains("Please add some book to favorit on home page!").should("be.visible");
  });
});