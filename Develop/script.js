// var age = ["an infant aged ","a toddler aged ","a child aged ","a young adult aged ", "an adult aged ", "a senior aged "];
var profession = ["doctor ","driver ","fisherman ","astronaut ","laborer ","teacher ","farmer ","firefighter ", "painter ", "chef ", "cheerleader ", "photographer ", "chemist ", "waiter ", "judge ", "boxer ", "clown ", "musician ", "student ", "plumber ", "nurse ", "computer programmer "];
var animal = ["squirrel ","cat ","dog ","chicken ","hummingbird ","whale ","turtle ","gecko ","lion ","giraffe ", "armadillo ", "pig ", "rabbit ", "duck ", "snake ", "koala ", "ostrich ", "fox ", "deer ", "hamster ", "seal ", "quail ", "porcupine", "rhino ", "elephant ", "gorilla ", "skunk ", "octopus ", "crab ", "kangaroo ", "sloth ", "jellyfish "];
var plant = ["and palm tree ","and venus fly trap ","and sunflower ","and pumpkin ","and rose ","and cactus ","and kelp ","and fern ","and ivy ", "and aloe vera ", "and oak tree ", "and "];
var setting = ["in a treetop ","inside a cave ","inside a tunnel ","in the dessert ","underwater ","in outerspace ","in a forest ","in a classroom ","in a volcano ","on an island "];
var weather = ["in the rain ","in the snow ","during a heat wave ","in gusty winds ","in fog ", "in a tornado ", "in a lightning storm ", "in a rainbow "];
var time = ["in the morning ","at noon ","in the evening ","at midnight "];


var generateBtn = document.querySelector("#generate");
var promptText = document.querySelector("#prompt");

function writePrompt() {
  var possibles = []

  // var ageTrue = confirm("Click 'OK' to include age");
  var professionTrue = confirm("Click 'OK' to include profession");
  var animalTrue = confirm("Click 'OK' to include animal");
  var plantTrue = confirm("Click 'OK' to include plant");
  var settingTrue = confirm("Click 'OK' to include setting");
  var weatherTrue = confirm("Click 'OK' to include weather");
  var timeTrue = confirm("Click 'OK' to include time");
  

  // if (ageTrue) {possibles.push(age)};
  if (professionTrue) {possibles.push(profession)};
  if (animalTrue) {possibles.push(animal)};
  if (plantTrue) {possibles.push(plant)};
  if (settingTrue) {possibles.push(setting)};
  if (weatherTrue) {possibles.push(weather)};
  if (timeTrue) {possibles.push(time)};
  
  
  
  var prompt = "";

  
  for(let i = 0; i < possibles.length; i++){
    let rand = Math.floor(Math.random() * possibles[i].length);
      prompt += possibles[i][rand];
  }
  
  console.log(prompt, `prompt length: ${prompt.length}`);
  promptText.value = prompt;
}

generateBtn.addEventListener("click", writePrompt);

