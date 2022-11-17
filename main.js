const rightAnswersToTheArena = ['arena', 'psg arena', 'psg', 'visit psg', 'visit psg arena']
const rightAnswersForActivities = ['activity', 'activities', 'some activities', 'visit eiffel tower', 'tower', 'eiffel', 'some activities', 'some activity']
const rightAnswersForCity = ['paris', 'view paris', 'view in paris', 'city paris', 'paris city', 'city', 'house']
const areTheAnswerCorrect = true;

function getMyGame() {
    while (rightAnswersToTheArena != areTheAnswerCorrect) {
        const questionOne = prompt("Helloooo, my name is Sergio Ramos. Facts about me: I play currently in Paris Saint Germain and played before in Real Madrid over 10 years. Of course you know me if you like soccer. What would you like to do today? The three choices are: View in Paris, visit PSG arena or some activities?");
        if (rightAnswersToTheArena.includes(questionOne.toLowerCase())) {
            alert ("Hehe OKAY. You choose to go visit the arena? Too bad... it is closed for the day... Unlucky. You should choose the other choises next time :)))");
            alert('Unfortunately this end here... good to talk with you my friend! Have a good day :D Press OK to end please!');
            alert('Hahahahah gotcha, you really thought it was ending there? No my friend, it is to soon. I think we should go for a walk!');
            alert('Suddenly, a man walked fast behind us and started to look differently at us, he look suspiciously... something is wrong ramos said.');
            alert('The thief just jumped in front of us and acted agressively, he starts arguing with ramos and took his wallet.... The thief said he is sorry and just ran from the scene. The police and ambulance took their time before coming. Ramos was in shock and furious!');
            alert('Sergio ramos: We should go home now.... I need help. Thanks for your time but it ends here');
            alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D');
            break;
        }
        for (const result of rightAnswersForActivities) {
            if (result == questionOne.toLowerCase()) {
                    alert ("Let see, the first thing we will do is to wait for a taxi. While taking off I recommend to visit the Eiffel tower first because it is one of the first thing tourists do when visiting France. After that we could maybe do something else. Lets get in to this restaurant!");
                    alert(" 'Waiting for the food in the restaurant....' ")
                    getTheSecondQuestionForGame()
                    break;
            }
        }  
        for (const result of rightAnswersForCity) {
            if (result == questionOne.toLowerCase()) {
                    alert ("Nice! Lets see, I will be your tour guide of course. The thing is.... sometimes it is dangerous to walk down the streets because some of the neighborhoods could be scary for the tourists, one neighborhood to avoid is Pigalle. So, I recommend we do something else...");
                    getTheThirdQuestionForGame()
                    break;
            }
        }
    }
}

function getTheSecondQuestionForGame() {

const answerForGoHome = ['home', 'go home', 'want to go home']
const answerForTheChef = ['go to chef', 'chef', 'restaurant chef', 'manager', 'go to manager', 'go manager', 'thank manager', 'thank the manager', 'thank the restaurant manager']
const questionsCorrect = false;

    while (answerForGoHome != questionsCorrect) {
        const questionTwo = prompt("The food was delicious! I feel a little bit tired but you decide, do you want to go home or to thank the restaurant manager?");
        for (const result of answerForGoHome) {
            if (result == questionTwo.toLowerCase()) {
                    alert("Okay, lets go home then...");
                    alert ('We will arrive in 10 minutes, have patience :)))');
                    EndGame1()
                    questionsCorrect = true;
                    break;
            }
        }
        for (const result of answerForTheChef) {
            if (result == questionTwo.toLowerCase()) {
                alert('Yeah, that was I thought!, lets go then! We went in to the kitchen and it was a mess in there, their were knifes, plates and glasses everywhere! ')
                alert('oOoOOoooOoOOhhhhh noooooo, ramos stepped on a knife!!!!!!!!');
                strictEndGame()
                questionsCorrect = true;
                break;
            }
        }
    }
}


function getTheThirdQuestionForGame() {
    const answerForMansion = ['mansion', 'go to mansion', 'lets go to mansion', 'house', 'your mansion', 'lets go to your house']
    const answerForMuseum = ['museum', 'visit museum', 'go to museum', 'lets go to museum', 'go museum']
    const isQuestionsCorrectly = false;

    while (answerForMansion != isQuestionsCorrectly) {
        const questionThree = prompt("Would you like to go see my mansion or go to museum?")
            if (answerForMansion.includes(questionThree.toLowerCase())) {
                alert('Goooooood CHOICE! Lets see if you can handle my cars or not.....');
                alert('30 minutes later.....');
                alert('YOU CRASHED MY CAR! YOU ARE INJURED!');
                secondFurtherGameWithHelp()
                isQuestionsCorrectly = true;
                break;
            }
            for (const result of answerForMuseum) {
                if (result == questionThree.toLowerCase()) {
                    alert('Okay, boring. Lets go let us take the car now.');
                    alert(" 'It took a while for ramos to pick one of the museum, he was unsure but let us see what will happens next step.' ");
                    thirdToFurtherGame()
                    isQuestionsCorrectly = true;
                    break;
            }
        }
    }
}

