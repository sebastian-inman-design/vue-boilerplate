]<template>
  <div :class="`col ${classes}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class GridColumn extends Vue {
    @Prop() sizes!: any;
    get classes() {
      let output = "";
      Object.keys(this.sizes).map(k => output += `${k}:col-${this.sizes[k]} `);
      return output;
    }
  }
</script>

<style lang="scss">

  .col {
    @include Convert\Pixel-Rem(padding-right, 8px);
    @include Convert\Pixel-Rem(padding-left, 8px);
    flex-direction: column;
    display: inline-flex;
    flex: 0 1 100%;
    width: 100%;
  }

  .col-auto,
  .xs\:col-auto {
    flex: 0 1 auto;
    width: auto;
  }

  .col-1\/1,
  .col-full,
  .xs\:col-1\/1,
  .xs\:col-full {
    flex: 0 1 100%;
    width: 100%;
  }

  @for $i from 1 through $Grid\MaxColumns {

    @for $j from 1 through $Grid\MaxColumns {

      @if $j > $i {

        .col-#{$i}\/#{$j},
        .xs\:col-#{$i}\/#{$j} {
          flex: 0 1 #{($i / $j) * 100%};
          width: #{($i / $j) * 100%};
        }

        @include Viewport\Min($Viewport\SM) {
          .sm\:col-#{$i}\/#{$j} {
            flex: 0 1 #{($i / $j) * 100%};
            width: #{($i / $j) * 100%};
          }
        }

        @include Viewport\Min($Viewport\MD) {
          .md\:col-#{$i}\/#{$j} {
            flex: 0 1 #{($i / $j) * 100%};
            width: #{($i / $j) * 100%};
          }
        }

        @include Viewport\Min($Viewport\LG) {
          .lg\:col-#{$i}\/#{$j} {
            flex: 0 1 #{($i / $j) * 100%};
            width: #{($i / $j) * 100%};
          }
        }

      }

    }

  }

</style>