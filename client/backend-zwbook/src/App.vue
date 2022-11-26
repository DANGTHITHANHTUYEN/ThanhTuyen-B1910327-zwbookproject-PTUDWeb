<template>
  <AppHeader></AppHeader> 
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<script >
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  }, 
}
</script> 

<style >
body{
  padding:0px;
  margin:0px;

}
header {
  line-height: 1.5;
}
 
</style>
