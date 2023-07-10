const { faker } = require('@faker-js/faker');

let ACCOUNTS = [], INVOICES = [], SUPPORT_CASES = [];

const init = () => {

    // First the accounts
    let accounts = [];

    for (let i = 0; i < 10; i++) {
        ACCOUNTS.push({
            accountName: faker.company.name(),
            primaryContact: faker.person.fullName(),
            email: faker.internet.email()
        });
    }

    // Then the invoices using the accounts

    permittedStatus = ['Paid', 'Uninvoiced', 'Invoiced'];

    for (let i = 0; i < 10; i++) {
        INVOICES.push({
            date: faker.date.past().toLocaleDateString('es-ES'),
            accountName: ACCOUNTS[i].accountName,
            contact: ACCOUNTS[i].email,
            price: parseFloat(faker.commerce.price()),
            status: permittedStatus[Math.floor(Math.random() * permittedStatus.length)]
        });
    }

    // Last the support cases using the accounts  
    for (let i = 0; i < 10; i++) {
        SUPPORT_CASES.push({
            name: ACCOUNTS[i].primaryContact,
            address: faker.location.streetAddress(),
            phone: faker.phone.number(),
            email: ACCOUNTS[i].email,
            notes: faker.lorem.paragraph(),
        });
    }
};

module.exports = {
    init,
    ACCOUNTS,
    INVOICES,
    SUPPORT_CASES
};