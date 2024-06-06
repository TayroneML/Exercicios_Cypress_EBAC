/// <reference types="cypress" />
const perfil = require("../../fixtures/perfil.json")

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
    })

    // afterEach(() => {
    //   cy.screenshot()  
    // })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('tay_teste@teste.com.br')
        cy.get('#password').type('abc123')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('#main > div > div > p:nth-child(2)').should('contain', 'Olá, tayQa (não é tayQa? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('tay@testes.com.br')
        cy.get('#password').type('abc123')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()
        cy.get('#main > div > div.woocommerce-notices-wrapper > ul > li').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('tay_teste@teste.com.br')
        cy.get('#password').type('tes123')
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()
        cy.get('#main > div > div.woocommerce-notices-wrapper > ul > li').should('contain', 'Erro: A senha fornecida para o e-mail tay_teste@teste.com.br está incorreta.')
        cy.get('#main > div > div.woocommerce-notices-wrapper > ul > li').should('exist')
    })


    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()

        cy.get('#main > div > div > p:nth-child(2)').should('contain', 'Olá, tayQa (não é tayQa? Sair)')
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
        })
        cy.get('#customer_login > div:nth-child(1) > form > input.button').click()
        cy.get('#main > div > div > p:nth-child(2)').should('contain', 'Olá, tayQa (não é tayQa? Sair)')
    })

    it('Deve fazer login com sucesso - Usando Comandos customizados', () => {
        cy.login('tay_teste@teste.com.br', 'abc123')
        cy.get('#main > div > div > p:nth-child(2)').should('contain', 'Olá, tayQa (não é tayQa? Sair)')
    })
})