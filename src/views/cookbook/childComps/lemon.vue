<template>
  <div id="lemon">
    <div class="glass">
      <div class="liquid">
        <div class="cube cube1"></div>
        <div class="cube cube2"></div>
        <div class="cube cube3"></div>
        <div class="half-lemon lemon1">
          <div class="seeds seed1"></div>
          <div class="seeds seed2"></div>
          <div class="seeds seed3"></div>
          <div class="seeds seed4"></div>
        </div>
        <div class="half-lemon lemon2">
          <div class="seeds seed1"></div>
          <div class="seeds seed2"></div>
          <div class="seeds seed3"></div>
          <div class="seeds seed4"></div>
        </div>
        <div class="leaf"></div>
        <div class="bubble bubble1"></div>
        <div class="bubble bubble2"></div>
        <div class="bubble bubble3"></div>
        <div class="bubble bubble4"></div>
      </div>
      <div class="straw"></div>
      <div class="liquid liquid2"></div>
    </div>
    <div class="full-lemon">
      <div class="seed seed1"></div>
      <div class="seed seed2"></div>
      <div class="seed seed3"></div>
      <div class="seed seed4"></div>
      <div class="seed seed5"></div>
      <div class="seed seed6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lemon',
}
</script>

<style scoped>
#lemon {
  overflow: hidden;
  background-color: #7ed6df;
}

.glass {
  position: relative;
  left: 30%;
  top: 50%;
  width: 150px;
  height: 250px;
  border: 5px solid #fff;
  border-top: none;
  border-radius: 0 0 5px 5px;
  transform: perspective(10px) rotateX(-1deg);
  z-index: 1000;
  box-shadow: 10px 10px 25px 15px rgba(0,0,0,0.2);
}

.glass:after {
  content: "";
  width: 150px;
  height: 30px;
  background: transparent;
  position: absolute;
  bottom: 0;
  background: radial-gradient(100% 120% at top, transparent 50%, #fff 51%);
  z-index: 1000;
}

.liquid {
  background: rgba(115, 198, 140, 0.5);
  position: absolute;
  width: 150px;
  height: 220px;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
}

.liquid2 {
  background: rgba(255, 255, 255, 0.25);
  height: 249px;
  border-top: 0.2px solid rgba(255,255,255,0.4);
  width: 150px;
}
.straw {
  border: 5px solid #35231a;
  border-bottom: 0;
  border-right: 0;
  height: 200px;
  width: 50px;
  position: absolute;
  left: 83%;
  top: -10%;
  border-radius: 10px 0;
  transform: rotate(15deg);
}
.cube {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  position: absolute;
  background: rgba(181, 222, 189, 0.7);
  left: 25%;
  z-index: 100;
}

.cube1 {
  bottom: 5%;
  transform: rotate(-5deg);
}

.cube2 {
  top: 45%;
  left: 55%;
  transform: rotate(35deg);
}

.cube3 {
  top: 2%;
  width: 45px;
  height: 40px;
  transform: rotate(5deg);
  animation: floatIce 2s infinite alternate;
}

.half-lemon {
  position: absolute;
  width: 110px;
  height: 50px;
  background: #fff;
  border-radius: 100px 100px 0 0;
  border: 5px solid #fdde23;
  border-bottom: 0;
}

.half-lemon .seeds {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 40px solid #fdde23;
  border-radius: 100%;
}

.half-lemon .seed1 {
  left: 8px;
  bottom: -10px;
  transform: rotate(-70deg);
}

.half-lemon .seed2 {
  left: 25px;
  bottom: 2px;
  transform: rotate(-20deg);
}

.half-lemon .seed3 {
  left: 45px;
  bottom: 2px;
  transform: rotate(15deg);
}

.half-lemon .seed4 {
  left: 60px;
  top: 20px;
  transform: rotate(70deg);
}

.lemon1 {
  left: 45%;
  bottom: 10%;
  transform: rotate(120deg);
}
.lemon2 {
  top: 40%;
  left: -25px;
  transform: rotate(-95deg);
  animation: floatLemon 6s ease-in alternate infinite;
}

.bubble {
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  animation-delay: 1s;
}

.bubble1 {
  width: 10px;
  height: 10px;
  animation: bubbleAnimation 1s ease-in infinite,
    sideways 0.5s ease-in infinite alternate;
  left: 20%;
}

.bubble2 {
  width: 12px;
  height: 12px;
  left: 30%;
  animation: bubbleAnimation 1.5s ease-in infinite,
    sideways 0.3s ease-in infinite alternate;
}

.bubble3 {
  width: 8px;
  height: 8px;
  left: 70%;
  animation: bubbleAnimation 3.5s ease-in infinite,
    sideways 0.5s ease-in infinite alternate;
}

.bubble4 {
  width: 8px;
  height: 8px;
  left: 90%;
  animation: bubbleAnimation 2.5s ease-in infinite,
    sideways 1s ease-in infinite alternate;
}

.leaf {
  width: 40px;
  height: 80px;
  background: #59bda6;
  border-radius: 0 100% 0 100%;
  position: absolute;
  top: 12px;
  left: 6px;
  transform: rotate(190deg);
  overflow: hidden;
  z-index: 10;
  animation: floatLeaf 5s ease-in alternate infinite;
}

.leaf:after {
    content: "";
    position: absolute;
    height: 120px;
    width: 60px;
    background-image: linear-gradient(65deg, #064436 50%, #145e49 50%);
}
  
.full-lemon {
  width: 110px;
  height: 110px;
  border-radius: 100%;
  position: relative;
  border: 6px solid #fdde23;
  top: 5%;
  left: 23%;
  background: #fff;
  transform: translate(-50%, -50%);
}
.full-lemon .seed {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid #fdde23;
  border-radius: 100%;
}

.full-lemon .seed1 {
  left: 25px;
  top: 5px;
  transform: rotate(-10deg);
}

.full-lemon .seed2 {
  left: 5px;
  top: 20px;
  transform: rotate(-75deg);
}

.full-lemon .seed3 {
  left: 10px;
  top: 45px;
  transform: rotate(-125deg);
}

.full-lemon .seed4 {
  left: 33px;
  top: 55px;
  transform: rotate(-185deg);
}

.full-lemon .seed5 {
  left: 52px;
  top: 38px;
  transform: rotate(115deg);
}

.full-lemon .seed6 {
  left: 50px;
  top: 12px;
  transform: rotate(50deg);
}

@keyframes bubbleAnimation {
  from {
    bottom: -15%;
  }
  to {
    bottom: 110%;
  }
}
@keyframes sideways {
  from {
    transform: translatex(-20px);
  }
  to {
    transform: translatex(20px);
  }
}
@keyframes floatLemon {
  from {
    transform: translateY(-12px) rotate(-95deg);
  }
  to {
    transform: translateY(12px) rotate(-120deg);
  }
}
@keyframes floatIce {
  from {
    transform: translateY(-5px) rotate(5deg);
  }
  to {
    transform: translateY(2px) rotate(-5deg);
  }
}
@keyframes floatLeaf {
  from {
    transform: translateY(-20px) rotate(-10deg);
  }
  to {
    transform: translateY(-10px) rotate(0);
  }
}
</style>
