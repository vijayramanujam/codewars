function declareWinner(fighter1, fighter2, firstAttacker)  
 {
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

  while  
 (attacker.health > 0 && defender.health > 0) {
    defender.health -= attacker.damagePerAttack;
    if (defender.health <= 0) {
      return attacker.name;
    }
    [attacker, defender] = [defender, attacker];
  }

  return defender.name;
}
