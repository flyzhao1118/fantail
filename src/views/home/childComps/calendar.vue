<template>
  <div id="calendar">
    <div class="container">
      <div class="left">
        <div class="week">{{currentDay.week}}</div>
        <div class="day">{{currentDay.day}}</div>
        <div class="time">{{time}}</div>
      </div>
      <div class="right">
        <div class="year">{{currentDay.year}}年{{currentDay.month}}月</div>
        <div class="calendar">
        <div class="weeks">
          <div class="item">日</div>
          <div class="item">一</div>
          <div class="item">二</div>
          <div class="item">三</div>
          <div class="item">四</div>
          <div class="item">五</div>
          <div class="item">六</div>
        </div>
        <div class="days">
          <div class="day" v-for="(item, index) in days" :key="index" 
          :class="{today:(item.num==currentDay.day)&&item.isCurrent, notCurrent: !item.isCurrent}">{{item.num}}</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      days: [],
      currentDay: {year: "", month: "", day: "", week: ""},
      currentTime: {hour: "", minute: "", second: ""},
      timer: ""
    }
  },

  computed: {
    getMonthDays() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
    },

    getLastMonthDays() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    },

    time() {
      return this.currentTime.hour + ":" + this.currentTime.minute + ":" + this.currentTime.second
    }
  },

  methods: {
    getDays() {
      const now = new Date();
      const weekConvert = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
      this.currentDay.year = now.getFullYear();
      this.currentDay.month = now.getMonth()  + 1;
      this.currentDay.day = now.getDate();
      this.currentDay.week = weekConvert[now.getDay() - 1];
      let days = [];
      const day1 = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
      if (day1 != 7) {
        for (let i = this.getLastMonthDays - day1 + 1; i < this.getLastMonthDays + 1; i++) {
        let day = {isCurrent: false, num: i};
        days.push(day)
        }
      }
      for (let j = 0; j < this.getMonthDays; j++) {
        let day = {isCurrent: true, num: j + 1}
        days.push(day)
      }
      const curLength = days.length;
      for (let k = 0; k < 35 - curLength; k++) {
        let day = {isCurrent: false, num: k + 1}
        days.push(day)
      }
      this.days = days
    },

    getTime() {
      const now = new Date();
      this.currentTime.hour = now.getHours().toString().padStart(2, "0");
      this.currentTime.minute = now.getMinutes().toString().padStart(2, "0");
      this.currentTime.second = now.getSeconds().toString().padStart(2, "0");
    }
  },

  watch: {
    time(oldTime, newTime) {
      if (newTime == "00:00:00") {
        this.getDays();
      }
    }
  },

  created() {
    this.getDays();
    this.getTime();
    this.timer = setInterval(this.getTime, 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
  #calendar {
    background-color: darkcyan;
    padding: 30px;
    height: 460px;
    width: 760px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 400px;
    padding: 0 35px;
  }

  .left {
    display: inline-block;
    width: 350px;
    height: 400px;
    vertical-align: top;
    text-align: center;
    background-color: rgb(75, 218, 218);
  }

  .left .week {
    font-size: 35px;
    color: white;
    line-height: 100px;
  }

  .left .day {
    font-size: 180px;
    color: white;
  }

  .left .time {
    font-size: 50px;
    color: white;
  }

  .right {
    display: inline-block;
    width: 350px;
    height: 400px;
    text-align: center;
    background-color: white;
  }

  .right .year {
    font-size: 35px;
    color: rgb(33, 165, 165);
    font-weight: bolder;
    line-height: 100px;
  }

  .right .weeks .item{
    font-size: 18px;
    display: inline-block;
    width: 40px;
    line-height: 40px;
    color: crimson;
    font-weight: bolder;
  }

  .right .days .day {
    font-size: 15px;
    display: inline-block;
    width: 40px;
    line-height: 40px;
    cursor: pointer;
    transition: .2s;
    font-weight: 600;
  }

  .right .days .day:hover {
    font-weight: bolder;
    color: white;
    background-color: rgb(230, 76, 107);
  }

  .today {
    background-color: crimson;
    font-weight: bolder;
    color: white;
  }

  .notCurrent {
    color: #aaaaaa;  
  }
</style>