const questions=[{
    'que': 'Hyper Text Markup Language Stand For?',
    'a':"JavaScript",
    'b':"XHTML",
    'c':"CSS",
    'd':"HTML",
    'correct':"d"
},
{
    'que': 'Which language is used for styling web pages?',
    'a':"HTML",
    'b':"JQuery",
    'c': "CSS",
    'd': "XML",
    'correct':"c"
},
{
    'que':" Which is not a JavaScript Framework?",
    'a': "Python Script",
    'b': "JQuery",
    'c':"Django",
    'd': "NodeJS",
    'correct':"c"
},
{
    'que': "Which is used for Connect To Database?",
    'a':"PHP",
    'b': "HTML",
    'c': "JS",
    'd': "All",
    'correct':"a"
},
{
    'que': 'Webdevtrick.com is about..',
    'a':"Web Design",
    'b':"Graphic Design",
    'c':"SEO & Development",
    'd':"HAll",
    'correct':"d"
}
]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset()
    const data =questions[index] 
    console.log(data)
    quesBox.innerText=`${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index];
    const ans= getAnswer()
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}

const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thank you for playing</h3>
    <h2>${right} /  ${total} are correct</h2>
    </div>
    `
}

//inital call
loadQuestion();