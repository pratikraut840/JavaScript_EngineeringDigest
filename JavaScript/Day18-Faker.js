// Import the faker library for generating dynamic test data
const { faker } = require('@faker-js/faker');

creatUser(() => {
    let userId = faker.string.userId;
    let username = faker.internet.username;
    let email = faker.internet.email;
    let avatar = faker.image.avatar;
    let password = faker.internet.password;
    let birthdate = faker.date.birthdate;
    let registeredAt = faker.date.past;
    console.log(userId);
})
creatUser()