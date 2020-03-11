<template>
  <div class="page">
    <Breadcrumbs />
    <router-view>
      <slot></slot>
    </router-view>
  </div>
</template>


<script lang="ts">

  import {Component, Prop, Vue} from "vue-property-decorator";

  import Breadcrumbs from "@/components/Breadcrumbs.vue";

  @Component({
    components: {
      Breadcrumbs
    }
  })
  export default class Page extends Vue {}

</script>


<style lang="scss">

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media only screen and (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,
  abbr, acronym, address, big, cite, code, del,
  dfn, em, img, ins, kbd, q, s, samp, small,
  strike, strong, sub, sup, tt, var, b, u, i,
  center, dl, dt, dd, ol, ul, li, fieldset, form,
  label, legend, table, caption, tbody, tfoot, thead,
  tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu,
  nav, output, ruby, section, summary, time, mark,
  audio, video {
    font-size: $Settings\Text\Scale;
    vertical-align: baseline;
    padding: 0;
    margin: 0;
    border: 0;
  }

  html {
    -webkit-text-size-adjust: $Settings\Text\Scale;
    -webkit-overflow-scrolling: touch;
    line-height: 1.15;
  }

  body {
    background-color: $Color\Default\White;
    text-rendering: $Settings\Text\Render;
    font-family: $Font\Family\Arial;
    scroll-behavior: smooth;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    min-height: 100vh;
    font-weight: 400;
    display: flex;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  b, strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 60%;
    line-height: 0;
  }

  sub {
    vertical-align: sub;
  }

  sup {
    vertical-align: super;
  }

  embed, iframe, img,
  object, video, figure {
    max-width: 100%;
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  input, button,
  select, textarea {
    letter-spacing: inherit;
    font-family: inherit;
    color: inherit;
  }

  textarea {
    vertical-align: top;
    resize: vertical;
    overflow: auto;
  }

  button,
  [type=button],
  [type=submit],
  [type=reset] {
    -webkit-appearance: button;
  }

  button, select {
    text-transform: none;
  }

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
  }

  [contenteditable=true] {
    &:empty::before {
      content: attr(placeholder);
      cursor: text;
    }
  }
  
  .hidden,
  [hidden],
  [aria-hidden=true] {
    visibility: hidden !important;
    display: none !important;
  }

  .page {
    @include Convert\Pixel-Rem(padding-right, 45px);
    @include Convert\Pixel-Rem(padding-left, 45px);
    flex: 1;
  }

  section:not([class]) {
    @include Convert\Pixel-Rem(margin-bottom, 45px);
  }

   h1,  h2,  h3,  h4,  h5,  h6, p,
  .h1, .h2, .h3, .h4, .h5, .h6, .p {
    font-family: $Font\Family\Arial;
    margin-top: 0;
  }

  h1, .h1 {
    @include Convert\Pixel-Rem(font-size, 28px);
    @include Convert\Pixel-Rem(margin-bottom, 10px);
    text-transform: uppercase;
    @include Viewport\Min($Viewport\SM) {
      @include Convert\Pixel-Rem(font-size, 36px);
    }
    @include Viewport\Min($Viewport\MD) {
      @include Convert\Pixel-Rem(font-size, 48px);
    }
  }

  h2, .h2 {
    @include Convert\Pixel-Rem(line-height, 19.25px);
    @include Convert\Pixel-Rem(margin-bottom, 15px);
    @include Convert\Pixel-Rem(font-size, 17.5px);
    text-transform: uppercase;
    @include Viewport\Min($Viewport\SM) {
      @include Convert\Pixel-Rem(line-height, 22px);
      @include Convert\Pixel-Rem(font-size, 20px);
    }
  }

  h3, .h3 {
    @include Convert\Pixel-Rem(margin-bottom, 15px);
    @include Convert\Pixel-Rem(line-height, 22px);
    @include Convert\Pixel-Rem(font-size, 20px);
  }

  h4, .h4 {
    @include Convert\Pixel-Rem(margin-bottom, 10px);
    @include Convert\Pixel-Rem(font-size, 26px);
    text-transform: uppercase;
  }

  h5, .h5 {
    @include Convert\Pixel-Rem(margin-bottom, 10px);
    @include Convert\Pixel-Rem(line-height, 16px);
    @include Convert\Pixel-Rem(font-size, 14px);
    font-weight: 700;
  }

  h6, .h6 {
    @include Convert\Pixel-Rem(margin-bottom, 15px);
    @include Convert\Pixel-Rem(line-height, 16px);
    @include Convert\Pixel-Rem(font-size, 12px);
    text-transform: uppercase;
  }

  p, .p {
    @include Convert\Pixel-Rem(margin-bottom, 15px);
    @include Convert\Pixel-Rem(line-height, 21px);
    @include Convert\Pixel-Rem(font-size, 14px);
    font-weight: 400;
  }

  ul, .ul,
  ol, .ol {
    > li {
      @include Convert\Pixel-Rem(line-height, 21px);
      @include Convert\Pixel-Rem(font-size, 14px);
      + li {
        @include Convert\Pixel-Rem(margin-top, 4px);
      }
    }
  }

</style>