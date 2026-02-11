let testActive = false;
let returnToIndex = null;
let wrongCount = 0;
let dialogueStage = 0; 
let dialogueStage2 = 0; 
let dialogueStage3 = 0; 
let prompt1Mistakes = 0; 
let prompt2Mistakes = 0; 
let prompt3Mistakes = 0; 
let birthdayModeA = false; 

const dialogues = [
  {
    text: "Hola! Soy Dora!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Today, we will be rehearsing our lines as..",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "..Greenpeace Girl!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Oh.",
    avatar: "./assets/avatar.png",
    speed: 100
  },
  {
    text: "Rehearsing means to practice a play for a later performance!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Anyway, let's get on with it!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "For our first line..",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "\"Hi! Can I talk to you about saving HAPPY?\"",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Wait, \"HAPPY\" isn't supposed to be there!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Hey, do you know what the correct word is?",
    avatar: "./assets/avatar.png"
  }, //after test win
  {
    text: "Great!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "You're a natural at this!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Now for our next line..",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "\"I just wanted to tell you how you can contribute to BIRTHDAY all around the globe.\"",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Wait, \"BIRTHDAY\" isn't supposed to be there!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Again, do you know what the correct word is?",
    avatar: "./assets/avatar.png"
  }, //after test2 win
  {
    text: "That's amazing!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "You're a natural at this!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Anyway, for our last line..",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "\"Oh, that’s really generous of you! Do you know about our new campaign to save the ASHLEY?\"",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "I don't think \"ASHLEY\" is supposed to be there!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "This one is a bit hard but... do you know the correct word?",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Wow, you did it!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "You helped me fix my scri-",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Wait...",
    avatar: "./assets/avatar.png",
    speed: 80
  },
  {
    text: "Happy..",
    avatar: "./assets/avatar.png",
    speed: 100
  },
  {
    text: "..birthday..",
    avatar: "./assets/avatar.png",
    speed: 100
  },
  {
    text: "..Ashley?",
    avatar: "./assets/avatar.png",
    speed: 100
  },
  {
    text: " ",
    avatar: "./assets/avatar1.png",
    speed: 30
  },
  {
    text: "Happy Birthday Ashley!",
    avatar: "./assets/avatar.png",
    speed: 30,
    birthdayMode: true
  },
  {
    text: "I hope you enjoy your day!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Well, I guess it's time for me to go!",
    avatar: "./assets/avatar.png",
    speed: 30
  },
  {
    text: "Adios, amiga!",
    avatar: "./assets/avatar.png",
    speed: 30,
    slideOut: true
  },

];

