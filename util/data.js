const { faker } = require('@faker-js/faker');

let ACCOUNTS = [], INVOICES = [], SUPPORT_CASES = [];

const init = () => {

    // First create the accounts
    for (let i = 0; i < 10; i++) {
        ACCOUNTS.push({
            id: i + 1,
            accountName: faker.company.name(),
            primaryContact: faker.person.fullName(),
            email: faker.internet.email()
        });
    }

    permittedStatus = ['Paid', 'Uninvoiced', 'Invoiced'];

    // Next the invoices using the accounts
    for (let i = 0; i < 10; i++) {
        INVOICES.push({
            id: i + 1,
            date: faker.date.past().toLocaleDateString('es-ES'),
            accountName: ACCOUNTS[i].accountName,
            contact: ACCOUNTS[i].email,
            price: parseFloat(faker.commerce.price()),
            status: permittedStatus[Math.floor(Math.random() * permittedStatus.length)]
        });
    }

    // Finally the support cases using the accounts
    for (let i = 0; i < 10; i++) {
        SUPPORT_CASES.push({
            id: i + 1,
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