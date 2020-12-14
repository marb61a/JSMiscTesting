import assert from "assert";
import catalog from "../../pages/Catalog";

export default toBeFound => {
    const products = catalog.products;

    if(toBeFound){
        assert(products.length > 0, "No products were found");
    } else {
        assert(products.length === 0, "Products were found");
    }
}