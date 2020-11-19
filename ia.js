console.log("Script Linked");

let results = document.getElementById('results');
let place = [1,1];


let table1 = document.getElementById('table1');
let t1l = ['Z', 'N', 'V', 'K', 'M', 'X'];
let numX1 = 0;
function clickedX(cell){
    
}

document.getElementById('start1').addEventListener("click", function(){
    timer1 = new Date().getTime();
    //console.log('starting exp1 at ' + timer1)
    table1.children[0].innerHTML = '';
    numX1 = 0;
    for (let i=0; i<8; i++){
        let row = table1.insertRow(0);
        for (let z=0; z<8; z++){
            let cell = row.insertCell(0);
            cell.classList.add('char');
            //console.log((5-numX1)/(49-(i*8 + z)));
            if(Math.random()>((5-numX1)/(64-(i*8 + z)))){
                cell.innerText = t1l[Math.floor(Math.random()*5)];
            }else{
                cell.innerText = 'X';
            }
            if (cell.innerText == 'X'){
                cell.addEventListener("click", function(){
                    if(cell.innerText == 'X'){
                        console.log('x clicked');
                        numX1--;
                        cell.innerText = '';
                        if(numX1==0){
                            results.children[0].children[1].insertCell(place[0]).innerText = (new Date().getTime() - timer1);
                            place[0]++;

                            table1.children[0].innerHTML = '';
                        }
                    }
                });
                numX1 ++;
            }
        }   
    }
    //console.log(numX1);
});



let table2 = document.getElementById('table2');
let t2l = ['O', 'U', 'G', 'J', 'S', 'X'];
let numX2 = 0;
function clickedX(cell){
    
}

document.getElementById('start2').addEventListener("click", function(){
    timer2 = new Date().getTime();
    //console.log('starting exp2 at ' + timer2)
    table2.children[0].innerHTML = '';
    numX2 = 0;
    for (let i=0; i<8; i++){
        let row = table2.insertRow(0);
        for (let z=0; z<8; z++){
            let cell = row.insertCell(0);
            cell.classList.add('char');
            //console.log((5-numX2)/(49-(i*8 + z)));
            if(Math.random()>((5-numX2)/(64-(i*8 + z)))){
                cell.innerText = t2l[Math.floor(Math.random()*5)];
            }else{
                cell.innerText = 'X';
            }
            if (cell.innerText == 'X'){
                cell.addEventListener("click", function(){
                    if(cell.innerText == 'X'){
                        console.log('x clicked');
                        numX2--;
                        cell.innerText = '';
                        if(numX2==0){
                            results.children[0].children[2].insertCell(place[1]).innerText = (new Date().getTime() - timer2);
                            place[1]++;
                            
                            table2.children[0].innerHTML = '';
                        }
                    }
                });
                numX2 ++;
            }
        }   
    }
    //console.log(numX2);
});


document.getElementById('reveal').addEventListener("click", function(){
    let data = document.getElementsByClassName('results_hide');
    for(let i=0; i<data.length; i++){
        data[i].classList.remove('results_hide');
    }
});