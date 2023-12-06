console.log("Advent of code 2023: Day 6");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");


let ms = new Array;
let dist = new Array;

function part1(){

    let count = 0;
    for(line of input){
        line = line.substring(10).split(' ').map(Number).filter(number => number !== 0);
        if(count === 0){
            for(let i = 0; i < line.length; i++){
                ms.push(line[i]);
            }
        }else{
            for(let i = 0; i < line.length; i++){
                dist.push(line[i]);
            }
        }
        count++;
    }
    
    let hold,remaining,dist_covered;
    let valid = 0;
    let total = [];
    for(let i = 0; i < ms.length; i++){
        valid = 0;

        for(let j = 0; j < ms[i]; j++){
            hold = j;
            remaining = ms[i] - j;
            dist_covered = j * remaining;
            if(dist_covered > dist[i]){
                valid++;
            }
        }

        total.push(valid);

    }
    
    let prod = 1;
    for(let i = 0; i < total.length; i++){
        prod = prod * total[i];
    }
    console.log("Part 1: ",prod);
}

function part2(){
    let time = 0;
    let d = 0;
    let count = 0;
    for(line of input){
        line = line.substring(10).replace(/\s/g, '');
        if(count === 0){
            time = parseFloat(line,10);
        }else{
            d = parseFloat(line,10);
        }
        count++;
        
    }

    let remaining,dist_covered;
    let valid = 0;
    let total = [];
    
        valid = 0;

        for(let j = 0; j < time; j++){
            hold = j;
            remaining = time - j;
            dist_covered = j * remaining;
            if(dist_covered > d){
                valid++;
            }
        }

        total.push(valid);

    
    console.log("Part 2: ",valid);
}

part1();
part2();
