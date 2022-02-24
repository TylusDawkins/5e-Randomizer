let playerLevel = 0
let playerName = null
const classFeatures = ["Rage",
"Unarmored Defense (Barb)",
"Reckless Attack",
"Danger Sense",
"Extra Attack",
"Fast Movement",
"Feral Instinct",
"Brutal Critical",
"Relentless Rage",
"Persistent Rage",
"Indomitable Might",
"Primal Champion",
"Bardic Inspiration",
"Jack of All Trades",
"Song of Rest",
"Expertise (Bard)",
"Font of Inspiration",
"Countercharm",
"Superior Inspiration",
"Destroy Undead ½",
"Destroy Undead 1",
"Divine Intervention",
"Wild Shape",
"Timeless Body",
"Archdruid",
"Fighting Style (Fighter)",
"Second Wind",
"Action Surge",
"Extra Attack (Fighter)",
"Indomitable",
"Unarmored Defense (Monk)",
"Martial Arts",
"Ki",
"Unarmored Movement",
"Deflect Missiles",
"Slow Fall",
"Extra Attack",
"Stunning Strike",
"Ki-Empowered Strikes apply to weapons if no martial arts",
"Evasion",
"Stillness of Mind",
"Purity of Body",
"Tongue of Sun and Moon",
"Diamond Soul",
"Empty Body Maybe up to proficiency",
"Perfect Self",
"Divine Sense",
"Lay on Hands",
"Divine Smite Uses up to proficiency bonus",
"Fighting Style (Paladin)",
"Divine Health",
"Extra Attack",
"Aura of Protection",
"Aura of Courage",
"Improved Divine Smite",
"Cleansing Touch",
"Favored Enemy",
"Natural Explorer",
"Fighting Style (Ranger)",
"Primeval Awareness",
"Extra Attack",
"Lands Stride",
"Hide in Plain Sight",
"Vanish",
"Feral Senses",
"Foe Slayer",
"Expertise (Rogue)",
"Sneak Attack",
"Thieves Cant",
"Cunning Action",
"Uncanny Dodge",
"Reliable Talent",
"Blindsense",
"Slippery Mind",
"Elusive",
"Stroke of Luck",
"ASI1",
"ASI2",
"ASI3",
"ASI4",
"ASI5",
];
const playerFeatures = [];
const randomFeatures = () => {
    let i = 0;
    while(i < playerLevel) {
        //Run function that will assign numbers to class features up to playerLevel.Length;
        const randoNum = Math.floor(Math.random() * classFeatures.length) ;
        if (playerFeatures.includes(classFeatures[randoNum])){
          continue
        } else{
          playerFeatures.push(classFeatures[randoNum])
          i++
        }
  }

}
function applyFeatures(){
  const features = ["f1",'f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15','f16','f17','f18','f19','f20']
  while(playerFeatures.length > 0){
    playerFeatures.pop()
  }
  randomFeatures()
  features.map((x,i) =>{
    document.getElementById(x).innerText = playerFeatures[i]
  })
}
//Need variables and function for running a loop that will assign numbers to spell slots up to playerLevel.Length

//random stats + dom to apply them

function rollStats() {
  const stats = []
  for (let i = 0; i < 6; i++ ){
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
  const statNames = ['str','dex','con','int','wis','cha']
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
// const levelUp = () => {
//       const randoNum = Math.floor(Math.random() * classFeatures.length) ;
//       if (playerFeatures.includes(classFeatures[randoNum])){
//         continue
//       } else{
//         playerFeatures.push(classFeatures[randoNum])
//       }
// }

const lvlUp = () => {
  let leveled = false
  while(!leveled) {
    //Run function that will assign numbers to class features up to playerLevel.Length;
    const randoNum = Math.floor(Math.random() * classFeatures.length) ;
    if (playerFeatures.includes(classFeatures[randoNum])){
      continue
    } else{
      playerFeatures.push(classFeatures[randoNum])
      leveled = true;
    }
  }
  const features = ["f1",'f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','f13','f14','f15','f16','f17','f18','f19','f20']
  features.map((x,i) =>{
    document.getElementById(x).innerText = playerFeatures[i]
  })
}