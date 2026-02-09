// Import the faker library for generating dynamic test data
const { faker } = require('@faker-js/faker');

// Function to create a fake user using a callback
function createUser(callback) {
    let user = {
        userId: faker.string.uuid(),           // generate unique ID
        username: faker.internet.userName(),   // generate username
        email: faker.internet.email(),         // generate email
        avatar: faker.image.avatar(),          // generate avatar URL
        password: faker.internet.password(),   // generate password
        birthdate: faker.date.birthdate(),     // generate birthdate
        registeredAt: faker.date.past()        // generate registration date
    };

    // Call the callback with the user object
    if (callback) {
        callback(user);
    }
}

// Example usage with a callback
createUser((user) => {
    console.log('🎯 New Fake User:', user);
});

// Example usage without callback
createUser(); // Nothing happens if no callback is provided
