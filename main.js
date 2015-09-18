
var questions = ["Вспушит она свои бока<br>Свои четыре уголка<br>И тебя, как ночь настанет<br>Все равно к себе притянет.",
    "Для предсказаний сей предмет незаменим<br>Волшебники все пользуются им<br>Он круглый и прозрачный, как стекло<br>Увидеть будущее в нем совсем легко.",
    "Она красива и мила<br>А имя ей от слова 'зола'.",
    "Если б не было его<br>Не сказал бы ничего."];
var answers = ["Подушка", "Шар", "Золушка", "Язык"];
//переменная индекса масива
var i = 0;
//переменная конечной оценки
var note = 0;



function testQestions() {
    //переменная кнопки
    var answerButton = document.getElementById("answer-button");
    //переменныя поля с загадками
    var innerQuestion = document.getElementById("question");
    var someQuestion;
    //переменная ответов
    var innerAnswer = document.getElementById("answer");
    var correctAnswer = answers[i];

    if (answerButton.value === "Начать тест" || answerButton.value === "Пройти тест еще раз"){
        someQuestion = questions[i];
        innerQuestion.innerHTML = someQuestion;
        answerButton.value = "Ответить";
        document.getElementById("answer-block").style.display = "block";
        innerAnswer.value = "";
    }
    else if(answerButton.value === "Ответить" && i < questions.length-1) {
        if (innerAnswer.value === "") {
            alert("Введите ответ, поле пустое!");
        }
        else if (innerAnswer.value == correctAnswer) {
            alert("Правильно!");
            note++;
            i++;
            innerAnswer.value = "";
            someQuestion = questions[i];
            innerQuestion.innerHTML = someQuestion;
        }
        else {
            alert("К сожалению Вы ответили не правильно!");
            i++;
            innerAnswer.value = "";
            someQuestion = questions[i];
            innerQuestion.innerHTML = someQuestion;
        }
    }
    else if(answerButton.value === "Ответить" && i === questions.length-1) {
        if (innerAnswer.value === "") {
            alert("Введите ответ, поле пустое!");
        }
        else if (innerAnswer.value == correctAnswer) {
            alert("Правильно!");
            note++;
            i++;
            innerAnswer.style.display = "none";
            innerQuestion.innerHTML = "Загадки закончились, нажмите кнопку чтобы посмотреть результат";
            answerButton.value = "Показать результат"

        }
        else {
            alert("К сожалению Вы ответили не правильно!");
            i++;
            document.getElementById("answer-block").style.display = "none";
            innerQuestion.innerHTML = "Загадки закончились, нажмите кнопку чтобы посмотреть результат";
            answerButton.value = "Показать результат"
        }
    }
    else if (answerButton.value === "Показать результат"){
        innerQuestion.innerHTML = "Ваш результат: " + note + " из 4 балов!";
        answerButton.value = "Пройти тест еще раз";
        i = 0;
        note = 0;
    }
}

/*
if (i < questions.length) {
    var innerAnswer = document.getElementById("answer").value;
    var correctAnswer
    if (innerAnswer == "") {
        alert("Введите ответ, поле пустое!");

        innerQuestion.innerHTML = someQuestion;
    }
    else if (innerAnswer == correctAnswer) {
        alert("Правильно!");
        note++;
        i++;
    }
    else {
        alert("К сожалению Вы ответили не правильно!");
        i++;
    }

    innerQuestion.innerHTML = someQuestion;

}
else if (i === questions.length) {
    document.getElementById("answer-button").value = "Посмотреть результат";
    innerQuestion.innerHTML = "Ваш результат: " + note + " из 4 балов!";
}
    */