console.log('JavaScript is working!')

// 1. Give some nice name
function giveMeSomeNiceName(animal){
    let name = '';
    if (animal == 'cat') {
        name = 'Harm'
    } else if (animal == 'dog') {
        name = 'Henk';
    }
    return name;
}

// 2. Pigs
let pig = '🐷';

function pigs(numberOfPigs){
    let returnSentence = '';
    for (let i = 0; i < numberOfPigs; i++) {
        returnSentence += '🐷';
    }
    return returnSentence + 'Grunt';
}

console.log(pigs(5));

// 3. See bouncing balls
