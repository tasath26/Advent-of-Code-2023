console.log("Advent of code 2023: Day 4");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");


let sum = 0;

function part1(){

    for (let line of input){
        line = line.substring(8);
        line = line.split('|');
        
        const winning = line[0].split(' ').map(Number).filter(number => number !== 0);
        const numbers = line[1].split(' ').map(Number).filter(number => number !== 0);
        
        let common = 0;
        const w = new Set(winning);
        const n = new Set(numbers);
        
        w.forEach(element => {
        if (n.has(element)) {
            if(common === 0){
                common = 1;
            }else{
                common = common*2;
            }
        }
});

        sum = sum + common;
        
    }
    console.log("Part 1: ",sum);
}

let copies = new Array;

function part2(){
    

    
    let current_card = 1;
    sum = 0;

    for (let line of input){
        line = line.substring(10);
        line = line.split('|');

        const winning = line[0].split(' ').map(Number).filter(number => number !== 0);
        const numbers = line[1].split(' ').map(Number).filter(number => number !== 0);
        let len = winning.length;
        
        let offset = 1;
        let count = 1;
        
        if(copies.length !== 0){
            for(let i = 0; i < copies.length; i++){
                if(copies[i] === current_card){
                    
                    for(let j = 0; j < len; j++){
                        winning.push(winning[j]);
                    }
                    copies[i] = -1;
                    count++;
                }
            }
        }
        
        
        for(let i = 0; i < winning.length; i++){
            if(winning[i] === winning[0]){
                offset = 1;
            }
            for(let j = 0; j < numbers.length; j++){
                
                if(winning[i] === numbers[j]){
                    copies.push(current_card + offset);
                    offset++;
                    
                }
            }
        }

       sum = sum + count;
       current_card++;
       copies = copies.filter(number => number !== -1);

    }
    
    console.log("Part 2: ", sum);

        
}
    

part1();
part2();
