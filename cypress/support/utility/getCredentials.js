/**
 * Retrieves user credentials from environment variables.
 * @returns {object} An object containing username and password.
 */
function getCredentials() {
    const users = Cypress.env('users');
    const { username } = users.baseUser;
    const password = Cypress.env('password');
    return { username, password };
}
function getBaseUrl(){
    return Cypress.config('baseUrl');
}
/**
 * Retrieves a specific environment variable value.
 * @param {string} key The key corresponding to the environment variable.
 * @returns {any} The value of the environment variable.
 * will be used in future
 */
function getSecretValue(key) {
    return Cypress.env(key);
}

module.exports = {
    getCredentials,
    getSecretValue,
    getBaseUrl
};