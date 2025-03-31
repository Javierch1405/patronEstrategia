import { Queen } from './Queen.js';
import { King } from './King.js';
import { Troll } from './Troll.js';
import { Knight } from './Knight.js';
import { Walk } from './Walk.js';
import { Run } from './Run.js';
import { Sword } from './Sword.js';
import { Knife } from './Knife.js';

const rey = new King(new Sword(), new Run());
console.log(rey.display());
console.log(rey.performWeapon());
console.log(rey.performMove());

const reyna = new Queen(new Sword(), new Run());
console.log(reyna.display());
console.log(reyna.performWeapon());
console.log(reyna.performMove());
console.log("Ejemplo de Duck Simulator");

rey.setMoveBehavior(new Walk());
rey.setWeaponBehavior(new Knife());

console.log("\nDespués de cambiar comportamientos del rey:");
console.log(reyna.performWeapon());
console.log(reyna.performMove());
