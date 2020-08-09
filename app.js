function check(){
    var score = 0;
    var right_ans1 = document.getElementById("q1_a1");
    var Q1_ans2 = document.getElementById("q1_a2");
    var Q1_ans3 = document.getElementById("q1_a3");
    if(right_ans1.checked == true){
        score++;
        alert("Q1 right answer");
    }
    else{
        alert("Q1 wrong answer");
    }


    var right_ans2 = document.getElementById("q2_a2");
    var Q2_ans1 = document.getElementById("q2_a1");
    var Q2_ans3 = document.getElementById("q2_a3");
    if(right_ans2.checked == true){
        score++;
        alert("Q2 right answer");
    }
    else{
        alert("Q2 wrong answer");
    }


    
    var right_ans3 = document.getElementById("q3_a2");
    var Q3_ans1 = document.getElementById("q3_a1");
    var Q3_ans3 = document.getElementById("q3_a3");
    if(right_ans3.checked == true){
        score++;
        alert("Q3 right answer");
    }
    else{
        alert("Q3 wrong answer");
    }
alert("Your score is "+ score++)       
}