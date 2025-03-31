export class Character {
    constructor(weaponBehavior, moveBehavior) {
      this.weaponBehavior = weaponBehavior;
      this.moveBehavior = moveBehavior;
    }
  
    performWeapon() {
      return this.weaponBehavior.weapon();
    }
  
    performMove() {
      return this.moveBehavior.move();
    }
  
    setWeaponBehavior(fb) {
      this.weaponBehavior = fb;
    }
  
    setMoveBehavior(qb) {
      this.moveBehavior = qb;
    }
  
    display() {
      return "Soy un personaje genérico.";
    }
  }
  