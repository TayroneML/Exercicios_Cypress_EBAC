
Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()
})

Cypress.Commands.add('preCadastro', (email, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('teste@123')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').clear()
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()
})
