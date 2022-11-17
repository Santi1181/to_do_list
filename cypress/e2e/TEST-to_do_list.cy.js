require('cypress-plugin-tab')


describe('TEST to do list', () => {
  it('Ingresar a la pagina principal', () => {
    cy.visit('/')

  })

  it('Generar una nueva tarea', () => {
    cy.get('#nav-tareas').click()
    cy.get('#tarea')
      .type('Mi tarea cargada por Cypress en TEST').should('have.value', 'Mi tarea cargada por Cypress en TEST')
    cy.get('#enviar').click()
  })
  
  it('Validar tarea cargada en TEST', () => {
    cy.contains('Mi tarea cargada por Cypress en TEST')
  })
  
  it('Cargar una segunda tarea', () => {
    cy.get('#nav-tareas').click()
    cy.get('#tarea')
      .type('Mi 2da tarea cargada por Cypress en TEST').should('have.value', 'Mi 2da tarea cargada por Cypress en TEST')
    cy.get('#enviar').click()
  })

  it('Validar 2da tarea cargada en TEST', () => {
    cy.contains('Mi 2da tarea cargada por Cypress en TEST')
  })
   
  it('Validar minimo de caracteres para cargar una tarea', () => {
    cy.get('#nav-tareas').click()
    cy.get('#tarea')
      .type('Tarea').should('have.value', 'Tarea')
    cy.get('#enviar').click()
    cy.contains('10 caracteres')
  })

  it('Validar ingresar un texto para cargar una tarea', () => {
    cy.get('#nav-tareas').click()
    cy.get('#tarea')
    cy.get('#enviar').click()
    cy.contains('Debe ingresar')
  })
  
  it('Modifico tarea existente - 2da tarea cargada', () => {
    cy.contains('Lista de Tareas').click()
    cy.contains('Mi 2da tarea cargada por Cypress en TEST').children().find('#modificar').click()
    cy.get('#tarea')
      .type('{selectall}{backspace}').should('have.value', '')  
      .type('Mi 2da tarea por Cypress MODIFICADA').should('have.value', 'Mi 2da tarea por Cypress MODIFICADA')
    cy.get('#enviar').click()

  })

  it('Elimino la primer tarea cargada', () => {
    cy.contains('Mi tarea cargada por Cypress en TEST').children().find('#eliminar').click()
  })
  
})

