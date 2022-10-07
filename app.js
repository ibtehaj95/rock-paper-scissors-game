com_choices = document.querySelectorAll(".game-container .computer-images img");
user_choices = document.querySelectorAll(".game-container .user-images img");
com_score_element = document.querySelector("#com-score-id");
user_score_element = document.getElementById("user-score-id");

user_choices.forEach(function(user_choice){
    user_choice.addEventListener("click", click_function);
});

let com_score = 0; 
let you_score = 0;

// console.log(com_score, you_score);

// console.log(com_choices[0]);
// show_choice(com_choices[0]);

function click_function(event){
    //select user element
    event_path = event.composedPath()
    user_element = event_path[0];
    // console.log(event.target.parentElement);
    // console.log(event.currentTarget.parentElement);
    // console.log(event.composedPath());
    show_choice(user_element);
    //get computer element
    com_element = get_com_choice();
    show_choice(com_element);
    // update score
    update_score(user_element, com_element);
}

function show_choice(element){
    // console.log(element);
    if(element.id.includes("user")){
        user_choices.forEach(function(user_choice){
            if(element.id!=user_choice.id){
                user_choice.style.display = "none";
            }
            });
            setTimeout(function(){
                user_choices.forEach(function(user_choice){
                    user_choice.style.display = "inline";
                    });
            }, 700);
    }
    else if(element.id.includes("com")){
        com_choices.forEach(function(com_choice){
            if(element.id!=com_choice.id){
                com_choice.style.display = "none";
            }
        });
        setTimeout(function(){
            com_choices.forEach(function(com_choice){
                com_choice.style.display = "inline";
                });
        }, 700);
    }
    else{
        console.log("Exception in Show_Choice Function");
    }
}

//Tried writing a more general function. Didn't work

// function show_choice(element){
//     // console.log(element);
//     if(element.id.includes("user")){
//         choices = user_choices;
//     }
//     else if(element.id.includes("com")){
//         choices = com_choices;
//     }
//     else{
//         console.log("Exception in Show_Choice Function");
//     }

//     choices.forEach(function(choice){
//         if(element.id!=choice.id){
//             choice.style.display = "none";
//         }
//         });
//         setTimeout(function(){
//             choices.forEach(function(choice){
//                 choice.style.display = "inline";
//                 });
//         }, 700);
// }

function get_com_choice(){
    rand_int = Math.floor(Math.random()*3);
    element = com_choices[rand_int];
    return element;
}

function update_score(user_element, com_element){
    user = user_element.id.slice(5)
    com = com_element.id.slice(4)
    // console.log(user);
    // console.log(com);
    if(user == "rock"){
        if(com == "paper"){
            com_score++;
        }
        else if(com == "scissor"){
            you_score++;
        }
        //else, it is a tie, no score update
    }

    else if(user == "paper"){
        if(com == "rock"){
            you_score++;
        }
        else if(com == "scissor"){
            com_score++;
        }
        //else, it is a tie, no score update
    }

    else if(user == "scissor"){
        if(com == "rock"){
            com_score++;
        }
        else if(com == "paper"){
            you_score++;
        }
        //else, it is a tie, no score update
    }

    com_score_element.textContent = com_score;
    user_score_element.innerHTML = you_score;

}