import {getBaseUrl} from "../utility/getCredentials";

const baseUrl = getBaseUrl();

export const GET = (endpoint, queryParams = {}) => {
    return cy.request({
        method: 'GET',
        url: `${baseUrl}/${endpoint}`,
        qs: queryParams
    });
};

export const POST = (endpoint, body) => {
    return cy.request({
        method: 'POST',
        url: `${baseUrl}/${endpoint}`,
        body
    });
};

export const PUT = (endpoint, body) => {
    return cy.request({
        method: 'PUT',
        url: `${baseUrl}/${endpoint}`,
        body
    });
};

export const DELETE = (endpoint) => {
    return cy.request({
        method: 'DELETE',
        url: `${baseUrl}/${endpoint}`
    });
};
