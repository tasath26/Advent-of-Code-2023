console.log("Advent of code 2023: Day 3");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");


let grid = [];
let sum = 0;
let part_num = [];

const directions = [
    { row: -1, col: 0 }, 
    { row: 0, col: 1 },  
    { row: 1, col: 0 },  
    { row: 0, col: -1 },
    { row: 1, col: 1 },
    { row: -1, col: 1},
    { row: 1, col: -1},
    { row: -1, col: -1 }
  ];

function part1(){

    let maxi = maxj = 0;
    for(const line of input){
        maxj = line.length
        let row = [];
        for(num of line){
            if(/\d/.test(num)){
                row.push(parseInt(num,10));
            }else{
                row.push(num);
            }
        }

        grid.push(row);
        maxi++;
    }

    let current_num;
    if(grid[0][0] === '.'){
        current_num = 0;
    }else{
        current_num = 1;
    }

    let total_adj_symbols = 0;
    for(let i = 0; i < maxi; i++){
        if(current_num === 1){
            if(total_adj_symbols !== 0){
                const res = parseInt(part_num.join(''),10);
                
                sum = sum + res;
            }

            total_adj_symbols = 0;
            current_num = 0;
            part_num.fill(0);
        }
        for(let j = 0; j < maxj; j++){
            if(!/\d/.test(grid[i][j])){
                
                if(current_num === 1){
                    if(total_adj_symbols !== 0){
                        const res = parseInt(part_num.join(''),10);
                        sum = sum + res;
                    }

                    total_adj_symbols = 0;
                    current_num = 0;
                    part_num.fill(0);
                }
                continue;
            }
            if(/\d/.test(grid[i][j])){
                
                current_num = 1;
                part_num.push(grid[i][j]);
                for(dir of directions){
                    const newrow = i + dir.row;
                    const newcol = j + dir.col;

                    
                    if((newrow >= 0 && newrow < maxi) && (newcol >= 0 && newcol < maxj)){
                        if(grid[newrow][newcol] !== '.' && !/\d/.test(grid[newrow][newcol])){
                            total_adj_symbols++;
                        }

                        
                        
                    }
                   
                }

                
                
            }

            
        }
    }

    console.log("Part 1: ",sum);
}



let result = [];
let star_position_x = [];
let star_position_y = [];
let star_x;
let star_y;


function part2(){
    
    sum = 0;

    let maxi = maxj = 0;
    for(const line of input){
        maxj = line.length
        let row = [];
        for(num of line){
            if(/\d/.test(num)){
                row.push(parseInt(num,10));
            }else{
                row.push(num);
            }
        }

        grid.push(row);
        maxi++;
    }

    let current_num;
    if(grid[0][0] === '.'){
        current_num = 0;
    }else{
        current_num = 1;
    }

    let adj_star = 0;
    for(let i = 0; i < maxi; i++){
        if(current_num === 1){
            if(adj_star >= 1){
                result.push(parseInt(part_num.join(''),10));
                star_position_x.push(star_x);
                star_position_y.push(star_y);
                star_x = -1;
                star_y = -1;
                
                
            }

            adj_star = 0;
            current_num = 0;
            part_num.fill(0);
        }
        for(let j = 0; j < maxj; j++){
            

            if(!/\d/.test(grid[i][j])){
                
                if(current_num === 1){
                    if(adj_star >= 1){
                        result.push(parseInt(part_num.join(''),10));
                        star_position_x.push(star_x);
                        star_position_y.push(star_y);
                        star_x = -1;
                        star_y = -1;
                       
                    }

                    adj_star = 0;
                    current_num = 0;
                    part_num.fill(0);
                }
                continue;
            }
            if(/\d/.test(grid[i][j])){
                
                current_num = 1;
                part_num.push(grid[i][j]);
                for(dir of directions){
                    const newrow = i + dir.row;
                    const newcol = j + dir.col;

                    
                    if((newrow >= 0 && newrow < maxi) && (newcol >= 0 && newcol < maxj)){
                        if(grid[newrow][newcol] === '*'){
                            adj_star++;
                            star_x = newrow;
                            star_y = newcol;
                        }

                        
                        
                    }
                   
                }



                

                
                
            }
                
            
        }
    }

    
    for(let i = 0; i < result.length; i++){
        for(let j = 0; j < result.length; j++){
            if(star_position_x[i] === star_position_x[j] && star_position_y[i] === star_position_y[j] && i != j){
                res = result[i] * result[j]
                sum = sum + res;
            }
        }
    }

    console.log("Part 2: ",sum/2);
}

part1();
part2();