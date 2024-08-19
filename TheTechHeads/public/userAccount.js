class UserAccount {
    constructor(username, password, email) {
        this.userID = this.generateUserID();
        this.username = username;
        this.password = password;
        this.email = email;
        this.orders = [];
    }

    generateUserID() {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';

        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < 4; i++) {
            id += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        // Shuffle the string to mix letters and numbers
        id = id.split('').sort(() => 0.5 - Math.random()).join('');
        
        return id;
    }

    addOrder(order) {
        this.orders.push(order);
    }
}

class Order {
    constructor(orderID, product, quantity, price) {
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}

function saveUserToLocalStorage(user) {
    localStorage.setItem('user_' + user.userID, JSON.stringify(user));
}

function getUserFromLocalStorage(userID) {
    return JSON.parse(localStorage.getItem('user_' + userID));
}

function saveCurrentUserID(userID) {
    localStorage.setItem('currentUserID', userID);
}

function getCurrentUserID() {
    return localStorage.getItem('currentUserID');
}
