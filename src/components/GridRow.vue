]<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class GridRow extends Vue {}
</script>

<style lang="scss">
  .row {
    @include Convert\Pixel-Rem(margin-right, -8px);
    @include Convert\Pixel-Rem(margin-left, -8px);
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
  }
</style>