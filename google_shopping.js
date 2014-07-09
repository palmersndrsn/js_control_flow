var data = require("./products.json")
var count = 0

// Write your solutions below

 //1. The kind of results you're are dealing are shopping#products. 
 //Go through the items and find all results that have kind of shopping#product. 
 //How many are there? Where else is this count information stored in the search results?
 for (i = 0; i < data.items.length; i++) {
 	if (data.items[i]["kind"] === "shopping#product") {
 		count++;
 	}
 }
 console.log(count)


//2. Find all items with a backorder availability in inventories.
 for (i = 0; i < data.items.length; i++) {
 	if (data.items[i].product.inventories[0]["availability"] === "backorder") {
 		console.log(data.items[i]["product"].title);
 	}

 }


//3. Find all items with more than one image link.
 for (i = 0; i < data.items.length; i++) {
 	if (data.items[i].product.images.length > 1) {
 		console.log(data.items[i].product.title);
 	}
 }

 //4. Find all canon products in the items (careful with case sensitivity).
 for (i = 0; i < data.items.length; i++) {
 	if (data.items[i].product["brand"] === "Canon") {
 		console.log(data.items[i].product.title)
 	}
 }

//5. Find all items that have product author name of "eBay" and are brand "Canon".
for (i = 0; i < data.items.length; i++) {
 	if (data.items[i].product["brand"] === "Canon" && data.items[i].product.author["name"] === "eBay") {
 		console.log(data.items[i].product.title)
 	}
 }
// How do I look up "eBay_____"? I can only get the first one with only ebay.

//6.  Print all the products with their brand, price, and a image link
for (i = 0; i < data.items.length; i++) {
	console.log(data.items[i].product.title)
	console.log(data.items[i].product.brand)
    console.log(data.items[i].product.inventories.price)
	console.log(data.items[i].product.images.link) 
}
//No idea why it says undefined for price and image.

// console.log(data["items"]);