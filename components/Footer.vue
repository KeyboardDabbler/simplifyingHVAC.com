<template>
  <UFooter>
    <template #center>
      <div class="flex flex-col items-center">
        <p class="">Made with ❤️ by <NuxtLink to="https://keyboarddabbler.com" class="text-primary font-bold">keyboardDabbler</NuxtLink>
        </p>
        <p class="">© 2023-{{ new Date().getFullYear() }}<span class="text-primary font-bold"> Simplifying HVAC</span> | All
          rights reserved.</p>
      </div>
    </template>
  </UFooter>
</template>