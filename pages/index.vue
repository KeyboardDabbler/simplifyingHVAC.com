<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

</script>

<template>
  <div>
    <ULandingSection :title="page.features.title" :description="page.features.description" orientation="vertical">
      <template #top>
        <div class="flex justify-center items-center mb-4">
          <img src="~/assets/img/brand/logo.svg"
          class="max-h-60 align-" />
        </div>
      </template>
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>