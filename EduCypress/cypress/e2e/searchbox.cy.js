describe("Searchbox Test", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/");
  });
  it("Should type into searchbox and submit", () => {
    cy.get("#searchTerm").type("online {enter}");
    cy.get("h2").contains("Search Results:");
    cy.get("a").contains("Zero - Free Access to Online Banking");
    cy.get("a").contains("Zero - Online Statements");
  });
});
