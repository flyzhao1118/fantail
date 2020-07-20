<template>
  <div id="calendar">
    <div class="container">
      <div class="left">
        <div class="location">
          <div class="icon"><i class="el-icon-location-outline"></i></div>
          <div class="city">{{province}} {{city}}</div>
        </div>
        <div class="temp">{{weather.wendu}}<span>&#8451;</span></div>
        <div class="forecast">
          <div>今天: {{getTodayWeather}}</div>
          <div>明天: {{getTomorrowWeather}}</div>
        </div>
        <div class="cold">
          <div class="icon"><i class="el-icon-magic-stick"></i></div>
          <div class="prompt">{{weather.ganmao}}</div>
        </div>
      </div>
      <div class="middle">
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
      calendarTimer: "",
      weatherTimer: "",
      city: "",
      province: "",
      weather: {}
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
    },

    getTodayWeather() {
      if (this.weather.forecast != undefined) {
        const today = this.weather.forecast[0];
        return today.type + " " + today.low.slice(3) + "~" + today.high.slice(3) + " " + 
            today.fengxiang + today.fengli.slice(9, 11)
      }
    },

    getTomorrowWeather() {
      if (this.weather.forecast != undefined) {
        const today = this.weather.forecast[1];
        return today.type + " " + today.low.slice(3) + "~" + today.high.slice(3) + " " + 
            today.fengxiang + today.fengli.slice(9, 11)
      }
    }
  },

  methods: {
    getDays() {
      const now = new Date();
      const weekConvert = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      this.currentDay.year = now.getFullYear();
      this.currentDay.month = now.getMonth()  + 1;
      this.currentDay.day = now.getDate();
      this.currentDay.week = weekConvert[now.getDay()];
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
    },

    getLocation() {
      const cityCode=returnCitySN.cid;
      this.province = returnCitySN.cname.slice(0, 3);
      this.city = returnCitySN.cname.slice(3)
    },

    getWeather() {
      this.$axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then(res => {     
          if(res.data.desc == "OK") {
            this.weather = res.data.data;
          }    
        })      
        .catch(error => {        
          console.log(error);      
        })
    }
  },

  watch: {
    time(newTime, oldTime) {
      if (newTime == "00:00:00") {
        this.getDays();
        this.getWeather()
      }
    }
  },

  created() {
    this.getDays();
    this.getTime();
    this.calendarTimer = setInterval(this.getTime, 1000);
    this.weatherTimer = setInterval(this.getWeather, 1000*60*30);
    this.getLocation();
    this.getWeather()
  },

  beforeDestroy() {
    clearInterval(this.calendarTimer);
    clearInterval(this.weatherTimer);
  }
}
</script>

<style scoped>
  #calendar {
    background-color: darkcyan;
    padding: 30px 65px;
    height: 460px;
    width: 1075px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 945px;
    height: 400px;
  }

  .left {
    width: 315px;
    height: 400px;
    vertical-align: top;
    text-align: center;
    background-color: white;
    transform: rotateY(25deg) rotateZ(10deg);
  }

  .left .location {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(33, 165, 165);
    font-size: 25px;
    line-height: 80px;
  }

  .left .location .city {
    margin: 0 10px;
  }

  .left .temp {
    font-size: 110px;
    line-height: 110px;
    color: tomato;
  }

  .left .temp span {
    font-size: 40px;
    position: relative;
    bottom: 40px;
  }

  .left .forecast > div {
    line-height: 30px;
    font-size: 20px;
    color: darkturquoise;
  }

  .left .cold {
    line-height: 25px;
    padding: 20px 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    font-size: 20px;
  }

  .left .cold .icon {
    color: deeppink;
    margin-right: 15px;
  }

  .left .cold .prompt {
    color: rgb(247, 4, 134);
    font-style: oblique;
  }

  .middle {
    width: 315px;
    height: 400px;
    vertical-align: top;
    text-align: center;
    background-color: rgb(75, 218, 218);
  }

  .middle .week {
    font-size: 35px;
    color: white;
    line-height: 100px;
  }

  .middle .day {
    font-size: 180px;
    color: white;
  }

  .middle .time {
    font-size: 50px;
    color: white;
  }

  .right {
    width: 315px;
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