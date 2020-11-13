console.log("Script Linked");


let table1 = document.getElementById('table1');
let t1l = ['Z', 'N', 'V', 'K', 'M', 'X'];
let numX1 = 0;
function clickedX(cell){
    
}

document.getElementById('start1').addEventListener("click", function(){
    timer1 = new Date().getTime();
    console.log('starting exp1 at ' + timer1)
    table1.children[0].innerHTML = '';
    numX1 = 0;
    for (let i=0; i<8; i++){
        let row = table1.insertRow(0);
        for (let z=0; z<8; z++){
            let cell = row.insertCell(0);
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
                            document.getElementById('out1').textContent = 'Test Passed: ' + (new Date().getTime() - timer1);
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
    console.log('starting exp2 at ' + timer2)
    table2.children[0].innerHTML = '';
    numX2 = 0;
    for (let i=0; i<8; i++){
        let row = table2.insertRow(0);
        for (let z=0; z<8; z++){
            let cell = row.insertCell(0);
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
                            document.getElementById('out2').textContent = 'Test Passed: ' + (new Date().getTime() - timer2);
                        }
                    }
                });
                numX2 ++;
            }
        }   
    }
    //console.log(numX2);
});