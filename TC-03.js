describe('CHECK CORRECTLYPASSWORD PROTECTED IN THE PARTIAL CONTENT', () => {
    it('test', () => {
      cy.visit('http://text.local/wp-login.php?redirect_to=http%3A%2F%2Ftext.local%2Fwp-admin%2Fedit.php%3Fpost_type%3Dpage&reauth=1')

      cy.get('#user_login').type(' text')
      cy.get('#user_pass').type(' text')
      cy.get('#wp-submit').click()
      cy.get('#post-56 > td.title.column-title.has-row-actions.column-primary.page-title > div.row-actions > span.view > a').should('be.visible').click({force: true})
      cy.get('#passster_password').type('1234')
      cy.get('.passster-submit').click()
    })
  })