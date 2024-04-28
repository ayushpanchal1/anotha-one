const User = require('./usermodel');

// Create new user
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
});

// Save the user to the database
newUser.save((err, user) => {
    if (err) {
        console.error(err);
    } else {
        console.log('User added successfully:', user);
    }
});

// Find all users
User.find({}, (err, users) => {
    if (err) {
        console.error(err);
    } else {
        console.log('All users:', users);
    }
});

// Find user by specific condition
User.findOne({ name: 'John Doe' }, (err, user) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Found user:', user);
    }
});

// Update user
User.updateOne({ name: 'John Doe' }, { age: 35 }, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log('User updated successfully:', result);
    }
});

// Delete user
User.deleteOne({ name: 'John Doe' }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('User deleted successfully');
    }
});

