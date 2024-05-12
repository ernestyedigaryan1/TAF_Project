export const getActivityItemId =
    (projectName, itemId)=> `/v1/${projectName}/activity/item/${itemId}`
export const deleteDashboardById =
    (projectName, dashboardId) => `/v1/${projectName}/dashboard/${dashboardId}`

export const updateDashboardById =
    (projectName, dashboardId) => `/v1/${projectName}/dashboard/${dashboardId}`;

export const createDashboard = (projectName) => `/v1/${projectName}/dashboard`;



