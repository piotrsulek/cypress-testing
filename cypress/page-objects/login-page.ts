/// <reference types="cypress" />
export class LoginPage {
  emailInput() {
    return cy.get('input[id="user_email"]');
  }
  passwordInput() {
    return cy.get('input[id="user_password"]');
  }
  loginBtn() {
    return cy.get('input[id="log_in"]')
  }

  emailError() {
    return cy.get('span[id="email-error"]')
  }

  passwordError() {
    return cy.get('span[id="password-error"]')
  }

}