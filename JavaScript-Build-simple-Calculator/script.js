(function(){
    let screen =document.querySelector(".screen");
    let buttons =document.querySelectorAll(".btn");
    let clear =document.querySelector(".btn-clear");
    let equal =document.querySelector(".btn-equel");

    buttons.forEach(function(button){
        button.addEventListener("click",function(event){
            let value=event.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener("click", function(event){
        if(screen.value===""){
            screen.value ="Please Enter";

        }else{
            let answer =eval(screen.value);
            screen.value =answer;
        }
    })

    clear.addEventListener("click", function(event){
        screen.value = "";
    })
})();