class User {
    constructor() {
        this.index = null;
        this.email = null
        this.name = null;
        this.gender = null;
        this.age = null;
        this.q1 = null;
        this.q2 = null;
        this.q3 = null;
        this.q4 = null;
        this.q5 = null;
        this.q6 = null;
        this.q7 = null;
        this.q8 = null;
        this.q9 = null;
        this.q10 = null;


    }

    getCount(){
        var countRef  = database.ref('peopleCount');
        countRef.on("value",function(data){
        peopleCount = data.val();
        console.log(peopleCount);
      })
    }

    updateCount(count) {
        console.log(count);
        database.ref('/').update({
            peopleCount: count
        });
    }

    update(){
        var userIndex = "users/user" + this.index;
        database.ref(userIndex).set({
            input: this.name,
            email: this.email,
            gender: this.gender,
            age:this.age,
            ques1: this.q1,
            ques2: this.q2,
            ques3: this.q3, 
            ques4: this.q3, 
            ques5: this.q3, 
            ques6: this.q3, 
            ques7: this.q3, 
            ques8: this.q3, 
            ques9: this.q3, 
            ques10: this.q3, 
        });
    }
}