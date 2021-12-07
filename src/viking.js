// Soldier
class Soldier {  
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier { 
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [],
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let getRandomSaxonIndex = Math.floor(this.saxonArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[getRandomSaxonIndex];

    let viking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())];
  
    let damagedSaxon = randomSaxon.receiveDamage(viking.strength) 
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(getRandomSaxonIndex);
      }
        return damagedSaxon;
  }

  saxonAttack() {    
    let getRandomVikingIndex = Math.floor(this.vikingArmy.length * Math.random());
    let randomViking = this.vikingArmy[getRandomVikingIndex];
    
    let saxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())];

    let damagedViking = randomViking.receiveDamage(saxon.strength) 
      if (randomViking.health <= 0) {
        this.vikingArmy.splice(getRandomVikingIndex);
      }
        return damagedViking;
  }

  showStatus() {
    if(!this.saxonArmy.length) return`Vikings have won the war of the century!`;
    else if(!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`;
    else return `Vikings and Saxons are still in the thick of battle.`;  

  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
