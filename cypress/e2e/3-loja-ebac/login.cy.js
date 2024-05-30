/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type('tay_teste@teste.com.br')
        cy.get('#password').type('abc123')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('#main > div > div > p:nth-child(2)').should('contain', 'Olá, tay_teste (não é tay_teste? Sair)')
    })

})