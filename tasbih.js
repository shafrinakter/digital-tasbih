// tasbih 1
let count1 = 0;
function clickhere(){
    const element=document.getElementById('count1');
    count1 +=1;
    element.innerText = count1;
}

document.getElementById('decrement-btn').addEventListener('click',function(){
    const element = document.getElementById('count1');
    count1 -=1;
    element.innerText=count1;
})

// tasbih 2
let count2 = 0;
function clicktasbih2(){
    const element=document.getElementById('count2');
    count2 +=1;
    element.innerText = count2;
}

document.getElementById('decrement-btn2').addEventListener('click',function(){
    const element = document.getElementById('count2');
    count2 -=1;
    element.innerText=count2;
})

// tasbih 3

let count3 = 0;
function clicktasbih3(){
    const element=document.getElementById('count3');
    count3 +=1;
    element.innerText = count3;
}

document.getElementById('decrement-btn3').addEventListener('click',function(){
    const element =document.getElementById('count3');
    count3 -=1;
    element.innerText=count3;
})