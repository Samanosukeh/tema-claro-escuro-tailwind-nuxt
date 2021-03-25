<template>
  <div class="container bg-white text-black dark:bg-black dark:text-white">
    <div class="m-48 justify-center text-center">
      <colormode></colormode>
      <h1 class="title text-xl font-bold text-red dark:text-blue">
        <p>Clique no botão para mudar o tema :)</p>
      </h1>
    </div>
  </div>
</template>

<script>
import colormode from "~/components/ColorMode";
export default {
  components: {
    colormode,
  },
}
</script>

<style>

</style>
