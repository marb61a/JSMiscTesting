import assert from "assert";
import catalog from "../../pages/Catalog";

// Checking where the search term (keyword) is present
export default keyword => {
    const products = catalog.products;

    products.forEach(product => {
        const productText = product
            .getText()
            .trim()
            .toLowerCase();
        
        if(productText){
            assert(
                productText.includes(keyword),
                `Product ${product.getText()} does not contain ${keyword}`
            );
        }
    })
}
