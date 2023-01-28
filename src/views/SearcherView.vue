<script setup>
import { ref, computed, watch } from 'vue';
import lecturers from '/src/assets/data/lecturers.json'
import it from '/src/assets/icons/it.svg'
import law from '/src/assets/icons/law.svg'
import math from '/src/assets/icons/math.svg'
import physics from '/src/assets/icons/physics.svg'
import '/src/assets/main.scss'

const icons = ref({
  it,
  law,
  math,
  physics
});
const searchQuery = ref('');
const filteredLecturers = computed(() => {
  if (!searchQuery.value) return lecturers;
  return lecturers.filter((lecturer) => {
    return lecturer.workplace.toLowerCase().includes(searchQuery.value.toLowerCase()) |
        lecturer.name.toLowerCase().includes(searchQuery.value.toLowerCase()) |
        lecturer.email.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

watch(searchQuery, (newSearchQuery) => {
  console.log(newSearchQuery);
});

</script>

<template>
    <main class="main">
    <header>
      <h1 class="title">Wyszukiwarka Wykładowców</h1>
    </header>
    <input v-model="searchQuery" type="text" />
    <div id="cards" class="cards">
      <div v-for="lecturer in filteredLecturers" :key="id" :id="id" class="card">
        <h1 class="card__title">{{ lecturer.workplace }}</h1>
        <h2 class="card__subtitle">{{ lecturer.name }}</h2>
        <img
            v-if="lecturer.icon"
            class="card__image"
            :src="icons[lecturer.id]"
            :alt="id"
        />
        <div>
          email: <strong>{{ lecturer.email }}</strong>
        </div>
        <a class="card__link" :href="`mailto:${email}`" target="_blank" rel="noopener">Napisz</a>
        <template v-if="lecturer.inner">
          <div v-for="(info, index) in lecturer.inner" :key="index"  class="card__inner">
            <strong>{{ info.bold }}</strong> - {{ info.description }}
          </div>
        </template>
      </div>
    </div>
  </main>
</template>
