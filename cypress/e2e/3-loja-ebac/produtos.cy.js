/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page"


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    it('Deve selecionar um produto na lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

    it('Deve busscar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a página do produto', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        let cor = 'Red', tamanho = 'M', quantidade = '1'

        produtosPage.buscarProduto(produto)
        produtosPage.addProdutoCarrinho(tamanho, cor, quantidade)
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
    })

    it('Deve adicionar produto sem estoque ao carrinho', () => {
        let produto = 'Aero Daily Fitness Tee'
        let cor = 'Black', tamanho = 'M', quantidade = '1'

        produtosPage.buscarProduto(produto)
        produtosPage.addProdutoCarrinho(tamanho, cor, quantidade)
        cy.get('.stock').should('contain', 'Fora de estoque')
    })

    it.only('Deve adicionar produto ao carrinho', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)

            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })

    })
})