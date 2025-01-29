var heading = document.getElementById("heading");
var parg = document.getElementById("paragraph");
var par2 = document.getElementById("paragraph-2");
var par3 = document.getElementById("paragraph-3");
var one = document.getElementById("opt1");
var to = document.getElementById("opt2");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");

function play() {
  heading.innerHTML = "Jack the Adventurer";
  heading.style.borderBottom = "2px solid green";
  parg.innerHTML =
    "Once upon a time, there was a young adventurer named Jack who set out on a quest to find the lost city of gold.";
  par2.innerHTML =
    "As Jack traveled through the jungle, he came across a fork in the road. To the left, he saw a path that led to a dark cave. To the right, he saw a path that went up a tall mountain.";
  par3.innerHTML = "Which path will Jack take?";
  one.innerHTML = "A) The dark cave";
  to.innerHTML = "B) The tall mountain";
  btn1.onclick = darkcave;
  btn2.onclick = tallmountain;
}

function darkcave() {
  heading.innerHTML = "Inside the dark cave";
  heading.style.borderBottom = "2px solid black";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack curiously entered the dark cave. He soon came across another fork in the road, with two tunnels leading off in different directions.";
  par3.innerHTML = "Which tunnel will Jack take?";
  one.innerHTML = "A) The Left Tunnel";
  to.innerHTML = "B) The right Tunnel";
  btn1.onclick = lefttunnel;
  btn2.onclick = righttunnel;
}
function lefttunnel() {
  heading.innerHTML = "The left tunnel";
  heading.style.borderBottom = "2px solid black";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack followed the left tunnel, which led him to a vast underground lake. In the middle of the lake, he saw a small island with a mysterious temple on it.";
  par3.innerHTML = "What will Jack do next?";
  one.innerHTML = "A) Swim to the island to explore the temple";
  to.innerHTML =
    "B) Search the perimeter of the lake for another way to reach the temple";
  btn1.onclick = swimtoisland;
  btn2.onclick = goaroundtemple;
}
function swimtoisland() {
  heading.innerHTML = "Death by a trap";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack swam to the island, but as soon as he stepped foot on the island, he triggered a trap that caused the temple to collapse, burying him alive.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function goaroundtemple() {
  heading.innerHTML = "Robbed and killed";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack searched the perimeter of the lake and discovered a narrow path that led to the temple. He made his way to the temple, but as soon as he entered, he was ambushed by a group of thieves who stole all of his supplies and killed him";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function righttunnel() {
  heading.innerHTML = "The right tunnel";
  heading.style.borderBottom = "2px solid black";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack followed the right tunnel, which led him to a large chamber filled with traps and puzzles. Jack had a choice to make.";
  par3.innerHTML = "What will Jack do next?";
  one.innerHTML = "A) Attempt to navigate the traps and solve the puzzles";
  to.innerHTML = "B) Turn back and try another path";
  btn1.onclick = solvepuzles;
  btn2.onclick = anotherpath;
}
function solvepuzles() {
  heading.innerHTML = "Killed by the trap";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack attempted to navigate the traps and solve the puzzles, but he made a fatal mistake and was killed by one of the traps.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function anotherpath() {
  heading.innerHTML = "Found the treasure";
  heading.style.borderBottom = "2px solid rgb(200, 180, 0)";
  heading.style.color = "rgb(255, 215, 0)";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack turned around and decided to try a different path. As he was searching the surrounding area, he stumbled upon a hidden treasure and without hesitation, he gathered it up and brought it back to his home, and lived a rich life";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function tallmountain() {
  heading.innerHTML = "Climbing The tall Mountain";
  heading.style.borderBottom = "2px solid blue";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack began the steep ascent up the tall mountain. Along the way, he encountered many challenges, including treacherous cliffs and unpredictable weather. But he persevered, and eventually reached the summit, where he discovered a breathtaking view of the surrounding jungle.";
  par3.innerHTML = "What will jack do next ?";
  one.innerHTML = "A) Explore the surrounding area";
  to.innerHTML = "B) Climb higher to search for more treasure";
  btn1.onclick = surroundingarea;
  btn2.onclick = climbhigher;
}
function surroundingarea() {
  heading.innerHTML = "The surrounding area";
  heading.style.borderBottom = "2px solid rgb(50, 205, 50)";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack explored the surrounding area, where he discovered a hidden waterfall.";
  par3.innerHTML = "What will jack do next ?";
  one.innerHTML = "A) Take a swim in the pool beneath the waterfall";
  to.innerHTML = "B) Explore the hidden area behind the waterfall";
  btn1.onclick = swimunderneath;
  btn2.onclick = behindwaterfall;
}
function swimunderneath() {
  heading.innerHTML = "Killed by piranhas";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack took a swim in the pool beneath the waterfall, but as he was swimming, he was attacked by a group of piranhas and killed.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function behindwaterfall() {
  heading.innerHTML = "Trapped in laboratory";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Behind the waterfall and found a hidden laboratory filled with advanced technology and scientific experiments. However, as he was exploring, he stumbled upon a booby trap that triggered a lockdown, trapping him inside with no way to escape.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function climbhigher() {
  heading.innerHTML = "The unstable situation";
  heading.style.borderBottom = "2px solid brown";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack climbed higher to search for more technology, but he soon found himself in a dangerous and unstable area. He had a choice to make.";
  par3.innerHTML = "What will jack do next ?";
  one.innerHTML = "A) Climb higher in search of more technology";
  to.innerHTML = "B) Turn back and try another path";
  btn1.onclick = continueclimb;
  btn2.onclick = turnback;
}
function continueclimb() {
  heading.innerHTML = "Fell to death";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack continued the climb, but he soon lost his footing and fell to his death.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function turnback() {
  heading.innerHTML = "The friendly village";
  heading.style.borderBottom = "2px solid brown";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack turned back and tried another path, but he soon found himself lost and running out of supplies. He eventually stumbled upon a small village where he was taken in and nursed back to health.";
  par3.innerHTML = "Jack had two choices";
  one.innerHTML = "A) Stay in the village and start a new life";
  to.innerHTML = "B) Leave the village and search for a way back home";
  btn1.onclick = stay;
  btn2.onclick = leave;
}
function stay() {
  heading.innerHTML = "The respected one";
  heading.style.borderBottom = "2px solid rgb(50, 205, 50)";
  heading.style.color = "rgb(50, 205, 50)";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack stayed in the village and started a new life. He eventually became a respected member of the community and lived a peaceful life.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function leave() {
  heading.innerHTML = "Back home";
  heading.style.borderBottom = "2px solid rgb(139, 0, 0)";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Jack left the village and searched for a way back home. He eventually found his way back, but the journey had taken a toll on him and he passed away shortly after returning.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function play2() {
  heading.innerHTML = "Michael's secret treasure";
  heading.style.borderBottom = "2px solid rgb(50, 205, 50)";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael is a brave adventurer who has heard of a legendary treasure hidden deep within the Enchanted Forest. Michael has set out to find the treasure, but he soon realizes that the journey will not be easy. The forest is filled with dangers and mysteries, and Michael must make choices that will determine his fate.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Take the path on the left.";
  to.innerHTML = "B) Take the path on the right.";
  btn1.onclick = left;
  btn2.onclick = right;
}
function left() {
  heading.innerHTML = "Found Some gems";
  heading.style.borderBottom = "2px solid green";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael comes across a clearing filled with glittering gems. Michael realizes that these gems are worth a fortune and has the option to take as many as he wants, but he gets a little suspicious about the gems and doubts that this may be a trap and someone may be waiting for him if he continues on this path.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Take the gems and continue on the same path";
  to.innerHTML = "B) Take the gems and continue on a different path";
  btn1.onclick = samepath;
  btn2.onclick = diffpath;
}
function samepath() {
  heading.innerHTML = "The robbers";
  heading.style.borderBottom = "2px solid brown";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael takes a few gems and continues on the same path. Later, he comes across a group of bandits who demand that he hand over his gems.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Fight the bandits and protect his gems.";
  to.innerHTML = "B) Give the bandits the gems to avoid a fight.";
  btn1.onclick = fight;
  btn2.onclick = avoid;
}
function fight() {
  heading.innerHTML = "Killed by robbers";
  heading.style.color = "#cc2121";
  heading.style.borderBottom = "2px solid #cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael fought with the bandits to protect his gems but they have weapons and Michael was killed.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function avoid() {
  heading.innerHTML = "The Dragon's Layer";
  heading.style.borderBottom = "2px solid #cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael gave all his gems to the robbers and continued on his journey. He eventually reaches the treasure, but he realizes that it is guarded by a powerful dragon.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Attempt to defeat the dragon and claim the treasure.";
  to.innerHTML = "B) Give up the quest for the treasure and return home.";
  btn1.onclick = fightdragon;
  btn2.onclick = gohome;
}
function fightdragon() {
  heading.innerHTML = "Got the treasure";
  heading.style.borderBottom = "2px solid rgb(200, 180, 0)";
  heading.style.color = "rgb(255, 215, 0)";
  parg.innerHTML = "";
  par2.innerHTML =
    "He puts up a brave fight and eventually defeats the dragon. Michael claims the treasure and is known as the mighty one who killed a dragon and retrieved the treasure.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function gohome() {
  heading.innerHTML = "Went Home";
  heading.style.borderBottom = "2px solid #cc2121";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "He returns home but is filled with regret for giving up on his quest for the treasure. Michael lives the rest of his life wondering what could have been happend.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function diffpath() {
  heading.innerHTML = "The Different Path";
  heading.style.borderBottom = "2px solid orange";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael takes as many gems as he can carry and continues on his journey by a different path. Later, he comes across a dangerous-looking lake that he has to cross.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Swim across the lake despite the danger.";
  to.innerHTML = "B) Return back.";
  btn1.onclick = swim;
  btn2.onclick = returnback;
}
function swim() {
  heading.innerHTML = "The tasty one";
  heading.style.borderBottom = "2px solid #cc2121";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "He tried to swim across the lake but it was full of alligators and they had a delicious lunch.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function returnback() {
  heading.innerHTML = "The safe end";
  heading.style.borderBottom = "2px solid rgb(50, 205, 50)";
  heading.style.color = "rgb(50, 205, 50)";
  parg.innerHTML = "";
  par2.innerHTML =
    "He avoids the danger and decides to go back and forget about the treasure.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function right() {
  heading.innerHTML = "The Mermaid";
  heading.style.borderBottom = "2px solid yellow";
  parg.innerHTML = "";
  par2.innerHTML =
    "He takes the path on the right and comes across a mermaid who warns him of the dangers ahead. She offers to guide him through the forest in exchange for a favor.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Agree to the mermaid's offer.";
  to.innerHTML = "B) Refuse the mermaid's offer and continue on his own.";
  btn1.onclick = agree;
  btn2.onclick = Foff;
}
function agree() {
  heading.innerHTML = "Time for the favour";
  heading.style.borderBottom = "2px solid rgb(50, 205, 50)";
  parg.innerHTML = "";
  par2.innerHTML =
    "The mermaid guides him through the forest, but she eventually demands that he fulfill his end of the bargain. She requires him to retrieve a magical crystal from the bottom of the ocean.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Agree to retrieve the crystal.";
  to.innerHTML =
    "B) Refuse to retrieve the crystal and leave the mermaid behind.";
  btn1.onclick = retrieve;
  btn2.onclick = noretrieve;
}
function retrieve() {
  heading.innerHTML = "The betrayal";
  heading.style.borderBottom = "2px solid #cc2121";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "He retrieves the crystal and returns it to the mermaid, but she betrays him and takes the crystal for herself. He is left stranded in the ocean with no way to return to the surface.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function noretrieve() {
  heading.innerHTML = "The Anger";
  heading.style.borderBottom = "2px solid #cc2121";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "He refuses to bring back her crystal. The mermaid got mad and cursed Michael, causing him to die.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function Foff() {
  heading.innerHTML = "The crutual decision";
  heading.style.borderBottom = "2px solid black";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael left the mermaid behind and continued his journey by himself. Later, he had to make a choice that would determine his fate. There were two paths in front of him. One led to a dark and unknown place, while the other was a dangerous-looking bridge going above a deep void to the other side.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Go to the dark place.";
  to.innerHTML = "B) Cross the bridge.";
  btn1.onclick = darkplace;
  btn2.onclick = bridge;
}
function darkplace() {
  heading.innerHTML = "The Wise man";
  heading.style.borderBottom = "2px solid yellow";
  parg.innerHTML = "";
  par2.innerHTML =
    " Michael went to the dark place. There was a wise, old man sitting there. He told Michael not to go any further.";
  par3.innerHTML = "Michael had two choices :";
  one.innerHTML = "A) Listen to him and go back.";
  to.innerHTML = "B) Ignore him and proceed.";
  btn1.onclick = listen;
  btn2.onclick = ignore;
}
function listen() {
  heading.innerHTML = "The Gift";
  heading.style.borderBottom = "2px solid rgb(200, 180, 0)";
  heading.style.color = "rgb(255, 215, 0)";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael listened to the old man and tried to go back. But, The old man was actually an angel and was just checking if Michael would listen to him. He got so happy and gifted Michael a lot of treasure and guided him to go back home.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function ignore() {
  heading.innerHTML = "The Anger";
  heading.style.borderBottom = "2px solid #cc2121";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    "Michael ignored the old man and proceeded with his journey. But, the old man was not an ordinary man; it was an angel checking if Michael would listen to him. He got so angry and threw Michael into the void.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
function bridge() {
  heading.innerHTML = "The Bridge";
  heading.style.borderBottom = "2px solid #cc2121";
  heading.style.color = "#cc2121";
  parg.innerHTML = "";
  par2.innerHTML =
    " Michael tried to cross the bridge. It was wobbly and looking kind of weak, but Michael still had the courage to cross it. While crossing the bridge, the bridge collapsed, and Michael fell into the void.";
  par3.innerHTML = "";
  one.innerHTML = "--- Refresh the page to go back to main screen ---";
  to.innerHTML = "";
  btn1.style.display = "none";
  btn2.style.display = "none";
}
