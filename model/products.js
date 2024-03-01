var config = require("../config"),
    pgp = require('pg-promise')(),
    db = pgp(config.db.connectionString);

function list_products() {
    
    var q = "SELECT * FROM products;";

    return db.many(q);
}

			/*
			 *  Veracode Fix
			 * <============>
			 * Fix generated at: 12-02-2024 08:20:45
			 * CWE ID: 89
			 * Applied by: jmok@veracode.com
			 */


			/*
			 *  Veracode Fix
			 * <============>
			 * Fix generated at: 12-02-2024 08:20:57
			 * CWE ID: 89
			 * Applied by: jmok@veracode.com
			 */


function getProduct(product_id) {

    var q = "SELECT * FROM products WHERE id =?";
    return db.one(q, [product_id]);
}

			/*
			 *  Veracode Fix
			 * <============>
			 * Fix generated at: 12-02-2024 08:21:06
			 * CWE ID: 89
			 * Applied by: jmok@veracode.com
			 */


			/*
			 *  Veracode Fix
			 * <============>
			 * Fix generated at: 12-02-2024 08:21:16
			 * CWE ID: 89
			 * Applied by: jmok@veracode.com
			 */


function search(query) {

    var q = "SELECT * FROM products WHERE name ILIKE? OR description ILIKE?;";
    return db.many(q, [query, query]);

}

function purchase(cart) {

    var q = "INSERT INTO purchases(mail, product_name, user_name, product_id, address, phone, ship_date, price) VALUES('" +
            cart.mail + "', '" +
            cart.product_name + "', '" +
            cart.username + "', '" +
            cart.product_id + "', '" +
            cart.address + "', '" +
            cart.ship_date + "', '" +
            cart.phone + "', '" +
            cart.price +
            "');";

    return db.one(q);

}

function get_purcharsed(username) {

    var q = "SELECT * FROM purchases WHERE user_name = '" + username + "';";

    return db.many(q);

}

var actions = {
    "list": list_products,
    "getProduct": getProduct,
    "search": search,
    "purchase": purchase,
    "getPurchased": get_purcharsed
}

module.exports = actions;
