/// <reference types="cypress" />
const perfil = require ("../../fixtures/perfil.json")

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        // .first()
        // .last()
        // .eq(2)
        .contains('Abominable Hoodie')
        .click()  

        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    })
    
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        
    });
})