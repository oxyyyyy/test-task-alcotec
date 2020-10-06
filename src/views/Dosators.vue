<template>
  <keep-alive>
    <div class="dosators">
      <ProductsTable :products="products" /></div
  ></keep-alive>
</template>

<script>
import { FETCH_PRODUCTS } from "@/store/types/actions.type";

import ProductsTable from "@/components/ProductsTable";

export default {
  name: "Dosators",
  components: {
    ProductsTable
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    if (!this.products.length) {
      this.fetchProducts();
    }
  },
  methods: {
    fetchProducts() {
      this.$store
        .dispatch(FETCH_PRODUCTS, "103")
        .then(products => (this.products = products))
        .catch(error => {
          throw new Error(error);
        });
    }
  }
};
</script>
