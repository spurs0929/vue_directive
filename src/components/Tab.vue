<template>
  <div>
    <div v-nav-change="{
      tabClass: 'tab-item',
      activeClass: 'active',
      currentIndex
    }">
      <a 
        href="javascript:;"
        class="tab-item"
        v-for="(item, index) of tabData"
        :key="item.id"
        @click="tabChange(index)"
      >{{ item.title }}</a>    
    </div>
    <div>
      <p>{{ tabContent }}</p>
    </div>
  </div>
</template>

<script>

  import navChange from '../directives/navChange';

  export default {
    name: 'Tab',
    directives: {
      navChange
    },
    props: {
      tabData: {
        type: Array,
        default(){
          return []
        }
      },
      initialIndex: {
        type: [Number, String],
        default: 0
      }
    },
    data(){
      return {
        currentIndex: this.initialIndex
      }
    },
    computed: {
      tabContent(){
        return this.tabData[this.currentIndex].content
      }
    },
    methods: {
      tabChange(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style lang="scss">
  a {
    &.active{
      text-decoration: none;
      color: #000;
    }
  }
</style>