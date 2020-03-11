<template>
  <section v-if="$route.meta.breadcrumbs" class="page-breadcrumbs">
      <nav class="breadcrumbs" role="navigation" itemscope itemtype="https://schema.org/BreadcrumbList">
        <ol class="breadcrumbs-list">
          <li v-for="(link, index) in $route.meta.breadcrumbs" class="breadcrumbs-list-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" :key="index">
            <router-link v-slot="{href, navigate}" :to="link.href">
              <a itemprop="url item" :href="href" @click="navigate"><span itemprop="name">{{link.name}}</span></a>
            </router-link>
            <meta itemprop="position" :content="index + 1">
          </li>
          <li class="breadcrumbs-list-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" key="currentPage">
            <router-link v-slot="{href, navigate}" :to="$route.path">
              <a itemprop="url item" :href="href" @click="navigate"><span itemprop="name">{{$route.name}}</span></a>
            </router-link>
            <meta itemprop="position" :content="$route.meta.breadcrumbs.length + 1">
          </li>
        </ol>
      </nav>
  </section>
</template>


<script lang="ts">

  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class Breadcrumbs extends Vue {}

</script>


<style lang="scss">
  .page-breadcrumbs {
    @include Convert\Pixel-Rem(padding-bottom, 45px);
    @include Convert\Pixel-Rem(padding-top, 45px);
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
    .breadcrumbs {
      flex: 0 1 auto;
      &-list {
        flex-direction: row;
        flex-wrap: nowrap;
        list-style: none;
        display: flex;
        &-item {
          @include Convert\Pixel-Rem(font-size, 12px);
          text-transform: uppercase;
          font-weight: 600;
          margin: 0;
          > a {
            @include Convert\Pixel-Rem(padding, 5px, 10px, 5px, 0);
            @include Convert\Pixel-Rem(line-height, 24px);
            @include Convert\Pixel-Rem(height, 24px);
            @include Transition(color);
            display: inline-flex;
            align-items: center;
            color: inherit;
          }
          &:last-child {
            font-weight: 700;
            > a {
              pointer-events: none;
            }
          }
          &:not(:last-child){
            > a {
              &:hover,
              &:focus {
                text-decoration: underline;
              }
              &::after {
                @include Convert\Pixel-Rem(margin-left, 10px);
                @include Helper\FontAwesome('\f105');
                pointer-events: none;
                font-size: inherit;
              }
            }
          }
          &:first-child {
            > a > span {
              @include Helper\Hidden-Text();
              &::before {
                @include Helper\Visible-Text();
                @include Convert\Pixel-Rem(font-size, 12px);
                @include Helper\FontAwesome('\f015');
                color: currentColor;
                display: inherit;
              }
              @include Viewport\Min($Viewport\SM) {
                @include Helper\Visible-Text();
                &::before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>