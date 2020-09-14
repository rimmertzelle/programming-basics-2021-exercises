window.addEventListener("load", init);

let numberOfClicks = 0;
let medal = 0;

function init() {
  let button = document.getElementById("clicker");
  button.addEventListener("click", buttonHandler);
}

function buttonHandler(event) {
  numberOfClicks++;
  switch (numberOfClicks) {
    case 10:
      medal = "🍓";
      break;
    case 100:
      medal = "🌽";
      break;
    case 250:
      medal = "🧱";
      break;
    case 500:
      medal = "🐴";
      break;
    case 1000:
      medal = "🏆";
      break;
    default:
      medal = "😀"
      break;
  }
  writeToTheDom();
}

function writeToTheDom() {
  console.log('writing');
  if(medal != '😀'){
    let ref = document.getElementById('prices');
    let li = document.createElement('li');
    li.innerHTML = medal;
    ref.append(li);
  }
  
}
