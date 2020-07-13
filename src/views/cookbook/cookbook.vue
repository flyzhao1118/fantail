<template>
  <div id="cookbook">
    <cookbook-list :cookbookList="cookbookList" class="cookbookList"></cookbook-list>
    <lemon class="lemon"></lemon>
  </div>
</template>

<script>
import cookbookList from "./childComps/cookbookList";
import lemon from "./childComps/lemon";

import {getDishList} from "network/cookbook.js";

export default {
  name: "cookbook",
  components: {
    cookbookList,
    lemon
  },
  
  data () {
    return {
      cookbookList: []
    }
  },

  created() {
    getDishList().then(res => {
      this.cookbookList = res.data.data;
    })
  }
}
</script>

<style scoped>
#cookbook {
  display: flex;
}

.lemon {
  width: 540px;
  height: 650px;
}
</style>
