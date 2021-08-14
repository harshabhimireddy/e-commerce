import React from "recat";
import Grid from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10' },
];

const Products = () => {
  <main>
    <Grid conatiner justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <Product product={product}/>
            </Grid>
        ))}
    </Grid>
  </main>;
};

export default Products;
