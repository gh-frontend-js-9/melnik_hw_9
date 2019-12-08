class Tamagochi {

  constructor(type){
        this.type = type;
    }

  food;clean;happiness;health;socialization;money;interval;timer = 0;

   timerInterval = setInterval(() => {
       this.timer += 1;
   }, 1000);

   checkIfLose(){
       if (this.food <= 0 || this.clean <= 0 || this.happiness <= 0 || this.health <= 0 || this.socialization <= 0 || this.money <= 0 ){
           clearInterval(this.interval)
           clearInterval(this.timerInterval)
           clearInterval(this.upgrade_interval)
           this.food = '0';
           this.clean = '0';
           this.happiness = '0';
           this.health = '0';
           this.socialization = '0';
           this.money = '0';
           this.updateStats();
           alert('Game Over, your time:'+this.timer+"s")
           Melnik = undefined;
       }
   }

   getRandomNumber(min, max) {
     let rand = min - 0.5 + Math.random() * (max - min + 1);
     return Math.round(rand);
   }

    initStats(){
      if (this.type === "pug") {
        this.maxPoints = 100;
      }
      else if (this.type === "cat" || this.type === "ninja") {
        this.maxPoints = 70;
      }

      this.upgrade_interval = setInterval(() => {
            let random_int = this.getRandomNumber(1,7);
            if(random_int === 1){
                this.food += this.getRandomNumber(10,51);
            }
            else if(random_int === 2){
                this.clean += this.getRandomNumber(10,51);
            }
            else if(random_int === 3){
                this.happiness += this.getRandomNumber(10,51);
            }
            else if(random_int === 4){
                this.health += this.getRandomNumber(10,51);
            }
            else if(random_int === 5){
                this.socialization += this.getRandomNumber(10,51);
            }
            else if(random_int === 6){
                this.money += this.getRandomNumber(10,51);
            }
            this.number_bigger_than_max()
            this.updateStats();
        }, 60000);

        this.food = this.getRandomNumber(50,this.maxPoints);
        this.clean = this.getRandomNumber(50,this.maxPoints);
        this.happiness = this.getRandomNumber(50,this.maxPoints);
        this.health = this.getRandomNumber(50,this.maxPoints);
        this.socialization = this.getRandomNumber(50,this.maxPoints);
        this.money = this.getRandomNumber(50,this.maxPoints);

        this.updateStats();

        switch (this.type) {
          case "pug":
          this.interval = setInterval(() => {
              this.food -= 5;
              this.clean -= 5;
              this.happiness -= 5;
              this.health -= 5;
              this.socialization -= 5;
              this.money -= 5;
              this.checkIfLose()
              this.updateStats();
          }, 5000);
            break;
          case "cat":
          this.interval = setInterval(() => {
              this.food -= 3;
              this.clean -= 3;
              this.happiness -= 3;
              this.health -= 3;
              this.socialization -= 3;
              this.money -= 3;
              this.checkIfLose()
              this.updateStats();
          }, 5000);
            break;
          case "ninja":
          this.interval = setInterval(() => {
              this.food -= 7;
              this.clean -= 7;
              this.happiness -= 7;
              this.health -= 7;
              this.socialization -= 7;
              this.money -= 7;
              this.checkIfLose()
              this.updateStats();
          }, 5000);
            break;
        }
      }

        updateStats(){
            document.getElementById('food').innerHTML = this.food; document.getElementById('foodB').value = this.food;
            document.getElementById('clean').innerHTML = this.clean; document.getElementById('cleanB').value = this.clean;
            document.getElementById('happiness').innerHTML = this.happiness; document.getElementById('happinessB').value = this.happiness;
            document.getElementById('health').innerHTML = this.health; document.getElementById('healthB').value = this.health;
            document.getElementById('socialization').innerHTML = this.socialization; document.getElementById('socializationB').value = this.socialization;
            document.getElementById('money').innerHTML = this.money; document.getElementById('moneyB').value = this.money;
        }


        number_bigger_than_max(){
        if (this.type != 'Ninja'){
            if (this.food > this.maxPoints){
                this.food = this.maxPoints - 1;
            }
            else if (this.clean > this.maxPoints){
                this.clean = this.maxPoints - 1;
            }
            else if (this.happiness > this.maxPoints){
                this.happiness = this.maxPoints - 1;
            }
            else if (this.health > this.maxPoints){
                this.health = this.maxPoints - 1;
            }
            else if (this.socialization > this.maxPoints){
                this.socialization = this.maxPoints - 1;
            }
            else if (this.money > this.maxPoints){
                this.money = this.maxPoints - 1;
            }
        }
}

    eat() {
        this.food += 30;
        this.clean -= 20;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    wash() {
        this.clean += 40;
        this.happiness -= 20;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    run() {
        this.happiness += 15;
        this.food -= 10;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    visitDoctor() {
        this.health += 30;
        this.money -= 20;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    goToBar() {
        this.socialization += 40;
        this.food += 10;
        this.money -= 20;
        this.health -= 10;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    goToWork() {
        this.money += 50;
        this.food -= 10;
        this.health -= 10;
        this.socialization -= 20;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    buyFood() {
        this.food += 20;
        this.money -= 20;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }

    startBusiness() {
        this.money += 100;
        this.happiness += 100;
        this.health -= 100;
        this.socialization -= 20;
        this.number_bigger_than_max()
        this.updateStats();
        this.checkIfLose()
    }


}
var Melnik = '';
function setLevel(str) {
  var lvl = str;
  document.getElementById('chooseLevel').style.display = "none";
  Melnik = new Tamagochi(lvl);
}
