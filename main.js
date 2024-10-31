class Pokemon {
    constructor(name, health, level, healthBarId, healthTextId) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.level = level;
        this.healthBar = document.getElementById(healthBarId);
        this.healthText = document.getElementById(healthTextId);
    }

    takeDamage(damage) {
        this.currentHealth = Math.max(this.currentHealth - damage, 0);
        this.updateHealthBar();
    }

    updateHealthBar() {
        const healthPercentage = (this.currentHealth / this.maxHealth) * 100;
        this.healthBar.style.width = `${healthPercentage}%`;

        if (healthPercentage > 60) {
            this.healthBar.className = "health";
        } else if (healthPercentage > 30) {
            this.healthBar.className = "health low";
        } else {
            this.healthBar.className = "health critical";
        }
        this.healthText.innerText = `${this.currentHealth} / ${this.maxHealth}`;
    }
}

const pikachu = new Pokemon("Pikachu", 100, 1, "progressbar-character", "health-character");
const charmander = new Pokemon("Charmander", 100, 1, "progressbar-enemy", "health-enemy");

function battle(attacker, defender) {
    const damage = Math.floor(Math.random() * 20) + 5;
    defender.takeDamage(damage);
}

document.getElementById("btn-kick").addEventListener("click", () => {
    battle(pikachu, charmander);
});

document.getElementById("btn-special").addEventListener("click", () => {
    battle(charmander, pikachu);
});
