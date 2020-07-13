<template>
  <div id="cookbookList">
    <div v-for="item in cookbookList" :key="item.dish_id" class="cookbook-list">
      <div class="food-card">
        <div class="food-card__image">
          <img :src="item.dish_image" />
        </div>
        <div class="food-card__details">
          <span class="food-card__name">{{item.dish_name}}</span>
          <span class="food-card__desc">{{item.dish_description}}</span>       
          <div class="food-card__price">￥{{item.dish_price}}</div>
          <div class="food-card__rating">
            <div>难度</div>
            <el-rate :value="item.dish_difficulty" disabled></el-rate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cookbookList",
  props: {
    cookbookList: Array
  }
}
</script>

<style scoped>
.food-card {
  background-color: #fff;
  width: 325px;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: -30px 70px 150px -20px rgba(51, 51, 51, 0.25);
  transform-style: preserve-3d;
  transform: rotateX(22deg) rotate(-14deg) rotateY(17deg) translateZ(30px);
  transition: transform .8s;
}
  
.food-card:hover {
  transform: rotate(0deg);
}

.food-card:hover img {
  transform: rotate(0deg) translateX(0);
  border-radius: 5px;
}
  
.food-card__image {
  position: relative;
  height: 160px;
}
    
.food-card__image img {
  width: 100%;
  border-radius: 30px;
  transform: rotate(8deg) translateX(-10px);
  position: absolute;
  height: 140px;
  object-fit: cover;
  object-position: center;
  transition: .8s;
}
  
.food-card__details {
  display: grid;
  grid-row-gap: 28px;
  grid-template: 1fr 1fr / 1fr 2fr;
  padding: 8px 30px 20px;
}
  
.food-card__name {
  grid-column: 1;
  grid-row: 1;
  font-size: 18px;
  font-weight: bold;
  color: #11313c;
}
  
.food-card__price {
  grid-column: 2;
  grid-row: 1;
  font-size: 18px;
  font-weight: bold;
  color: #f7736e;
  text-align: right;
}
  
.food-card__desc {
  grid-column: 1;
  grid-row: 2;
  font-size: 14px;
  font-weight: 500;
  color: #949a98;
}
  
.food-card__rating {
  grid-column: 2;
  grid-row: 2;
  text-align: center;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}

.cookbook-list {
  margin: 50px;
  cursor: pointer;
}

#cookbookList {
  font-family: 'Montserrat', sans-serif;
  perspective: 2000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>