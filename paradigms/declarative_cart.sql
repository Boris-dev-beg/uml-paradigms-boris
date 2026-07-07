create Table order_items (
    order_id INT,
    item_id INT,
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10, 2),
    PRIMARY KEY (order_id, item_id)
);

-- ! Calculate the total price for each order
SELECT
    order_id,
    SUM(quantity * price) AS total_price
FROM
    order_items
GROUP BY
    order_id