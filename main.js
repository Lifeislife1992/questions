var note = 0;
var questions = ["Вспушит она свои бока<br>Свои четыре уголка<br>И тебя, как ночь настанет<br>Все равно к себе притянет.",
    "Для предсказаний сей предмет незаменим<br>Волшебники все пользуются им<br>Он круглый и прозрачный, как стекло<br>Увидеть будущее в нем совсем легко.",
    "Она красива и мила<br>А имя ей от слова 'зола'.",
    "Если б не было его<br>Не сказал бы ничего.", "Загадки закончились, нажмите на кнопку 'Посмотреть рзультат'"];
var answers = ["Подушка", "Шар", "Золушка", "Язык"];
var i = 0;
var someQuestion = questions[i];
var innerQuestion = document.getElementById("question");

function firstQuestion(){
    innerQuestion.innerHTML = someQuestion;
}


function testQestions(){
    while (i<4){
        var innerAnswer = document.getElementById("answer").value;
        var correctAnswer = answers[i];
        if (innerAnswer == ""){
            alert("Введите ответ, поле пустое!");
            someQuestion = questions[i];
            innerQuestion.innerHTML = someQuestion;
        }
        else if (innerAnswer == correctAnswer){
            alert("Правильно!");
            note++;
            i++;
        }
        else {
            alert("К сожалению Вы ответили не правильно!");
            i++;
        }
        var someQuestion = questions[i];
        innerQuestion.innerHTML = someQuestion;
        var resetAnswer = document.getElementById("answer");
        resetAnswer.value = "";
        break;
    }
}

function result(){
    if(i == 4){
        innerQuestion.innerHTML = "Ваш результат: " + note + " из 4 балов!";
    }
    else{
        alert("Посмотреть результат можно только после ответа на все загадки.")
    }
}