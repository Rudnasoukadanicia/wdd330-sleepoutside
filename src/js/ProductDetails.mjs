export default class ProductDetails {
    constructor(productID, dataSource) {
        this.productID = productID;
        this.product = {};
        this.dataSource = dataSource;
    }
    async init() {
        this.product = await this.dataSource.findProductById(this.productID);
        this.renderProductDetails();

        document.getElementById('addToCart').addEventListener('click', this.addProductToCart.bind(this));

    }

    addProductToCart() {
        console.log("Product added to cart: ", this.product);
    }

    renderProductDetails() {
        const element = document.querySelector('.product-detail');
        element.innerHTML = `
        <h2>${this.product.Name}</h2>
        <p>${this.product.Description}</p>
        <p>Price: $${this.product.Price}</p>
        <div class="product-detail__add">
            <button id="addToCart">Add to Cart</button>
        </div>
        
        `;
    }
}