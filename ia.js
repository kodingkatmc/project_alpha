console.log("Script Linked");

function gen(table, letters, special, clickedFun){
    
}


let table1 = document.getElementById('table1');
let t1l = ['Z', 'N', 'V', 'K', 'M', 'X'];
let numX = 0;
function clickedX(cell){
    
}

document.getElementById('start1').addEventListener("click", function(){
    timer1 = new Date().getTime();
    console.log('starting exp1 at ' + timer1)
    table1.children[0].innerHTML = '';
    numX = 0;
    for (let i=0; i<8; i++){
        let row = table1.insertRow(0);
        for (let z=0; z<8; z++){
            let cell = row.insertCell(0);
            //console.log((5-numX)/(49-(i*8 + z)));
            if(Math.random()>((5-numX)/(64-(i*8 + z)))){
                cell.innerText = t1l[Math.floor(Math.random()*5)];
            }else{
                cell.innerText = 'X';
            }
            if (cell.innerText == 'X'){
                cell.addEventListener("click", function(){
                    if(cell.innerText == 'X'){
                        console.log('x clicked');
                        numX--;
                        cell.innerText = '';
                        if(numX==0){
                            document.getElementById('out1').textContent = 'Test Passed: ' + (new Date().getTime() - timer1);
                        }
                    }
                });
                numX ++;
            }
        }   
    }
    //console.log(numX);
});