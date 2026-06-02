import { Howl } from "howler"

import soundEffect1 from './assets/kahoot.mp3'
import soundEffect2 from './assets/wildcat.mp3'
import soundEffect3 from './assets/lion.mp3'
import soundEffect4 from './assets/meow.mp3'

const kahoot = new Howl({ 
  src: [soundEffect1],
  autoplay: true,
  loop: true,
})

const roar = new Howl({
  src: [soundEffect2],
  sprite: {
    roar1: [0, 2000],
    roar2: [2000, 4000],
  }
})
const lion = new Howl({
  src: [soundEffect3],
  sprite: {
    lion1: [0, 1000],
    lion2: [1000, 2000],
  }
})

const meow = new Howl({
  src: [soundEffect4],
  sprite: {
    meow1: [1000, 2000],
    meow2: [3000, 4000],
  }
})

let score = 0 

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")


function updateScore(amount) {
  score += amount
  scoreDisplay.innerHTML = score.toFixed(1) + " Cat points"
}

clicker.addEventListener("click", function() {
  let clickAmt = 1 + (treats ** 1.5) + (toys ** 10.5)

  meow.play("meow1")

  updateScore(clickAmt)
})   

let treats = 0
let upgrade1 = document.getElementById("upgrade1")
 upgrade1.addEventListener("click", function() {
  roar.play("roar1")
  if (score >= 10) {
    updateScore(-10)
    treats ++
    upgrade1.innerHTML = "Buy a treat (10 points) You have " + treats + " treats"
  } else {
    alert("Not enough points")
  }
 })


 let toys = 0
 let upgrade2 = document.getElementById("upgrade2")
 upgrade2.addEventListener("click", function() {
  lion.play("lion1")
  if (score >= 100) {
    updateScore(-100)
    toys ++
    upgrade2.innerHTML = "Buy a toy (100 points) You have " + toys + " toys"
  } else {
    alert("Not enough points")
  }
 })

 function gameloop()  {
  let clickAmt = (treats ** 1.5) 
  updateScore(clickAmt)
 }  
 setInterval(gameloop, 1000)