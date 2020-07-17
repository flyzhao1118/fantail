<template>
  <div class="home">
    <calendar></calendar>
  </div>
</template>

<script>
import calendar from "./childComps/calendar"

export default {
  name: 'Home',
  components: {
    calendar
  }
}
</script>
