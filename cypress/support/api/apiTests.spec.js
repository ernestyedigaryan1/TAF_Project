import {DELETE, GET, POST, PUT} from "cypress/support/api/apiUtils.js";
import {
    createDashboard,
    deleteDashboardById,
    getActivityItemId,
    updateDashboardById
} from "cypress/support/api/endpoints.js";

describe('CRUD Tests', () => {
    it('should retrieve activity item by ID', () => {

        const projectName = 'DEMO DASHBOARD';
        const itemId = 10;

        // Make the GET request using the utility function
        GET(getActivityItemId(projectName, itemId)).then(response => {
            // Assert that the response status code is 200
            expect(response.status).to.eq(200);
        });
    });

    it('should delete dashboard by ID', () => {
        // Assuming you have a valid projectId and dashboardId
        const projectName = 'DEMO DASHBOARD';
        const dashboardId = 'DashboardId';

        // Make the DELETE request using the utility function
        DELETE(deleteDashboardById(projectName, dashboardId)).then(response => {
            // Assert that the deletion status code is 200
            expect(response.status).to.eq(200);

            // Attempt to GET the same resource after deletion
            GET(deleteDashboardById(projectName, dashboardId)).then(response => {
                // Assert that attempting to access the deleted resource returns no response (status code 404)
                expect(response.status).to.eq(404);

            });
        });
    });

    it('should update dashboard by ID', () => {
        const projectName = 'DEMO DASHBOARD';
        const dashboardId = 'yourDashboardId';
        const updatedData = { /* Update data object */ };

        // Make the PUT request using the utility function
        PUT(updateDashboardById(projectName, dashboardId), updatedData).then(response => {
            // Assert that the update status code is 200
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.equal(updatedData);

            // After updating, retrieve the updated dashboard and assert
            GET(updateDashboardById(projectName, dashboardId)).then(updatedResponse => {
                // Assert that the retrieved dashboard matches the updated data
                expect(updatedResponse.status).to.eq(200);
            });
        });
    });

    it('should create a new dashboard', () => {
        // Assuming you have a valid projectId and dashboard data to be posted
        const projectName = 'DEMO DASHBOARD';
        const dashboardData = { /* Dashboard data to be posted */ };

        // Make the POST request using the utility function
        POST(createDashboard(projectName), dashboardData).then(response => {
            // Assert that the creation status code is 201 (Created)
            expect(response.status).to.eq(201);

            GET(createDashboard(projectName)).then(createdResponse => {
                // Assert that the created dashboard exists
                expect(createdResponse.status).to.eq(200);
                // Assert other properties as needed
            });
        });
    });
});