<template>
  <div class="vacuum">
    <ProductsTable :products="products" v-if="isLoadedProducts" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import { FETCH_PRODUCTS } from "@/store/types/actions.type";

import ProductsTable from "@/components/ProductsTable";

export default {
  name: "Vacuum",
  components: {
    ProductsTable
  },
  data() {
    return {
      products: [],
      isLoadedProducts: false
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
        .dispatch(FETCH_PRODUCTS, "322")
        .then(products => (this.products = products))
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => (this.isLoadedProducts = true));
    }
  }
};
</script>
