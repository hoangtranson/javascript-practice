context('Test Calculator Machine', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8887/')
    })

    it(' 7 + 4 = 11 ?', () => {
        cy.get('#seven').click()
        cy.get('#add').click()
        cy.get('#four').click()
        cy.get('#equals').click()
        cy.get('#display').should('have.value', '11')
    })

    it(' 7 - 4 = 3 ?', () => {
        cy.get('#seven').click()
        cy.get('#subtract').click()
        cy.get('#four').click()
        cy.get('#equals').click()
        cy.get('#display').should('have.value', '3')
    })

    it(' 7/4 = 1.75 ?', () => {
        cy.get('#seven').click()
        cy.get('#divide').click()
        cy.get('#four').click()
        cy.get('#equals').click()
        cy.get('#display').should('have.value', '1.75')
    })


    it(' 7*4 = 28 ?', () => {
        cy.get('#seven').click()
        cy.get('#multiply').click()
        cy.get('#four').click()
        cy.get('#equals').click()
        cy.get('#display').should('have.value', '28')
    })

    it('Clear screen when click C button', () => {
        cy.get('#clear').click()
        cy.get('#display').should('have.value', '')
    })

    it('Should reset number 5 after finish calculating', () => {
        cy.get('#seven').click()
        cy.get('#multiply').click()
        cy.get('#four').click()
        cy.get('#equals').click()
        cy.get('#five').click()
        cy.get('#display').should('have.value', '5')
    })
})
