describe("Main page", () => {
  it("should show the hello cypress text", () => {
    cy.get('[data-qa="hello"]').should("be.visible");
  });
});
