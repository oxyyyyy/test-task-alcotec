import { ProductsService } from "@/service/api.service";

import { FETCH_PRODUCTS } from "../types/actions.type";
import {
  SET_PRODUCTS,
  TOGGLE_SORT_ORDER_OF_PRODUCTS
} from "../types/mutations.type";

const state = {
  products: [],
  productsSortOrderAsc: false
};

const mutations = {
  [SET_PRODUCTS](state, products) {
    state.products = products;
    state.productsSortOrderAsc = false;
  },

  [TOGGLE_SORT_ORDER_OF_PRODUCTS](state) {
    if (!state.productsSortOrderAsc) {
      const sortedProducts = state.products.sort((a, b) => {
        const priceA = a.priceUAH;
        const priceB = b.priceUAH;

        let comparison = 0;
        if (priceA > priceB) {
          comparison = 1;
        } else if (priceA < priceB) {
          comparison = -1;
        }
        return comparison;
      });
      state.products = sortedProducts;
      state.productsSortOrderAsc = true;
    } else {
      const sortedProducts = state.products.reverse();
      state.products = sortedProducts;
      state.productsSortOrderAsc = false;
    }
  }
};

const actions = {
  async [FETCH_PRODUCTS](context, productCategoryId) {
    const { data } = await ProductsService.get(productCategoryId);
    context.commit(SET_PRODUCTS, data.products);
    return data.products;
  }
};

const getters = {
  productsSortOrderAsc(state) {
    return state.productsSortOrderAsc;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