function secondFurtherGameWithHelp() {
    const answerForCallPolice = ['call police', 'police', 'officer', 'lets call the police']
    const answerForCallAmbulance = ['ambulance', 'call ambulance', 'lets call ambulance']
    const questionCorrect = false;

    while (answerForCallPolice != questionCorrect) {
        const questionForHelp = prompt('Oh, it is a panic situation. Should we call the police or the ambulance?');
        if (answerForCallPolice.includes(questionForHelp.toLowerCase())) {
            alert('What? No, in this situation we need to call the ambulance not the police...');
            alert('We had luck! One of the cars that saw the crash was a doctor. He got of his car and took his medical bag and started to help him. Wow, it was a dramatic day for an end.... we had fun until this happened.');
            alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D');
            questionCorrect = true;
            break;
            }
        for (const result of answerForCallAmbulance) {
            if (result == questionForHelp.toLowerCase()) {
                alert('YES, good job. You answered correctly lets call them!');
                alert('They are not answering.... I Will try to call them again');
                alert('Hello, my friend just crashed the car and we need help immediately.. when will you arrive?');
                alert(" 'AMBULANCE: We will arrive in soon. Just wait!' ");
                getAmbulanceToArrive()
                questionCorrect = true;
                break;

            }
        }
    }
}

function getAmbulanceToArrive() {

    const positive = ['yes', 'yes ofc', 'yeah', 'absoulety', 'definitely']
    const negative = ['no', 'nesh', 'absolutely not', 'big no']
    const answersYesOrNo = false;

    while (positive != answersYesOrNo) {
        const questionYesIfNo = prompt('What would you do in this situation? Should we wait for the ambulance to arrive, yes or no?');
        if (positive.includes(questionYesIfNo.toLowerCase())) {
            alert('OK, we will wait then.');
            gotHelpFromAmbulanceToEndGame()
            answersYesOrNo = true;
            break;
            }
        for (const result of negative) {
            if (result == questionYesIfNo.toLowerCase()) {
                alert('Oh... to bad. You answered no...')
                alert('We need to get out of here, while we leave there are other people that helps him. We should get our things and move along because every story has an end.');
                alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D');
                answersYesOrNo = true;
                break;
            }
        }
    }
}


function EndGame1() {
    alert('Finally we are home now.');
    alert('It was a good time showing you a little bit of Paris, but it has to end for today. I hope you liked it!');
    alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D');
}

 function strictEndGame() {
    alert('It was blood everywhere, Ramos had cut himself really badly. People were running left and right to calm down the situation because they did not know what to do.');
    alert('Suddenly one of the customers started to confront other people for their money. The only good thing was that the ambulance arrived in time.')
    alert(" '20 MINUTES LATER!' ")
    alert('Ramos is taken care right now and he seems to be doing better now. He will not play soccer now for a longer time... its sad. He reached for me and said that he needed to get home now to be taken care of from his wife.')
    alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D');
 }

 function gotHelpFromAmbulanceToEndGame() {
    alert('The ambulance arrived fast enough and did their thing.')
    alert('This has been a crazy day, a lot of things have happened and I think we are done for the day. It has been fun but the day did not end so well, but you have to stay positive and make the best of it.')
    alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D');
}

function thirdToFurtherGame() {

    const positive = ['yes', 'yes ofc', 'yeah', 'absoulety', 'definitely']
    const negative = ['no', 'nesh', 'absolutely not', 'big no']
    const answersYesOrNo = false;

    while (positive != answersYesOrNo) {
        const questionYesIfNo = prompt('We have spend one hour now in the museum. It is a beautiful day to eat an icecream, should we do it?');
        if (positive.includes(questionYesIfNo.toLowerCase())) {
            alert('This icecream with strawberries was delicious. I am full now... Oh, time has passed quickly. My training starts soon, we need to say good bye now so I can be on time. It has been a fun day hopefully we will meet again soon.');
            alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D')
            answersYesOrNo = true;
            break;
            }
        for (const result of negative) {
            if (result == questionYesIfNo.toLowerCase()) {
                alert('Oh really? You answered no... Too bad, but it was fun at the museum. :)')
                alert('Thanks for this time! Hopefully we will meet again, just press the button down there and you will met me again! :D')
                answersYesOrNo = true;
                break;
            }
        }
    }
}