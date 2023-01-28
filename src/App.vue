<script setup>
import {RouterLink, RouterView} from 'vue-router'
import TopBarComponents from "@/components/TopBarComponents.vue";

</script>
<template>
  <div>
    <TopBarComponents/>
  </div>
  <div>
    <RouterView/>
    <footer class="footer">
      <div class="container">
          <p>
            <div class="copyright">© 2023 <b>WSB</b></div>
            <div class="content">
            <b>Wyższa Szkoła Bankowa</b><br>
            Śląska 35/37, 81-310 Gdynia
            </div>
          </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.copyright {
  float: right;
}

.content {
  float: left;
  }
</style>
