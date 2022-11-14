function getMyGame() {
    const rightAnswersToTheArena = ['arena', 'psg arena', 'psg', 'visit psg', 'visit psg arena']
    const rightAnswersForActivities = ['activity', 'activities', 'bowling', 'iceskating', 'swimming', 'visit museum', 'restaurants', 'visit eiffel tower', 'tower', 'eiffel']
    const rightAnswersForCity = ['paris', 'view paris', 'view in paris', 'city paris', 'paris city', 'city', 'house']
    const areTheAnswerCorrect = false;

    while (rightAnswersToTheArena != areTheAnswerCorrect) {
        const questionOne = prompt("Helloooo, my name is Sergio Ramos. Facts about me: I play currently in Paris Saint Germain and played before in Real Madrid over 10 years. Of course you know me if you like soccer. What would you like to do today? To see the amazing view in Paris, visit psg arena or maybe do some activities?");
        if (rightAnswersToTheArena.includes(questionOne.toLowerCase())) {
            alert ("Hehe OKAY. You choose to go visit the arena? Too bad... it is closed for the day... Unlucky. You should choose the other choises next time :)))");
            alert('Unfortunately this end here... good to talk with you my friend! Have a good day :D Press OK to end please!')
            prompt('Hahahahah gotcha, you really thought it was ending there? No my friend, it is to soon. I think we should go for fishing, yes or no?');
            areTheAnswerCorrect = true;
            getFurtherGame()
            break;
        }

        for (const result of rightAnswersForActivities) {
            if (result == questionOne.toLowerCase()) {
                    prompt ("Let see, the first thing we will do is to wait for a taxi. While taking off I recommend to visit the Eiffel tower first because it is one of the first thing tourists do when visiting France. After that we could maybe do something else. Lets get in to this restaurant. What do you want to order?");
                    getTheSecondQuestion()
                    break;
            }
        }  
        for (const result of rightAnswersForCity) {
            if (result == questionOne.toLowerCase()) {
                    prompt ("Nice! Lets see, I will be your tour guide of course. The thing is.... sometimes it is dangerous to walk down the streets because some of the neighborhoods could be scary for the tourists, one neighborhood to avoid is Pigalle. So, I recommend we do something else... would you like to go see my house or go for sightseeing?");
                    areTheAnswerCorrect = true;
                    getTheThirdQuestion()
                    break;
            }
        }
    }
}


function getTheSecondQuestion() {

const answerForRestaurant = ['spaghetti', 'pizza', 'hamburger', 'seafood', 'shrimps', 'fish', 'meat', 'entrecote', 'beef', 'fries', 'potatoes']
const questionsCorrect = false;

    while (answerForRestaurant != questionsCorrect) {
        const questionTwo = prompt("nooooooodododododod")
        for (const result of answerForRestaurant) {
            if (result == questionTwo.toLowerCase()) {
                    prompt("Good choice, I will test the shrimps today, they are really good.");
                    questionsCorrect = true;
                    break;
            } 
        }
    }
}



/*function getTheThirdQuestion {
    
}*/


function getFurtherGame() {
    const questionPositive = ['yes', 'hell yeah', 'absolutely', 'of course', 'yeah']
    const questionNegative = ['absolutely not', 'hell no', 'not today', 'no', 'nooo']
    const isAnswerCorrect = false; 
    
    while (!isAnswerCorrect) {
        for (const result of questionPositive)
            if (result == questionPositive.toLowerCase) {
                prompt('Good, ')
                isAnswerCorrect = true;
                break;
            }
        for (const result of questionNegative) {
            if (result == questionNegative.toLowerCase) {
                prompt('Thanks for you time, best regards Sr.ramos')
                isAnswerCorrect = true;
                break;
            }
        }
    }
}
 
    




/*
console.log(rightAnswers);

function getRightFromQuestions() {
    for (const answers of rightAnswers)

    if (answers.toUpperCase() === rightAnswers.toUpperCase()) {
        console.log(rightAnswers + "finns!")
        return;
    }
    alert('could not get the correct answer')
}

console.log(getRightFromQuestions)*/



//Om jag vill ha med detta som input fält eller ej.

/*if (paris = rightAnswers{

} else (arena = rightAnswers) {
    capacity: 40 000,
    fact: 'The capacity in Parc des Princes like you can see is aroud 40 thousand, it is pretty much',
    club: 'PSG is one of the richest clubs in the world.'
}

let visitArena = {

}

let factsAboutParis = {
    team: 'Paris Saint Germain plays here and are on of the best clubs ever in the world hehe.',
    populatiion: 'There are around 2 million citizens in Paris and it is called the love city in the world',

}
document.write('factsAboutParis')*/