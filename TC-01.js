// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('CHECK CORRECTLY PASSWORD PROTECTED TO THE WHOLE PAGE', () => {
    it('test', () => {
      cy.visit('http://text.local/wp-login.php?redirect_to=http%3A%2F%2Ftext.local%2Fwp-admin%2Fedit.php%3Fpost_type%3Dpage&reauth=1')

      cy.get('#user_login').type(' text')
      cy.get('#user_pass').type(' text')
      cy.get('#wp-submit').click()
      cy.get('#post-22 > td.title.column-title.has-row-actions.column-primary.page-title > div.row-actions > span.view > a').should('be.visible').click({force: true})
      cy.get('#pwbox-22').type('1234')
      cy.get('#wp--skip-link--target > div.wp-container-7.entry-content.wp-block-post-content > form > p:nth-child(2) > input[type=submit]').click()
    })
  })