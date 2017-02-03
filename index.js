/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

// Author: Noah Mcaulay (using some code from a sample Amazon Alexa app)
// This Alexa skill returns a random Trump quote from the QUOTES array.

/**
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Trump Quotes Unofficial for a quote"
 *  Alexa: "Here's your Trump quote: ..."
 */

/**
 * App ID for the skill
 */
// REDACTED :)

/**
 * Array containing Trump quotes.
 */
var QUOTES = [
    "An 'extremely credible source' has called my office and told me that Barack Obama’s birth certificate is a fraud",
    "Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!",
    "Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.",
    "You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.",
    "I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.",
    "When Mexico sends its people, they’re not sending the best. They’re not sending you, they’re sending people that have lots of problems and they’re bringing those problems with us. They’re bringing drugs. They’re bring crime. They’re rapists… And some, I assume, are good people.",
    "Our great African-American President hasn’t exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore.",
    "If I were running 'The View', I’d fire Rosie O’Donnell. I mean, I’d look at her right in that fat, ugly face of hers, I’d say ‘Rosie, you’re fired.",
    "All of the women on The Apprentice flirted with me – consciously or unconsciously. That’s to be expected.",
    "One of they key problems today is that politics is such a disgrace. Good people don’t go into government.",
    "The beauty of me is that I’m very rich.",
    "It’s freezing and snowing in New York – we need global warming!",
    "I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.",
    "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.",
    "I have never seen a thin person drinking Diet Coke.",
    "I think the only difference between me and the other candidates is that I’m more honest and my women are more beautiful.",
    "You’re disgusting.",
    "The point is, you can never be too greedy.",
    "Sorry, there is no STAR on the stage tonight!",
    "My Twitter has become so powerful that I can actually make my enemies tell the truth.",
    "My IQ is one of the highest — and you all know it! Please don’t feel so stupid or insecure; it’s not your fault.",
    "I have so many fabulous friends who happen to be gay, but I am a traditionalist.",
    "The other candidates — they went in, they didn’t know the air conditioning didn’t work. They sweated like dogs…How are they gonna beat ISIS? I don’t think it’s gonna happen.",
    "Look at those hands, are they small hands? And, Marco Rubio referred to my hands: ‘If they’re small, something else must be small.’ I guarantee you there’s no problem. I guarantee.",
    "Thanks sweetie. That’s nice.",
    "Lyin’ Ted Cruz just used a picture of Melania from a shoot in his ad. Be careful, Lyin’ Ted, or I will spill the beans on your wife!",
    "I was down there, and I watched our police and our firemen, down on 7-Eleven, down at the World Trade Center, right after it came down.",
    "The only card Hillary Clinton has is the woman’s card. She’s got nothing else to offer and frankly, if Hillary Clinton were a man, I don’t think she’d get 5 percent of the vote. The only thing she’s got going is the woman’s card, and the beautiful thing is, women don’t like her.",
    "Number one, I have great respect for women. I was the one that really broke the glass ceiling on behalf of women, more than anybody in the construction industry.",
    "I’m just thinking to myself right now, we should just cancel the election and just give it to Trump, right?",
    "Black guys counting my money! I hate it. The only kind of people I want counting my money are little short guys that wear yarmulkes every day.",
    "I think the only difference between me and other candidates is that I'm more honest and my women are more beautiful.",
    "I will build a great wall - and nobody builds walls better than me, believe me - and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.",
    "I have a great relationship with the Blacks. I've always had a great relationship with the Blacks.",
    "Laziness is a trait in blacks.",
    "A well-educated black has a tremendous advantage over a well-educated white in terms of the job market. I think sometimes a black may think they don't have an advantage or this and that... if I were starting off today, I would love to be a well-educated black.",
    "I am the least racist person there is. And I think most people that know me would tell you that. I am the least racist.",
    "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
    "Free trade is terrible. Free trade can be wonderful if you have smart people. But we have stupid people.",
    "My father gave me a small loan of a million dollars.",
    "If Hillary Clinton can't satisfy her husband, what makes her think she can satisfy America?",
    "I know the Chinese. I've made a lot of money with the Chinese. I understand the Chinese mind." ,
    "Show me someone without an ego, and I'll show you a loser -- having a healthy ego, or high opinion of yourself, is a real positive in life!",
    "In my life, there are two things I've found I'm very good at: overcoming obstacles and motivating good people to do their best work.",
    "Just tried watching Modern Family -- written by a moron, really boring. Writer has the mind of a very dumb and backward child. Sorry, Danny!",
    "I’ll win the Latino vote because I’ll create jobs. I’ll create jobs and the Latinos will have jobs they didn’t have.",
    "I would bomb the hell out of those oilfields. I wouldn't send many troops because you won't need 'em by the time I'm finished.",
    "He has done nothing for African-Americans. You look at what's gone on with their income levels. You look at what's gone on with their youth. I thought that he would be a great cheerleader for this country. I thought he'd do a fabulous job for the African-American citizens of this country. He has done nothing.",
    "As everybody knows, but the haters & losers refuse to acknowledge, I do not wear a “wig.” My hair may not be perfect, but it’s mine.",
    "She's been with so many guys she makes me look like a baby, OK, with the other side. And, I just don't even find her attractive. That has nothing to do with why I said it though.",
    "One of the problems when you become successful is that jealousy and envy inevitably follow. There are people -- I categorize them as life’s losers -- who get their sense of accomplishment and achievement from trying to stop others. As far as I’m concerned, if they had any real ability, they wouldn’t be fighting me, they’d be doing something constructive themselves.",
    "I don't have a racist bone in my body.",
    "Do you mind if I sit back a little bit because your breath is very bad. It really is.",
    "Love him or hate him, Donald Trump is a man who is certain about what he wants and sets out to get it, no holds barred. Women find his power almost as much of a turn-on as his money.",
    "You know the funny thing, I don't get along with rich people. I get along with the middle class and the poor people better than I get along with the rich people.",
    "China's Communist Party has now publicly praised Obama's reelection. They have never had it so good. Will own America soon.",
    "A nation WITHOUT BORDERS is not a nation at all. We must have a wall. The rule of law matters. Jeb just doesn’t get it.",
    "This very expensive GLOBAL WARMING bullshit has got to stop. Our planet is freezing, record low temps,and our GW scientists are stuck in ice.",
    "No more massive injections. Tiny children are not horses—one vaccine at a time, over time.",
    "Oftentimes when I was sleeping with one of the top women in the world, I would say to myself, thinking about me as a boy from Queens, 'Can you believe what I am getting?'",
    "We have a disaster called the big lie: Obamacare ... And it's going to get worse, because remember, Obamacare really kicks in in '16, 2016. Obama is going to be out playing golf.",
    "There is something on that birth certificate — maybe religion, maybe it says he’s a Muslim, I don’t know. Maybe he doesn’t want that. Or, he may not have one.",
    "I will be the greatest jobs president God ever created.",
    "How stupid are the people of Iowa?",
    "I’ll shake hands. I shake hands with people. But it’s not something I like — look, I’m not a huge fan of Japan, but I love their custom.",
    "We can’t continue to allow China to rape our country",
    "A person who is very flat-chested is very hard to be a 10",
    "I’d like to take some money out of her fatass pockets.",
    "The boob job is terrible. They look like two lightbulbs coming out of her body.",
    "With the proper woman you don’t need Viagra",
    "I made a lot of money and I made it too easily, to the point of boredom.",
    "My life has been about winning. My life has not been about losing.",
    "I want five children, like in my own family, because with five, then I will know that one will be guaranteed to turn out like me.",
    "My marriage, it seemed, was the only area of my life in which I was willing to accept something less than perfection.",
    "They’re remaking ‘Indiana Jones’ without Harrison Ford, you can’t do that. And now they’re making ‘Ghostbusters’ with only women. What’s going on?",
    "Miley don’t let them get you down. They’re all jealous",
    "The concept of shaking hands is absolutely terrible, and statistically I’ve been proven right.",
    "In the second grade I actually gave a teacher a black eye — I punched my music teacher because I didn’t think he knew anything about music and I almost got expelled.",
    "You may get AIDS by kissing.",
    "I’m the worst thing that’s ever happened to ISIS.",
    "Did you read about Starbucks? No more 'Merry Christmas' at Starbucks. No more. Maybe we should boycott Starbucks.",
    "Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States.",
    "Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president?",
    "We have to have a wall. We have to have a border. And in that wall we’re going to have a big fat door where people can come into the country, but they have to come in legally.",
    "I’m owned by the people! I mean, I’m telling you, I’m no angel, but I’m gonna do right by them!",
    "I think apologizing’s a great thing, but you have to be wrong. I will absolutely apologize, sometime in the hopefully distant future, if I’m ever wrong.",
    "You could see there was blood coming out of her eyes. Blood coming out of her… wherever.",
    "NBC News just called it ‘The Great Freeze’ — coldest weather in years. Is our country still spending money on the GLOBAL WARMING HOAX?",
    "The line of ‘Make America great again,’ the phrase, that was mine, I came up with it about a year ago, and I kept using it, and everybody’s using it, they are all loving it. I don’t know I guess I should copyright it, maybe I have copyrighted it.",
    "Why aren’t we smart? We used to be brilliant.",
    "When was the last time you saw a Chevrolet in Tokyo?",
    "I’m not a schmuck.",
    "I do not wear a rug. My hair is one hundred percent mine.",
    "Let me tell you, I’m a really smart guy.",
    "A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.",
    "Some people call me lucky, but I know better.",
    "I love beautiful women, and beautiful women love me. It has to be both ways.",
    "By the way, I have great respect for China. I have many Chinese friends. They live in my buildings all over the place.",
    "Why is Obama playing basketball today? That is why our country is in trouble!",
    "The more you know, the more you realize how much you don’t know.",
    "Buy companies only when you understand what they do.",
    "I mean, we could say politically correct that look doesn’t matter, but the look obviously matters… like you wouldn’t have your job if you weren’t beautiful.",
    "If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?",
    "I have no intention of ever running for president.",
    "What I won't do is take in two hundred thousand Syrians who could be ISIS",
    "We will have so much winning if I get elected that you may get bored with winning.",
    "Stop the EBOLA patients from entering the U.S. Treat them, at the highest level, over there. THE UNITED STATES HAS ENOUGH PROBLEMS!",
    "Every successful person has a very large ego.",
    "When you're a star, they let you do it. You can do anythin. Grab them by the blank. You can do anything."
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./index');

/**
 * TrumpQuote is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Quote = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Quote.prototype = Object.create(AlexaSkill.prototype);
Quote.prototype.constructor = Quote;

Quote.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Quote.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuoteRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Quote.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Quote.prototype.intentHandlers = {
    "GetNewQuoteIntent": function (intent, session, response) {
        handleNewQuoteRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a Trump quote, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new quote from the list and returns to the user.
 */
function handleNewQuoteRequest(response) {
    // Get a random Trump quote from the quote list
    var quoteIndex = Math.floor(Math.random() * QUOTES.length);
    var randomQuote = QUOTES[quoteIndex];

    // Create speech output
    var speechOutput = "Here's your Trump quote: " + randomQuote;
    var cardTitle = "Your Trump quote";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the TrumpQuote skill.
    var quote = new Quote();
    quote.execute(event, context);
};


