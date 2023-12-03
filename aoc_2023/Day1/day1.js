console.log("Advent of code 2023: Day 1");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");

let num1 = num2 = sum = 0;


function part1(){

    
    for ( const char of input){
        num1 = num2 = 0;
        for (let i = 0; i < char.length; i++){
        
            if(/\d/.test(char[i])){
                num1 = parseInt(char[i],10);
               
                break;
            }
        }

        for(let i = char.length-1; i > 0; i--){
            if(/\d/.test(char[i])){
                
                num2 = parseInt(char[i],  10);
                break;
            }
        }

        if (num2 === 0){
            num2 = num1;
        }


        let n = num1*10 + num2;
        
        sum = sum + n;
    }
    console.log("Part 1: ", sum);
}

let strarr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let array = [];
let pos1 = pos2 = posmin = posmax = 0;

function part2(){
    
    sum = 0;

    for (let char of input){
        
        num1 = num2 = 0;
        let min = 1000;
        let max = -1;
        array.fill(NaN);
        let count = k = 0;
        poslet = 0;
        posmin = posmax = 0;

        for(let i = 0; i < 9; i++){
            if(char.indexOf(strarr[i]) !== -1){
                array[i] = char.indexOf(strarr[i]);

                if(min > array[i]){
                    min = array[i];
                    posmin = i+1;
                }

                while(char.indexOf(strarr[i],array[i]+1) !== -1){
                    array[i] = char.indexOf(strarr[i],array[i]+1);
                }
                //console.log(strarr[i]," found!");
                

                if(max < array[i]){
                    max = array[i];
                    posmax = i+1;
                }

            }
        }

        //console.log(array);
        
        pos1 = -1;
        for (let i = 0; i < char.length; i++){
            if(/\d/.test(char[i])){
                num1 = parseInt(char[i],10);
                pos1 = i;
                break;
            }
        }

        pos2 = -1;
        for(let i = char.length-1; i > 0; i--){
            if(/\d/.test(char[i])){
                
                num2 = parseInt(char[i],  10);
                pos2 = i;
                break;
            }
        }

        if(pos1 === -1){
            num1 = posmin;
        }

        if(pos2 === -1){
            num2 = posmax;
        }

        if(min < pos1 && pos1 !== -1){
            num1 = posmin;
        }

        if(max > pos2 && pos2 !== -1){
            num2 = posmax;
        }

        if (num2 === 0){
            num2 = num1;
        }
        
        let n = num1*10 + num2;
        
        
        sum = sum + n;
    }
    console.log("Part 2: ", sum);
}

part1();
part2();
