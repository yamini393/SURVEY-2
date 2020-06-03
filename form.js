class Form {

    constructor() {
        this.name = createInput("Name");
        this.email = createInput("email")
        this.gender = createInput("gender")
        this.age = createInput("age")
        this.button = createButton('Submit');
        
        this.text = createElement('h1',  
        "There are going to be a series of question based on sports"
        );
        this.question1 = createElement('h3', "1.Do you like sport activities?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', " 2.Which is your favorite sport ?");
        this.answer2 = createInput("answer")
        this.question3 = createElement('h3', "3. Do you prefer indoor sports or outdoor sports activities?");
        this.answer3 = createInput("answer")
        this.question4 = createElement('h3', " 4.How much time do you spend on sports activities every week?");
        this.answer4 = createInput("answer")
        this.question5 = createElement('h3', " 5.Which of the following sports activities are you interested in?");
        this.answer5 = createInput("answer")
        this.question6 = createElement('h3', " 6.Which sport are u most likely to spend your time on ?");
        this.answer6 = createInput("answer")
        this.question7 = createElement('h3', " 7.Do you think your sports teachers are qualified and teaching you that particular sport the way it is meant to be ?");
        this.answer7 = createInput("answer")
        this.question8 = createElement('h3', " 8.Which of these sports do you think should be allowed to play in school with proper equipment ?");
        this.answer8 = createInput("answer")
        this.question9 = createElement('h3', "9.Have you ever taken part in a match/game as school representative in the past ?");
        this.radio9 = createRadio('h3');
        this.radio9.option('yes');
        this.radio9.option('No');
        this.question10 = createElement('h3', "10.Would you bare to take all the hardships in swimming Olympics to win the Gold Medal for your country?")
        this.answer10 = createInput("answer")
    }


    display() {
        this.name.position(670, 20)
        this.email.position(670,60)
        this.gender.position(670,100)
        this.age.position(670,140)
        this.button.position(700, 1600)
        
        this.text.position(600, 255)
        this.question1.position(500, 360)
        this.radio.position(500, 420)
        this.question2.position(500, 450)
        this.answer2.position(500, 510)
        this.question3.position(500, 540)
        this.answer3.position(500, 600)
        this.question4.position(500, 660)
        this.answer4.position(500, 740) 
        this.question5.position(500, 840)
        this.answer5.position(500, 900)
        this.question6.position(500, 960)
        this.answer6.position(500, 1020)
        this.question7.position(500, 1080)
        this.answer7.position(500, 1160)
        this.question8.position(500, 1200)
        this.answer8.position(500, 1285)
        this.question9.position(500, 1320)
        this.radio9.position(500, 1380)
        this.question10.position(500, 1440)
        this.answer10.position(500, 1555)

        this.button.mousePressed( () => {
            user.name = this.name.value();
            user.email = this.email.value();
            user.gender = this.gender.value();
            user.age = this.age.value()
            user.q1 = this.radio.value();
            user.q2 = this.answer2.value();
            user.q3 = this.answer3.value();
            user.q4 = this.answer4.value();
            user.q5 = this.answer5.value();
            user.q6 = this.answer6.value();
            user.q7 = this.answer7.value();
            user.q8 = this.answer8.value();
            user.q9 = this.radio9.value();
            user.q10 = this.answer10.value();
            peopleCount += 1;
            user.index = peopleCount;            
            user.updateCount(peopleCount);
            user.update();
        });

    }
}