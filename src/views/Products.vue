<template>
  <div class="dosators">
    <ProductsTable :products="products" v-if="isLoadedProducts" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import { FETCH_PRODUCTS } from "@/store/types/actions.type";

import ProductsTable from "@/components/ProductsTable";

export default {
  name: "Products",
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
    this.fetchProducts(this.$route.params.product_category_id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchProducts(to.params.product_category_id);
    next();
  },
  methods: {
    fetchProducts(productCategoryId) {
      this.$store
        .dispatch(FETCH_PRODUCTS, productCategoryId)
        .then(products => (this.products = products))
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => (this.isLoadedProducts = true));
    }
  }
};
</script>
