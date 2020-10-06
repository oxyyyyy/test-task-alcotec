<template>
  <table>
    <thead>
      <tr>
        <td>Изображение</td>
        <td>Наименование</td>
        <td>Наличие</td>
        <td><button>Цена</button></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>
          <img :src="'https://dev.alcotec.com.ua' + product.img" alt="" />
        </td>
        <td>{{ product.title }}</td>
        <td>{{ product.availability.ru }}</td>
        <td>{{ product.priceUAH }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ProductsTable",
  props: {
    products: {
      type: Array,
      required: true
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
