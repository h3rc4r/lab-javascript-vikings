// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;}
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        if(damage.length!=0){
        return this.health-=damage
    }
    else{
        
}
}}




// Viking

    class Viking extends Soldier{
       constructor(name,health,strength){
        super(health,strength)
        this.name=name;
    }
    receiveDamage(damage){
        if(damage.length!=0){
            this.health-=damage
            if(this.health>0){

                return this.name +` has received `+ damage +` points of damage`
            }
            else{
                return `${this.name} has died in act of combat`
            }
    }
}
   
            
        
        battleCry(){
            return "Odin Owns You All!"
       } 

    }
    
// Saxon
class Saxon extends Soldier{

    receiveDamage(damage){
        if(damage.length!=0){
            this.health-=damage
            if(this.health>0){

                return `A Saxon has received `+ damage +` points of damage`
            }
            else{
                return `A Saxon has died in combat`
            }
    }
}

}

// War
class War {
  vikingArmy=[];
    saxonArmy=[];
    
   
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let attackingViking = this.vikingArmy[Math.ceil(Math.random()*this.vikingArmy.length-1)];
        let saxonVictim = this.saxonArmy[Math.ceil(Math.random()*this.saxonArmy.length-1)];
        return saxonVictim.receiveDamage(attackingViking.strength)
    }
    saxonAttack(){
        let  vikingVictim= this.vikingArmy[Math.ceil(Math.random()*this.vikingArmy.length-1)];
        let attackingSaxon = this.saxonArmy[Math.ceil(Math.random()*this.saxonArmy.length-1)];
        return vikingVictim.receiveDamage(attackingSaxon.strength)
    }
    showStatus(){}

}
