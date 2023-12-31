const swaggerAutogen = require('swagger-autogen')();

// Get host dynamically
const host = process.env.WEBSITE_HOSTNAME || 'localhost:3000';

const doc = {
    info: {
        version: "1.0.0",
        title: "Contoso API",
        description: "Contoso API Information",
        contact: {
            name: "Gisela Torres",
        }
    },
    host: host,
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    externalDocs: {
        description: "swagger.json",
        url: `http://${host}/swagger.json`
    },
    definitions: {
        Invoice: {
            id: 1,
            date: "2021-05-05",
            accountName: "Franecki Group",
            contact: "Cassidy.Lemke81@yahoo.com",
            price: 380.00,
            status: "Paid"

        },
        Invoices: [{
            id: 1,
            date: "2021-05-05",
            accountName: "Franecki Group",
            contact: "Cassidy.Lemke81@yahoo.com",
            price: 380.00,
            status: "Paid"
        }],
        Accounts: [{
            id: 1,
            accountName: "WingTip Toys",
            primaryContact: "Bart Friday",
            contactEmail: "b.friday@wingtiptoys.com"
        }],
        SupportCases: [{
            id: 1,
            name: "Lynne Robbins",
            address: "3800 148th Ave NE",
            phone: "425-555-1234",
            email: "lrobbins@proseware.com",
            notes: "Financial Advisory"

        }]
    }
};

const outputFile = './swagger.json';

swaggerAutogen(outputFile, ['./routes.js'], doc);