<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item">
        <router-link to="/" class="nav__list-item-link">Главная</router-link>
      </li>
      <li class="nav__list-item">
        <router-link to="/vacuum" class="nav__list-item-link"
          >Вакууматоры</router-link
        >
      </li>
      <li class="nav__list-item">
        <router-link to="/dosators" class="nav__list-item-link"
          >Дозаторы</router-link
        >
      </li>
      <li class="nav__list-item">
        <router-link to="/refund" class="nav__list-item-link"
          >Условия возврата</router-link
        >
      </li>
      <li class="nav__list-item">
        <router-link to="/payment" class="nav__list-item-link"
          >Условия оплаты</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px 0;
}

.nav__list {
  display: flex;
  font-weight: 600;
}

.nav__list-item {
  padding: 1rem;
}

.nav__list-item-link {
  color: #333;

  &.router-link-exact-active {
    color: seagreen;
  }
}
</style>
