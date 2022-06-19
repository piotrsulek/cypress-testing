
import { LoginPage } from '../page-objects/login-page';
const loginPage = new LoginPage();


describe('LF Login form', () => {

  beforeEach(() => {
    cy.visit('https://staging.paymi.com/users/sign_in')
  })

  it('1. No data provided, check validation', function () {

    loginPage.loginBtn().click()

    loginPage.emailError().should('be.visible')
    loginPage.passwordError().should('be.visible')

    loginPage.emailInput().parent().should('have.class', 'has-error')
    loginPage.passwordInput().parentsUntil('div.has-error')
  })

  it('2. wrong values in Login form, check validation', function () {

    loginPage.emailInput().type('test@test.pl')
    loginPage.passwordInput().type('12345678')
    loginPage.loginBtn().click()

    cy.get('ul[class="error-box__errors"] li').contains('Invalid email address or password.')

  })

  it('3. Correct values in login form', function () {

    //in case email and passwords are correct
    loginPage.emailInput().type('correct@test.pl')
    loginPage.passwordInput().type('12345678')
    loginPage.loginBtn().click()

    cy.url().should('eq', 'https://www.paymi.com/')

  })
})