const wrongDialogueStages = [
  [
    { text: "Hmm... that doesn't sound right.", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "I don't think that's what we're looking for!", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "That doesn't seem to fit, but you can always try again!", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "I still don’t think that's the word we're looking for!",
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "Did you mishear the sentence?",
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
    [
    { text: "Are you sure you know what you're doing?", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "Hey.", 
      avatar: "./assets/avatar1.png",
      speed: 100 }
  ],
  [
    { text: "You're starting to piss me off.", 
      avatar: "./assets/avatar1.png",
      speed: 60 }
  ],
  [
    { text: "...", 
      avatar: "./assets/avatar1.png",
      speed: 100 }
  ],
  [
    { text: "...", avatar: "./assets/avatar1.png",
      speed: 100 }
  ]
];

const wrongDialogueStages3 = [
  [
    { text: "Hmm... that doesn't sound right.", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "I don't think that's what we're looking for!", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "...", 
      avatar: "./assets/avatar1.png",
      speed: 100 }
  ],
  [
    { text: "I'm done being patient.", 
      avatar: "./assets/avatar1.png",
      speed: 80 }
  ],
];

const wrongDialogueStages2 = [
  [
    { text: "Hmm... that doesn't sound right.", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "I don't think that's what we're looking for!", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "That doesn't sound right.", 
      avatar: "./assets/avatar.png",
      speed: 30 }
  ],
  [
    { text: "Seriously?", 
      avatar: "./assets/avatar1.png",
      speed: 80 }
  ],
  [
    { text: "Do I need to spell it out for you?", 
      avatar: "./assets/avatar1.png",
      speed: 80 }
  ],
  [
    { text: "...", 
      avatar: "./assets/avatar1.png",
      speed: 100 }
  ],
  [
    { text: "...", 
      avatar: "./assets/avatar1.png",
      speed: 100 }
  ]
];

let index = 0;
let typing = false;
let interval = null;
let currentText = "";

const textElement = document.getElementById("dialogue-text");
const avatarElement = document.getElementById("avatar");
const introImage = document.getElementById("dorapic");
const overlay = document.getElementById("blackfade");
const steps = document.getElementById("steps");
const bgm = document.getElementById("bgm");
const jumpscareDiv = document.getElementById("jumpscare");
const jumpscareSound = document.getElementById("jumpscare-sound");
const birthdayBgm = document.getElementById("birthday-bgm");

document.body.style.backgroundImage = "url('./assets/bwbg.jpg')";

document.addEventListener("click", startIntro, { once: true });

function triggerJumpscare(callback) {
  bgm.pause();
  
  const prompt = document.getElementById("test3");
  prompt.style.display = "none";

  jumpscareSound.volume = 1.0;
  jumpscareSound.currentTime = 0;
  
  jumpscareDiv.classList.add("active");
  jumpscareSound.play();
  
  setTimeout(() => {
    jumpscareSound.pause();
    jumpscareSound.currentTime = 0;
  }, 2000);
  
  setTimeout(() => {
    jumpscareDiv.classList.remove("active");
    
    bgm.play();
    
    if (callback) callback();
  }, 2000);
}

function startIntro() {

  overlay.classList.add("fade-out");
  introImage.classList.add("slide-in");

  steps.currentTime = 0;
  steps.loop = true;
  steps.volume = 0.8;
  steps.play();

  introImage.addEventListener("animationend", () => {

    steps.pause();
    steps.currentTime = 0;

    bgm.volume = 0.8;
    bgm.play();

    showDialogue();

  }, { once: true });
}

function typeText(text, shouldJumpscareAtMidpoint = false, jumpscareCallback = null, speed = 30) {
  typing = true;
  currentText = text;
  textElement.textContent = "";
  const avatar = document.getElementById("avatar");
  avatar.style.opacity = 1;   
  let i = 0;

  clearInterval(interval);

  const triggerPoint = Math.floor(text.length * 0.85);

  interval = setInterval(() => {
    textElement.textContent += text[i];

    i++;
    
    if (shouldJumpscareAtMidpoint && i === triggerPoint) {
      clearInterval(interval);
      typing = false;
      
      if (jumpscareCallback) {
        jumpscareCallback();
      }
      return;
    }
    
    if (i >= text.length) {
      clearInterval(interval);
      typing = false;

      if (dialogues[index].text.includes("Hey,")) {
        showWordPrompt();
      } 
      else if (dialogues[index].text.includes("Again")) {
        wrongCount = 0;
        showWordPrompt2();
      }
      else if (dialogues[index].text.includes("This one is a bit hard")) {
        wrongCount = 0;
        showWordPrompt3();
      }
    }
  }, speed);
}

function showDialogue() {
  const current = dialogues[index];
  
  if (current.birthdayMode) {
    birthdayModeA = true; 
    bgm.pause();
    bgm.currentTime = 0; 
    birthdayBgm.volume = 0.8;
    birthdayBgm.currentTime = 0; 
    birthdayBgm.play();
    
    document.body.style.backgroundImage = "url('./assets/birthday.png')";

    document.getElementById("dorapic").style.display = "none";
  }
  
  avatarElement.src = current.avatar;

  if (current.avatar.includes("avatar1.png")) {
    bgm.pause();
  } else if (current.avatar.includes("avatar.png")) {
    if (!current.birthdayMode && !birthdayModeA) {
      bgm.play();
    }
  }
  
  typeText(current.text, false, null, current.speed || 30);
}

document.getElementById("dialogue-box").addEventListener("click", () => {

  if (testActive) return; 

  if (typing) {
    return;
  }

  if (dialogues[index] && dialogues[index].birthdayMode) {
    document.body.style.backgroundImage = "url('./assets/bwbg.jpg')";
    const dorapic = document.getElementById("dorapic");
    dorapic.style.display = "block";
    dorapic.style.left = "20%"; 
    dorapic.classList.remove("slide-in"); 
  }

  if (dialogues[index] && dialogues[index].slideOut) {
    const dorapic = document.getElementById("dorapic");
    const stepsAudio = document.getElementById("steps");
    
    stepsAudio.currentTime = 0;
    stepsAudio.loop = true;
    stepsAudio.volume = 0.8;
    stepsAudio.play();
    
    dorapic.classList.add("slide-out");
    
    dorapic.addEventListener("animationend", () => {
      stepsAudio.pause();
      stepsAudio.currentTime = 0;
    }, { once: true });
  }

  index++;
  if (index < dialogues.length) {
    showDialogue();
  }
});

function showWordPrompt() {
  testActive = true;
  returnToIndex = index;

  const prompt = document.getElementById("test1");
  const sentence = document.getElementById("sentence1");
  const buttons = document.querySelectorAll(".choice1");

  sentence.innerHTML = "Hi! Can I talk to you about saving HAPPY?";

  let choices = ["the Earth", "the Map", "Diego"];
  const correctAnswer = "the Earth";

  if (prompt1Mistakes >= 10) {
    choices = ["the Earth"]; 
    buttons.forEach((btn, i) => {
      btn.style.display = i === 0 ? "inline-block" : "none";
    });
  } 
  else {
    buttons.forEach(btn => btn.style.display = "inline-block");
  }

  buttons.forEach((btn, i) => {
    btn.textContent = choices[i];

    btn.onclick = () => {
      prompt.style.display = "none";
      testActive = false;

      if (choices[i] === correctAnswer) {
        wrongCount = 0; 
        index++;
        showDialogue();
      } 
      else {
        wrongCount++;
        prompt1Mistakes++;
        playWrongDialogue(1);
      }
    };
  });

  prompt.style.display = "block";
}

function showWordPrompt2() {
  testActive = true;
  returnToIndex = index;

  const prompt = document.getElementById("test2");
  const sentence = document.getElementById("sentence2");
  const buttons = document.querySelectorAll(".choice2");

  sentence.innerHTML = "I just wanted to tell you how you can contribute to BIRTHDAY all around the globe.";

  let choices = ["the Chinese", "Greenpeaces", "Pollution"];
  const correctAnswer = "Greenpeaces";

  if (prompt1Mistakes >= 8) {
      if (prompt2Mistakes >= 7) {
      choices = ["Greenpeaces"];
      buttons.forEach((btn, i) => {
        btn.style.display = i === 0 ? "inline-block" : "none";
      });
    } 
    else {
      buttons.forEach(btn => btn.style.display = "inline-block");
    }
  }
  else {
    if (prompt2Mistakes >= 10) {
      choices = ["Greenpeaces"];
      buttons.forEach((btn, i) => {
        btn.style.display = i === 0 ? "inline-block" : "none";
      });
    } 
    else {
      buttons.forEach(btn => btn.style.display = "inline-block");
    }
  }

  buttons.forEach((btn, i) => {
    btn.textContent = choices[i];

    btn.onclick = () => {
      prompt.style.display = "none";
      testActive = false;

      if (choices[i] === correctAnswer) {
        wrongCount = 0; 
        index++;
        showDialogue();
      } 
      else {
        wrongCount++;
        prompt2Mistakes++;
        playWrongDialogue(2);
      }
    };
  });

  prompt.style.display = "block";
}

function showWordPrompt3() {
  testActive = true;
  returnToIndex = index;

  const prompt = document.getElementById("test3");
  const sentence = document.getElementById("sentence3");
  const buttons = document.querySelectorAll(".choice3");

  sentence.innerHTML = "Oh, that's really generous of you! Do you know about our new campaign to save the ASHLEY";

  let choices = ["Elephants", "Men", "Sea Turtles"];
  const correctAnswer = "Sea Turtles";

  let threshold = 10; 

  if (prompt1Mistakes >= 6 || prompt2Mistakes >= 6) {
    threshold = 7;
  }

  if (prompt1Mistakes >= 6 && prompt2Mistakes >= 6) {
    threshold = 5;
  }

  if (prompt3Mistakes >= threshold) {
    choices = ["Sea Turtles"];
    buttons.forEach((btn, i) => {
      btn.style.display = i === 0 ? "inline-block" : "none";
    });
  } 
  else {
    buttons.forEach(btn => btn.style.display = "inline-block");
  }

  buttons.forEach((btn, i) => {
    btn.textContent = choices[i];

    btn.onclick = () => {
      prompt.style.display = "none";
      testActive = false;

      if (choices[i] === correctAnswer) {
        wrongCount = 0; 
        index++;
        showDialogue();
      } 
      else {
        wrongCount++;
        prompt3Mistakes++;
        playWrongDialogue(3);
      }
    };
  });

  prompt.style.display = "block";
}

function playWrongDialogue(returnPrompt) {
  let stage, lines, dialogueArray;
  let shouldJumpscare = false;
  
  if (returnPrompt === 3) {
    if (prompt1Mistakes >= 6 && prompt2Mistakes >= 6) {
      stage = Math.min(dialogueStage3, wrongDialogueStages3.length - 1);
      lines = wrongDialogueStages3[stage];
      dialogueArray = 3;
      if (dialogueStage3 === 3) {
        shouldJumpscare = true;
      }
    } 
    else if (prompt1Mistakes >= 6 || prompt2Mistakes >= 6) {
      stage = Math.min(dialogueStage3, wrongDialogueStages2.length - 1);
      lines = wrongDialogueStages2[stage];
      dialogueArray = 3;
    }
    else {
      stage = Math.min(dialogueStage3, wrongDialogueStages.length - 1);
      lines = wrongDialogueStages[stage];
      dialogueArray = 3;
    }
  }
  else if (returnPrompt === 2 && prompt1Mistakes >= 8) {
    stage = Math.min(dialogueStage2, wrongDialogueStages2.length - 1);
    lines = wrongDialogueStages2[stage];
    dialogueArray = 2;
  } else if (returnPrompt === 2) {
    stage = Math.min(dialogueStage2, wrongDialogueStages.length - 1);
    lines = wrongDialogueStages[stage];
    dialogueArray = 2;
  } else {
    stage = Math.min(dialogueStage, wrongDialogueStages.length - 1);
    lines = wrongDialogueStages[stage];
    dialogueArray = 1;
  }
  
  let i = 0;

  function playNext() {
    let line = lines[i];
    if (line.avatar) {
      avatarElement.src = line.avatar;
      
      if (line.avatar.includes("avatar1.png")) {
        bgm.pause();
      } else if (line.avatar.includes("avatar.png")) {
        bgm.play();
      }
    }

    if (shouldJumpscare && line.text === "I'm done being patient.") {
      typeText(line.text, true, () => {
        triggerJumpscare(() => {
          dialogueStage3++;
          wrongCount = 0;
          index++;
          showDialogue();
        });
      }, line.speed || 30);
    } else {
      typeText(line.text, false, null, line.speed || 30);
    }
    
    i++;

    if (i < lines.length) {
      document.getElementById("dialogue-box")
        .addEventListener("click", playNext, { once: true });
    } 
    else {
      if (!(shouldJumpscare && dialogueStage3 === 3)) {
        if (dialogueArray === 3) {
          dialogueStage3++;
        } else if (dialogueArray === 2) {
          dialogueStage2++; 
        } else {
          dialogueStage++; 
        }
        
        if (returnPrompt === 3) {
          showWordPrompt3();
        } else if (returnPrompt === 2) {
          showWordPrompt2();
        } else {
          showWordPrompt();
        }
      }
    }
  }

  playNext();

}
