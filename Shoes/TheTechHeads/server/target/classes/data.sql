INSERT INTO user_account (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');
INSERT INTO user_account (username, email, password) VALUES ('user2', 'user2@example.com', 'password2');

INSERT INTO order (product_name, price, order_date, user_account_id) VALUES ('Product 1', 100.0, CURRENT_TIMESTAMP, 1);
INSERT INTO order (product_name, price, order_date, user_account_id) VALUES ('Product 2', 200.0, CURRENT_TIMESTAMP, 2);
