<template>
  <div id="cookbook">
    <div class="food-card">
      <div class="food-card__image">
        <img src="https://hips.hearstapps.com/hmg-prod/images/delish-191908-cauliflower-pizza-0390-landscape-pf-1568654348.jpg" alt="Pizza" />
      </div>
      <div class="food-card__details">
        <span class="food-card__name">Pizza</span>
        <span class="food-card__desc">Fresh & sweet</span>       
        <div class="food-card__price">£50</div>
        <div class="food-card__rating">
           <el-rate value="5" disabled></el-rate>
        </div>
      </div>
    </div>

    <div class="food-card">
      <div class="food-card__image">
        <img src="https://i.ytimg.com/vi/3n87Tbu5A9M/maxresdefault.jpg" alt="Chicken" />
      </div>
      <div class="food-card__details">
        <span class="food-card__name">Chicken</span>
        <span class="food-card__desc">Fried to crisp</span>
        <div class="food-card__price">£82</div>
        <div class="food-card__rating">
          <el-rate value="4" disabled></el-rate>
        </div>
      </div>
    </div>

    <div class="food-card">
      <div class="food-card__image">
        <img src="https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/morningadvertiser.co.uk/article/2018/09/05/4-coffee-trends-that-are-hot-right-now/2907246-1-eng-GB/4-coffee-trends-that-are-hot-right-now_wrbm_large.jpg" alt="Coffee" />
      </div>
      <div class="food-card__details">
        <span class="food-card__name">Coffee</span>
        <span class="food-card__desc">Anyhow</span>
        <div class="food-card__price">£5</div>
        <div class="food-card__rating">
          <el-rate value="3" disabled></el-rate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cookbook",
  data () {
    return {
      value1: 4
    }
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
  margin: 50px;
  cursor: pointer;
}
  
.food-card:hover {
  transform: translateZ(30px);
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
  grid-row-gap: 8px;
  grid-template: 1fr 1fr / 1fr 1fr;
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
  text-align: right;
}

#cookbook {
  font-family: 'Montserrat', sans-serif;
  perspective: 2000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
