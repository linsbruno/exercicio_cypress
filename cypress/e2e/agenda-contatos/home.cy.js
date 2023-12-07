/// <reference types="cypress"/>

describe('deve renderizar a home', () => {

    beforeEach(()=>{
        cy.visit('agenda-contatos-react.vercel.app/')
    })

    it ('Testes para a home',()=>{
        cy.get('input').should('have.length', 3)
        cy.get('input[type="text"]').type('BrunoLins')
        cy.get('input[type="email"]').type('BrunoLins@teste.com')
        cy.get('input[type="tel"]').type('21 12345678')
        cy.get('.adicionar').click()
        cy.wait(500)
    })

    it('teste para editar um contato', () => {
        cy.get('.edit').eq(0).click()
        cy.wait(500)
        cy.get('input[type="text"]').clear().type('Gabrel')
        cy.get('input[type="email"]').clear().type('gabrel@teste.com')
        cy.get('input[type="tel"]').clear().type('21 87654321')
        cy.get('.alterar').click()
        cy.wait(500)
        
    })
    it('teste para excluir contato', () => {
        cy.get('.delete').eq(0).click()
        cy.wait(500)
        
    })
        
})