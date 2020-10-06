import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  },

  get(slug) {
    return axios.get(`${slug}`);
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  }
};

export default ApiService;

export const ProductsService = {
  get(productCategoryId) {
    return ApiService.post(`/products/${productCategoryId}`, {
      sorting: { sortBy: "rating", isDesc: true },
      page: 1,
      perpage: 15,
      filter: {}
    });
  }
};

export const StaticPageService = {
  get(alias) {
    return ApiService.get(`/pages/${alias}`);
  }
};
