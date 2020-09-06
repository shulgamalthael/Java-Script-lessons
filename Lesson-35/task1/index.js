window.addEventListener("error", function onUnhandledError (err) {
    console.error("error", err.message);
});

let userParsingResult = '{"name": "Ali"}';

try {
    const user = JSON.parse(userParsingResult);
    console.log("User data: ", user);
    userParsingResult = "success";
} catch(e) {
    userParsingResult = "error";
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult = '{"name": "Leo"';

try {
    const product = JSON.parse(productParsingResult);
    console.log("Product data: ", product);
    productParsingResult = "success";
} catch(e) {
    productParsingResult = "error";
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
} 