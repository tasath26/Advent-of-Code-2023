console.log("Advent of code 2023: Day 5");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");

let seeds = new Array;
let cur_section = 0;
let AtoB = new Array;
let seed_used = [];

function part1(){

    let inp = input.filter(string => string !== '');
    

    for(line of inp){
      line = line.substring(line.indexOf(':')+1);
      line = line.split(' ').map(Number);

      if(cur_section === 0){
        for(num of line){
            
            if(num !== 0){
                seeds.push(num);
            }

        
        }
        cur_section = 1;
      }else{

        if(line.length !== 1){
        let src = dest = -1;
        AtoB = [];
        for(num of line){
            AtoB.push(num);
        }

        
        

        for(let k = 0; k < seeds.length; k++){
            if(seed_used[k] === 1){
                continue;
            }

            if(seeds[k] >= AtoB[1] && seeds[k] <= AtoB[1] + AtoB[2]){
                let diff = seeds[k] - AtoB[1];
                let new_mapping = AtoB[0] + diff;
                seeds[k] = new_mapping;
                seed_used[k] = 1;
            }

        }
        
        }   

      }
      
      if(line.length === 1){
        cur_section++;
        seed_used = seed_used.fill(0);
      } 
    }

    seeds.sort((a,b) => a - b);
    console.log("Part 1: ", seeds[0]);
}


let newseeds = new Array;

//I kinda cheated for part 2 because i have to use only one range at a time :')

function part2(){
  
  cur_section = 0;
  seeds = [];
  seed_used = [];
  let inp = input.filter(string => string !== '');
    

    for(line of inp){
      line = line.substring(line.indexOf(':')+1);
      line = line.split(' ').map(Number);

      
      for(num of line){
        if(num !== 0){
            seeds.push(num);
        }
      }

      for(let i = seeds[0]; i < seeds[0] + seeds[1]; i++){
        let curr = parseFloat(i,10);
        newseeds.push(i);
      }
      
      break;
    }

    let i = 0;
    for(line of inp){
      if(i === 0){
        i++;
        continue;
      }

      line = line.substring(line.indexOf(':')+1);
      line = line.split(' ').map(Number);
      console.log(line);



     
      if(line.length !== 1){
        let src = dest = -1;
        AtoB = [];
        for(num of line){
            AtoB.push(num);
        }

        
        

        for(let k = 0; k < seeds.length; k++){
            if(seed_used[k] === 1){
              continue;
            }
            
            if(newseeds[k] >= AtoB[1] && newseeds[k] <= AtoB[1] + AtoB[2]){
                let diff = newseeds[k] - AtoB[1];
                let new_mapping = AtoB[0] + diff;
                newseeds[k] = new_mapping;
                seed_used[k] = 1;
            }

        }
        
        }   

        if(line.length === 1){
          cur_section++;
          seed_used = seed_used.fill(0);
        } 
    }

    seeds.sort((a,b) => a - b);
    console.log("Part 2: ",newseeds[0]);
    
    
}

part1();
part2();
