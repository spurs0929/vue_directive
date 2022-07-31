<template>
  <tab 
    :tabData="tabData"
    :initial-index="initialIndex"
  ></tab>  
</template>

<script>

import Tab from './components/Tab.vue';

export default {
  name: 'App',
  components: {
    Tab
  },
  data(){
    return {
      tabData: [
        {
          id: 1,
          title: '選項1',
          content: '內容1'
        },
        {
          id: 2,
          title: '選項2',
          content: '內容2'
        },
        {
          id: 3,
          title: '選項3',
          content: '內容3'
        },
        {
          id: 4,
          title: '選項4',
          content: '內容4'
        },
      ],
      initialIndex: 0
    }
  }
}
</script>

<style>

</style>