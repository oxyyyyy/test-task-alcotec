<template>
  <div class="vacuum">
    <ProductsTable :products="products" />
  </div>
</template>

<script>
import ProductsTable from "@/components/ProductsTable";

export default {
  name: "Vacuum",
  components: {
    ProductsTable
  },
  data() {
    return {
      products: [
        {
          id: 25986,
          categoryId: 322,
          availability: {
            ru: "В наличии, доставка 5 рабочих дней",
            ua: "У наявності, доставка 5 робочих днів",
            status: true
          },
          title: "Miele - EVS 6214 HV/BR",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 80700,
          marginStatus: "success",
          img: "/public/images/catalog/80898.jpg",
          compare: false,
          assortment: false
        },
        {
          id: 28029,
          categoryId: 322,
          availability: {
            ru: "В наличии, доставка 5 рабочих дней",
            ua: "У наявності, доставка 5 робочих днів",
            status: true
          },
          title: "Miele - EVS 6214 OB/BL",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 80700,
          marginStatus: "success",
          img: "/public/images/catalog/86955.jpeg",
          compare: false,
          assortment: false
        },
        {
          id: 28030,
          categoryId: 322,
          availability: {
            ru: "В наличии, доставка 5 рабочих дней",
            ua: "У наявності, доставка 5 робочих днів",
            status: true
          },
          title: "Miele - EVS 6214 CL/ST",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 2,
          rating: 5,
          sale: 0,
          priceUAH: 80700,
          marginStatus: "success",
          img: "/public/images/catalog/86958.jpeg",
          compare: false,
          assortment: false
        },
        {
          id: 29291,
          categoryId: 322,
          availability: {
            ru: "В наличии, доставка 5 рабочих дней",
            ua: "У наявності, доставка 5 робочих днів",
            status: true
          },
          title: "Miele - EVS 6114 CL/ST",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 75600,
          marginStatus: "success",
          img: "/public/images/catalog/96777.jpg",
          compare: false,
          assortment: false
        },
        {
          id: 27349,
          categoryId: 322,
          availability: {
            ru: "В наличии, доставка 5 рабочих дней",
            ua: "У наявності, доставка 5 робочих днів",
            status: true
          },
          title: "Miele - EVS 6214 BR/WH",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 80700,
          marginStatus: "success",
          img: "/public/images/catalog/80677.jpeg",
          compare: false,
          assortment: false
        },
        {
          id: 25507,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Gaggenau - DV 461100",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 98396,
          marginStatus: "success",
          img: "/public/images/catalog/80237.jpg",
          compare: false,
          assortment: false
        },
        {
          id: 25508,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Gaggenau - DV 461110",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 98396,
          marginStatus: "success",
          img: "/public/images/catalog/80243.jpg",
          compare: false,
          assortment: false
        },
        {
          id: 31744,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Electrolux - KBV 4 X",
          silverStatus: [
            {
              id: 1,
              ru: "Open Range",
              ua: "Open Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 67999,
          marginStatus: "success",
          img: "/public/images/catalog/110976.jpg",
          compare: false,
          assortment: false
        },
        {
          id: 26461,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Gaggenau - DVP 221130",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 85625,
          marginStatus: "success",
          img: "/public/images/catalog/75983.png",
          compare: false,
          assortment: false
        },
        {
          id: 26459,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Gaggenau - DVP 221100",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 85625,
          marginStatus: "success",
          img: "/public/images/catalog/75967.png",
          compare: false,
          assortment: false
        },
        {
          id: 26460,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Gaggenau - DVP 221110",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 85625,
          marginStatus: "success",
          img: "/public/images/catalog/75976.png",
          compare: false,
          assortment: false
        },
        {
          id: 26668,
          categoryId: 322,
          availability: {
            ru: "Под заказ",
            ua: "Під замовлення",
            status: false
          },
          title: "Asko - ODV 8128 G",
          silverStatus: [
            {
              id: 1,
              ru: "Protect Kitchen Range",
              ua: "Protect Kitchen Range"
            }
          ],
          redStatus: false,
          type: {
            plural: {
              ru: "Вакууматоры",
              ua: "Вакууматоры"
            },
            ru: "Вакууматор",
            ua: "Вакууматор"
          },
          popular: 0,
          rating: 0,
          sale: 0,
          priceUAH: 73596,
          marginStatus: "success",
          img: "/public/images/catalog/77178.jpg",
          compare: false,
          assortment: false
        }
      ],
      totalNumberOfFilteredItems: 16,
      totalQuantityOfGoods: 16
    };
  }
};
</script>
