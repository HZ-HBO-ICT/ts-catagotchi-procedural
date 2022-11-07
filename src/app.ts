const catScreen: HTMLDivElement = document.querySelector('#screen') as HTMLDivElement;

/**
 * Player feeds Catagotchi. Vitals changed according to rules.
 */
function feed(): void {

}

/**
 * Player plays with Catagotchi. Vitals changed according to rules.
 */
function play(): void {

}

/**
 * Player pets the Catagotchi. Vitals changed according to rules.
 */
function pet(): void {

}

/**
 * Poor Catagotchi died.
 * Execute code when Catagotchi's vitals have reach critical level
 */
function catDied(): void {

}

/**
 * Update the state of Catagotchi according to rules
 */
function updateCat(): void {

}

/**
 * Update the screen of the Catagotchi
 * TODO: Complete this function.
 */
function updateScreen(): string {
  // Verify if Catagotchi is still alive, and return appropriate string
  if (!true) {
    return `Catagotchi!<br>
    Status: <br>
    Mood:   <br>
    Energy: <br>
    Hunger: `;
  }
  else {
    return 'Catagotchi Dead!';
  }
}

/**
 * Runs the update functions
 */
function gameTick() {
  updateCat();
  catScreen.innerHTML = updateScreen();

  // Set a timer that calls this function every 1.5 seconds.
  // A better way to do a gameTick will be introduced later in the course.
  setTimeout(() => gameTick(), 1500);
}

/**
 * General setup
 */
window.addEventListener('load', () => gameTick());

document.querySelector('#btn-feed').addEventListener('click', () => feed());
document.querySelector('#btn-play').addEventListener('click', () => play());
document.querySelector('#btn-pet').addEventListener('click', () => pet());
