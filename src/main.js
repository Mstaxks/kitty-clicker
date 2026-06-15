import { Howl } from "howler"

import soundEffect1 from './assets/sadsong.mp3'
import soundEffect2 from './assets/wildcat.mp3'
import soundEffect3 from './assets/lion.mp3'
import soundEffect4 from './assets/meow.mp3'
import soundEffect5 from './assets/cat.mp3'

const sadsong = new Howl({
  src: [soundEffect1],
  autoplay: true,
  loop: true,
  volume: 0.1,
})

const roar = new Howl({
  src: [soundEffect2],
  sprite: {
    roar1: [0, 2000],
    roar2: [2000, 4000],
  },
  volume: 1,
})
const lion = new Howl({
  src: [soundEffect3],
  sprite: {
    lion1: [0, 1000],
    lion2: [1000, 2000],
  },
  volume: 1,
})

const meow = new Howl({
  src: [soundEffect4],
  sprite: {
    meow1: [1000, 2000],
    meow2: [3000, 4000],
  },
  volume: 1,
})

const cat = new Howl({
  src: [soundEffect5],
  sprite: {
    cat1: [0, 1000],
    cat2: [1000, 2000],
  },
  volume: 1,
})

let score = 0

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")


function updateScore(amount) {
  score += amount
  scoreDisplay.innerHTML = score.toFixed(1) + " Cat points"
}

clicker.addEventListener("click", function () {
  let clickAmt = 1 + (treats ** 1.5) + (toys ** 2.5) + (gifts ** 3.5)

  meow.play("meow1")

  console.log("Click! Score increased by " + clickAmt)

  updateScore(clickAmt)
})


let treats = 0
let upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener("click", function () {
  if (score >= 10) {
    roar.play("roar1");
    updateScore(-10);
    treats++;
    upgrade1.innerHTML = "Buy a treat (10 points) You have " + treats + " treats";
    upgrade1.classList.add("btn-accessible");
    setTimeout(() => {
      upgrade1.classList.remove("btn-accessible");
    }, 300); // duration in ms
  } else {
    showPopup();
    // Not enough points: turn button red temporarily
    upgrade1.classList.add("btn-unaffordable");
    setTimeout(() => {
      upgrade1.classList.remove("btn-unaffordable");
    }, 300); // duration in ms
  }
});

let toys = 0
let upgrade2 = document.getElementById("upgrade2")
upgrade2.addEventListener("click", function () {
  lion.play("lion1")
  if (score >= 100) {
    updateScore(-100)
    toys++
    upgrade2.innerHTML = "Buy a toy (100 points) You have " + toys + " toys"
    upgrade2.classList.add("btn-accessible");
    setTimeout(() => {
      upgrade2.classList.remove("btn-accessible");
    }, 300); // duration in ms
  } else {
    showPopup();
    // Not enough points: turn button red temporarily
    upgrade2.classList.add("btn-unaffordable");
    setTimeout(() => {
      upgrade2.classList.remove("btn-unaffordable");
    }, 250); // duration in ms
  }

})

let gifts = 0
let upgrade3 = document.getElementById("upgrade3")
upgrade3.addEventListener("click", function () {
  cat.play("cat1")
  if (score >= 1000) {
    updateScore(-1000)
    gifts++
    upgrade3.innerHTML = "Buy a gift (1000 points) You have " + gifts + " gifts"
    upgrade3.classList.add("btn-accessible");
    setTimeout(() => {
      upgrade3.classList.remove("btn-accessible");
    }, 300); // duration in ms
  } else {
    // Not enough points: turn button red temporarily
    showPopup();
    upgrade3.classList.add("btn-unaffordable");
    setTimeout(() => {
      upgrade3.classList.remove("btn-unaffordable");
    }, 250); // duration in ms
  }
})


function gameloop() {
  let clickAmt = (treats ** 1.5)
  updateScore(clickAmt)
}
setInterval(gameloop, 1000)


const popup = document.getElementById("popup-message");

function showPopup() {
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 1500);
}