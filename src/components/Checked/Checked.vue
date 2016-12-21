<template>
  <a href="#" v-on:click.prevent="">
    <i v-bind:class="{'fa fa-check text-success': checked, 'fa fa-times text-danger': checked === false}"></i>
  </a>
</template>

<script>
export default {
  props: ['checked']
}
</script>
