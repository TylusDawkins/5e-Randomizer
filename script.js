//Variables
let playerLevel = 0
let playerName = null
let choices
let playerFeatures

playerFeatures = [];

//Elements
const lvlUpButton = document.querySelector(".levelUp")

//Rules
// Every four levels a player can switch their stats around, but they cannot swap points between them
// Tier abilities 1-4
// Unarmored defense would be 10 + physical + fortitude
// Features that appear 
// ??Only stat is proficiency bonus??

classFeatures = [
  { 
    name: 'Rage', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Unarmored Defense', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Reckless Attack', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Danger Sense', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Extra Attack', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:true 
  },
  { 
    name: 'Fast Movement', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Feral Instinct', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Brutal Critical', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Relentless Rage', 
    dependancy: 'Rage',
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Persistent Rage', 
    dependancy: 'Rage',
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Indomitable Might', 
    dependancy: null,
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Primal Champion', 
    dependancy: null,
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Bardic Inspiration', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Wild Shape', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Archdruid', 
    dependancy: "Wild Shape",
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Fighting Style (Fighter)', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Second Wind', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Action Surge', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Indomitable', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Martial Arts', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Ki', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Unarmored Movement', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Deflect Missiles', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Stunning Strike', 
    dependancy: 'Ki',
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  {
    name: 'Ki-Empowered Strikes',
    dependancy: 'Ki',
    conflifts: [null],
    tier: 2,
    stackable:false
  
  },
  { 
    name: 'Evasion', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Diamond Soul', 
    dependancy: 'Ki',
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  {
    name: 'Empty Body',
    dependancy: 'Ki',
    conflifts: [null],
    tier: 3,
    stackable:false
  },
  { 
    name: 'Lay on Hands', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  {
    name: 'Divine Smite',
    dependancy: null,
    conflifts: [null],
    tier: 1,
    stackable:false
  },
  { 
    name: 'Fighting Style (Paladin)', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Aura of Protection', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Improved Divine Smite', 
    dependancy: 'Divine Smite',
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Fighting Style (Ranger)', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Foe Slayer', 
    dependancy: null,
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Sneak Attack', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Cunning Action', 
    dependancy: null,
    conflifts: [null], 
    tier: 1,
    stackable:false 
  },
  { 
    name: 'Uncanny Dodge', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Reliable Talent', 
    dependancy: null,
    conflifts: [null], 
    tier: 2,
    stackable:false 
  },
  { 
    name: 'Blindsense', 
    dependancy: null,
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Elusive', 
    dependancy: null,
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'Stroke of Luck', 
    dependancy: null,
    conflifts: [null], 
    tier: 3,
    stackable:false 
  },
  { 
    name: 'ASI', 
    dependancy: null,
    conflifts: [null], 
    tier: null,
    stackable:true 
  }
]

const tier1Features = classFeatures.filter(x => x.tier === 1)
const tier2Features = classFeatures.filter(x => x.tier === 2)
const tier3Features = classFeatures.filter(x => x.tier === 3)

//Functions
const randomFeatures = () => {
    let i = 0;
    let randoFeature 
    let availableFeatures
    while(i < playerLevel) {
        if(i >= 10){
          availableFeatures = tier3Features + tier2Features + tier1Features
        } else if(i >= 5){
          availableFeatures = tier2Features + tier1Features
        } else{
          availableFeatures = tier1Features
        }
        randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)]
        if (playerFeatures.includes(randoFeature)){
          if(randoFeature.stackable){
            playerFeatures.push(randoFeature)
            i++
          } else{
          continue
          }
        } else{
          playerFeatures.push(randoFeature)
          i++
        }
  }
}

//DisplayChoices renders the results of getRandomChoices to the DOM

function applyFeatures(){
  const features = ["f1",'f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15','f16','f17','f18','f19','f20']
  features.map((x,i) =>{
    console.log(playerFeatures[i])
    if(playerFeatures[i] === undefined){
      document.getElementById(x).innerText = ""
      return
    }
    console.log(playerFeatures[i])
    document.getElementById(x).innerText = playerFeatures[i].name
  })
}
//Need variables and function for running a loop that will assign numbers to spell slots up to playerLevel.Length

//random stats + dom to apply them

function rollStats() {
  const stats = []
  for (let i = 0; i < 3; i++ ){
    stats[i] = []
    for (let j = 0; j < 4; j++){
        const stat = Math.ceil(Math.random() * 6);
        stats[i].push(stat)
    }
    // Sorts in descending order
    stats[i].sort((a,b)=> b-a)
    // Removes the last item in the array (lowest number)
    stats[i].pop()
    // Reducer function to add up the numbers in the array
    stats[i] = stats[i].reduce((a,b) => a+b)
    }
    return stats 
  }

function rollStat(){
  // Opens an array to hold the rolls
  const rolls = []
  // Runs a for-loop 4 times
  for(let i = 0; i < 4; i++){
    // Roll a d6
    const roll = Math.ceil(Math.random() *6);
    // Add the roll to the array (result, 4d6)
    rolls.push(roll)
  }
  // Sort by descending
  rolls.sort((a,b) => b-a)
  // Drop lowest num
  rolls.pop()
  // Return the sum of the rolls
  return rolls.reduce((a,b) => a+b)
}

function applyStats(){
  const statNames = ['Physical','Fortitude','Mental']
  statNames.map(x =>{
    document.getElementById(x).innerText = rollStat()
  })
}

function fnName(){
  let name = document.getElementById("inputName").value;
  console.log(playerName)
}
function fnLevel(){
  let level = document.getElementById("inputLevel").value;
  playerLevel = level
  console.log(level)
}

const lvlUp = () => {
  let leveled = false
  while(!leveled) {
    //Run function that will assign numbers to class features up to playerLevel.Length;
    const randoNum = Math.floor(Math.random() * classFeatures.length)
    if (playerFeatures.includes(classFeatures[randoNum])){
      continue
    } else{
      playerFeatures.push(classFeatures[randoNum])
      leveled = true;
    }
  }
  playerLevel++
  const features = ["f1",'f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15','f16','f17','f18','f19','f20']
  playerFeatures.forEach((feat,i) =>{
    document.getElementById(features[i]).innerText = feat.name
  })
  // features.map((x,i) =>{
  //   console.log(playerFeatures[i])
  //   document.getElementById(x).innerText = playerFeatures[i].name
  // })
}

const displayChoiceModal = () => {
  let choiceModalDiv = document.getElementById("choice-modal")
  let choiceDiv1 = document.getElementById("choice1")
  let choiceDiv2 = document.getElementById("choice2")
  let choiceDiv3 = document.getElementById("choice3")

  choiceDiv1.children[3].remove()
  choiceDiv2.children[3].remove()
  choiceDiv3.children[3].remove()

  choiceButton1 = document.createElement("button")
  choiceButton2 = document.createElement("button")
  choiceButton3 = document.createElement("button")

  choiceButton1.classList.add("choice-btn")
  choiceButton2.classList.add("choice-btn")
  choiceButton3.classList.add("choice-btn")

  choiceButton1.innerText = "Select"
  choiceButton2.innerText = "Select"
  choiceButton3.innerText = "Select"

  choiceButton1.addEventListener("click", ()=>{selectChoice(choices[0])})
  choiceButton2.addEventListener("click", ()=>{selectChoice(choices[1])})
  choiceButton3.addEventListener("click", ()=>{selectChoice(choices[2])})
  
  //Changes the first choice div
  choiceDiv1.children[0].innerText = `Title:${choices[0].name}`
  choiceDiv1.children[1].innerText = `Description:No descriptions yet`
  choiceDiv1.children[2].innerText = `Choices:${choices[0].tier}`
  choiceDiv1.appendChild(choiceButton1)

  //Changes the second choice div
  choiceDiv2.children[0].innerText = `Title:${choices[1].name}`
  choiceDiv2.children[1].innerText = `Description:No descriptions yet`
  choiceDiv2.children[2].innerText = `Choices:${choices[1].tier}`
  choiceDiv2.appendChild(choiceButton2)

  //Changes the third choice div
  choiceDiv3.children[0].innerText = `Title:${choices[2].name}`
  choiceDiv3.children[1].innerText = `Description:No descriptions yet`
  choiceDiv3.children[2].innerText = `Choices:${choices[2].tier}`
  choiceDiv3.appendChild(choiceButton3)

  //Sets the modal to visible
  choiceModalDiv.style.display = "flex"
}

const getRandomChoices = () => {
  let i = 0
  let randoFeature
  choices = []
  let availableFeatures
  while(i < 3){
    if(i >= 10){
      availableFeatures = tier3Features
    } else if(i >= 5){
      availableFeatures = tier2Features
    } else{
      availableFeatures = tier1Features
    }
    randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)]
    if (choices.includes(randoFeature)){
      continue
    } else{
      choices.push(randoFeature)
      i++
    }
  }
}

const handleChoices = () => {
  getRandomChoices()
  displayChoiceModal()
}

//Functions that handle selecting an ability and closing the modal
const closeModal = () => {
  let choiceModalDiv = document.getElementById("choice-modal")
  choiceModalDiv.style.display = "none"
}

const selectChoice = (choice) => {
  console.log(choice)
  playerFeatures.push(choice)
  console.log(playerFeatures)
  applyFeatures()
  closeModal()

  document.querySelectorAll("choice-btn").forEach((btn) => {
    btn.removeEventListener("click", selectChoice)
  })
}

//Event Listeners
lvlUpButton.addEventListener("click", handleChoices)