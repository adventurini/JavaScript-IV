// CODE here for your Lambda Classes
//first commit

class GameObject {
    constructor(info){
    this.createdAt = info.createdAt;
    this.dimensions = info.dimensions;
    this.name=info.name;
    }
    destroy(){
        return `${this.name} was removed from the game`;
    };
  }
  
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  class CharacterStats extends GameObject {
      constructor(stats){
          super(stats);
    this.healthPoints = stats.healthPoints;
  }
  takeDamage(){
    return `${this.name} took damage.`;
  };
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  
  
  class Humanoid extends CharacterStats{
      constructor(atts){
          super(atts);
    this.team = atts.team;
    this.weapons = atts.weapons;
    this.language = atts.language;
  }
  
  greet(){
    return `${this.name} offers a greeting in ${this.language}`;
  };
}

// ***********************************************************************//
// ****************CREDITS: CHRISTOPHER J FOSTER OF LAMBDA****************//

//USE ONLY FOR PURPOSE OF CHANGING FROM PROTOTYPE METHOD TO CLASSES/////////



class Villain extends Humanoid {
    constructor(weak){
        super(weak);
    this.taunt = weak.taunt;
    this.secretWeapon = weak.secretWeapon;
  }

  normalAttack(target) {
    let damage = Math.floor(Math.random() * Math.floor(this.healthPoints / 3)); // I set the max damage to the Villain's hp / 4 - the less healthy the attacker, the less damage they can inflict.
    let plural = "points";
    if (damage === 1) {
      plural = "point"; // It's nice to see "1 health point" and not "1 health points".
    }
    target.healthPoints -= damage;
    console.log(
      `${this.name} hits ${target.name} with a ${
        this.weapons[
          Math.floor(Math.random() * Math.floor(this.weapons.length)) // This code chooses randomly from among the attacking character's weapons.
        ]
      } for ${damage} health ${plural}!`
    );
    if (target.healthPoints <= 0) {
      console.log(`${target.name} has sustained mortal damage!`);
      console.log(target.destroy());
    } else {
      console.log(`${target.name} lives to fight on!`);
    }
  };
  specialAttack(target) {
    let damage = Math.floor(Math.random() * Math.floor(this.healthPoints / 3)); // The special attack is more powerful.
    let plural = "points";
    if (damage === 1) {
      plural = "point";
    }
    target.healthPoints -= damage;
    console.log(
      `${this.name} hits ${target.name} with a ${
        this.secretWeapon
      } for ${damage} health ${plural}!`
    );
    if (target.healthPoints <= 0) {
      console.log(`${target.name} has sustained mortal damage!`);
      console.log(target.destroy());
    } else {
      console.log(`${target.name} lives to fight on!`);
    }
  };
  
    speakTaunt(){
    console.log(`${this.name}: ${this.taunt}`);
  };
}
  
  class Hero extends Humanoid {
    constructor(strong){
        super(strong);
    this.battleCry = strong.battleCry;
    this.superWeapon = strong.superWeapon;
  }
  
    speakBattleCry() {
    console.log(`${this.name}: ${this.battleCry}`);
  };

  normalAttack(target) {
    let damage = Math.floor(Math.random() * Math.floor(this.healthPoints / 2.25)); // The Hero's max damage is hp / 2 (instead of the Villain's hp / 4). The gods smile upon the Hero!
    let plural = "points";
    if (damage === 1) {
      plural = "point";
    }
    target.healthPoints -= damage;
    console.log(
      `${this.name} hits ${target.name} with a ${
        this.weapons[Math.floor(Math.random() * Math.floor(this.weapons.length))]
      } for ${damage} health ${plural}!`
    );
    if (target.healthPoints <= 0) {
      console.log(`${target.name} has sustained mortal damage!`);
      console.log(target.destroy());
    } else {
      console.log(`${target.name} lives to fight on!`);
    }
  };
  
  specialAttack(target) {
    let damage = Math.floor(Math.random() * Math.floor(this.healthPoints / 1.5));
    let plural = "points";
    if (damage === 1) {
      plural = "point";
    }
    target.healthPoints -= damage;
    console.log(
      `${this.name} hits ${target.name} with a ${
        this.superWeapon
      } for ${damage} health ${plural}!`
    );
    if (target.healthPoints <= 0) {
      console.log(`${target.name} has sustained mortal damage!`);
      console.log(target.destroy());
    } else {
      console.log(`${target.name} lives to fight on!`);
    }
  };
}


  
  
  
  // Outside of this exercise, I might have created a "BossHumanoid" constructor, and collapsed Villain and Hero into that. Since they're two different constructors, however, I repeat myself:

  
//   thePenguin.normalAttack(Batman);
//   Batman.specialAttack(thePenguin);
  
  console.log("\n");
  
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  // I created a Villain object and Hero object above. Now they will fight to the death:
  
  function epicBattle(hero, villain) {
    console.log(
      `Here begins the epic battle between ${hero.name} and ${villain.name}!` +
        "\n"
    );
    console.log(
      `Will ${villain.name} prove victorious, or will ${hero.name}'s ${
        hero.superWeapon
      } carry the day? Let's find out!` + "\n"
    );
    let winner = "";
    while (!winner) {
      let attacker = "";
      let defender = "";
      let attDef = Math.floor(Math.random() * Math.floor(2));
      if (attDef === 0) {
        attacker = hero;
        defender = villain;
      } else {
        attacker = villain;
        defender = hero;
      }
      let normSpec = Math.floor(Math.random() * Math.floor(2));
      if (normSpec === 0) {
        attacker.normalAttack(defender);
      } else {
        attacker.specialAttack(defender);
      }
      if (defender.healthPoints <= 0) {
        winner = attacker;
      }
    }
    if (winner === hero) {
      console.log(
        `${hero.name} has defeated the mighty ${villain.name}! May ${
          hero.name
        } live in glory forever!`
      );
    } else {
      console.log(
        `Alas, ${villain.name} has slain the venerable ${hero.name}! ${
          villain.name
        }'s victory will be written in blood in the Evil Book!`
      );
    }
  }
  

  




  
    
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  const thePenguin = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 5,
      height: 1,
    },
    healthPoints: 100,
    name: 'Penguin',
    team: 'Weird Loner',
    weapons: [
      'Umbrella',
      'Dynamite',
    ],
    language: 'English',
    taunt: "You likely will not live to regret your decision.",
    secretWeapon: "Poisoned Ceremonial Dagger"
  })
  
  const Batman = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 8,
    },
    healthPoints: 125,
    name: 'Batman',
    team: 'Gotham',
    weapons: [
      'Fist',
      'Hero Belt',
    ],
    language: 'English',
    taunt: "You likely will not live to regret your decision.",
    secretWeapon: "Poisoned Ceremonial Dagger"
  })
  
  console.log(mage)
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  

  
  
 
  epicBattle(thePenguin, Batman);