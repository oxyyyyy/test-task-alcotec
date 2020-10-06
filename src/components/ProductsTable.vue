<template>
  <table>
    <thead>
      <tr>
        <td>Изображение</td>
        <td>Наименование</td>
        <td>Наличие</td>
        <td>
          <button @click="toggleSortOrderOfProducts">
            Цена
            <span v-if="isActiveSorting">{{
              $store.getters.productsSortOrderAsc ? "(asc)" : "(desc)"
            }}</span>
          </button>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>
          <img :src="VUE_APP_BASE_URL + product.img" alt="" />
        </td>
        <td>{{ product.title }}</td>
        <td>{{ product.availability.ru }}</td>
        <td>{{ product.priceUAH }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { TOGGLE_SORT_ORDER_OF_PRODUCTS } from "@/store/types/mutations.type";

export default {
  name: "ProductsTable",
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL,
      isActiveSorting: false
    };
  },
  methods: {
    toggleSortOrderOfProducts() {
      this.isActiveSorting = true;
      this.$store.commit(TOGGLE_SORT_ORDER_OF_PRODUCTS);
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;

  thead {
    font-weight: 600;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;

    tr {
      background: #67bf67;

      td {
        padding: 15px;
        vertical-align: middle;
      }
    }
  }

  tbody {
    font-weight: 300;

    tr {
      border-bottom: 1px solid #333;

      td {
        padding: 15px;
        vertical-align: middle;

        img {
          width: 75px;
          height: auto;
        }
      }
    }
  }
}
</style>
