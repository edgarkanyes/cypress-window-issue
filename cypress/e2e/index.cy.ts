describe("Main page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show the hello cypress text", () => {
    cy.get('[data-qa="hello"]').should("be.visible");
  });

  it("should contain Hello Cypress text", () => {
    cy.get('[data-qa="hello"]').should("have.text", "Hello Cypress");
  });

  // This should fail if there is still a problem
  it("should have the appReady variable set on the window", () => {
    cy.window().then((cypressWindow) => {
      expect(cypressWindow.appReady).to.be.true;
    });
  });
});
