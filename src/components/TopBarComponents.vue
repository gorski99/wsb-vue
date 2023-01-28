<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:5173">
        <img src="/src/assets/logo_gdynia.png" style="width:200px;">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showMenuBurger(!showMobileMenu)">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'show-burger': showMobileMenu }">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">Strona Główna</RouterLink>
        <RouterLink to="/o-nas" class="navbar-item">O nas</RouterLink>
        <RouterLink to="/wyszukiwarka-wykladowcow" class="navbar-item">Wyszukiwarka wykładowców</RouterLink>
        <RouterLink to="/kontakt" class="navbar-item">Kontakt</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBarComponents",
  data() {
    return {
      showMobileMenu: false
    }
  },

  methods: {
    showMenuBurger(state) {
      this.showMobileMenu = state
      console.log(this.showMobileMenu)
    }
  }
}
</script>

<style scoped>
.navbar-item img {
  max-height: unset;
}

.show-burger {
  display: block;
}
</style>