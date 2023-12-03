console.log("Advent of code 2023: Day X");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");

let num = 0;
let color;
let sum = 0;
let gameid = 1;
let wordarr = [];



function part1(){

    
    //console.log(input)
    for (let elem of input){
        
        let sets = 1;
        let curr_set = 1;
        let totred = 12;
        let totgreen = 13;
        let totblue = 14;
        let tempsum = 0;
        elem = elem.substring(8);
        elem = elem.replace(/,/g, " ,");
        elem = elem.replace(/;/g, " ;");
        wordarr = elem.split(' ');
        
        for(let word of wordarr){
            if(word === ';'){
                sets = sets + 1;
            }
        }
        for(let word of wordarr){

            
            if(word === ',' || word === ' '){
                continue;
            }
            
            if(word === ';'){
                if(totblue >= 0 && totred >= 0 && totgreen >= 0){
                    totred = 12;
                    totgreen = 13;
                    totblue = 14;
                    curr_set = curr_set+1;
                    continue;
                }
            }
            
            if(/\d/.test(word)){
                num = parseInt(word,10);
                
            }else{
                color = word;
                if(color === "blue"){
                    totblue = totblue - num;
                }else if(color === "red"){
                    totred = totred - num;
                }else if(color === "green"){
                    totgreen = totgreen - num;
                }
                
            }

           
            
           
            

            
        }

        
        if(totblue >= 0 && totred >= 0 && totgreen >= 0 && curr_set === sets){
        
            sum = sum + gameid;
        }
        gameid++;
    }
    console.log("Part 1: ",sum);
}

function part2(){
    
    sum = 0;
    for (let elem of input){
        let sets = 1;
        let maxr = maxb = maxg = -1;
        let r = g = b = 0;
        let curr_set = 1;
        let totred = 12;
        let totgreen = 13;
        let totblue = 14;
        let tempsum = 0;
        elem = elem.substring(8);
        elem = elem.replace(/,/g, " ,");
        elem = elem.replace(/;/g, " ;");
        wordarr = elem.split(' ');
        
        for(let word of wordarr){
            if(word === ';'){
                sets = sets + 1;
            }
        }
        for(let word of wordarr){

           
            if(word === ',' || word === ' '){
                continue;
            }
            
            if(word === ';'){
                if(totblue >= 0 && totred >= 0 && totgreen >= 0){
                    totred = 12;
                    totgreen = 13;
                    totblue = 14;
                    curr_set = curr_set+1;
                    continue;
                }
            }
            
            if(/\d/.test(word)){
                num = parseInt(word,10);
                
            }else{
                color = word;
                if(color === "blue"){
                    totblue = totblue - num;
                    if(num > maxb){
                        maxb = num;
                        b = num;
                    }
                }else if(color === "red"){
                    totred = totred - num;
                    if(num > maxr){
                        maxr = num;
                        r = num;
                    }
                }else if(color === "green"){
                    totgreen = totgreen - num;
                    if(num > maxg){
                        maxg = num;
                        g = num;
                    }
                }
                
            }

           
            
           
            

            
        }

       
    
        
        sum = sum + (maxr*maxg*maxb);
        
        gameid++;
    }
    console.log("Part 2: ",sum);
}

part1();
part2();
