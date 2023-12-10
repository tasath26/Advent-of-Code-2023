console.log("Advent of code 2023: Day 7");

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8')
    .replace(/\r/g, "")
    .trim()
    .split("\n");


let cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let hands = new Array;
let bids = new Array;
let cl = new Array;
let value = new Array;


Array.prototype.swap = function(a,b){
    this[a] = this.splice(b,1,this[a])[0];
    return this;
}


function part1(){

    for(line of input){
        line = line.split(' ');

        hands.push(line[0]);
        bids.push(parseInt(line[1],10));
    }

    for(i in hands){
        let pairs = 0;
        let three_kind = 0;
        let four_kind = 0;
        let five_kind = 0;
        let total = 0;
        let val = 0;
        
        for(let card = 0; card < cards.length; card++){
            let inst = 0;

            for(let char = 0; char < 5; char++){
                if(hands[i][char] === cards[card]){
                    val = val + card;
                    inst++;
                }
            }

            if(inst === 2){ pairs++; }
            if(inst === 3){ three_kind++; }
            if(inst === 4){ four_kind++; }
            if(inst === 5){ five_kind++; }
            
        }

        if(pairs > 0){ total = pairs;}
        if(three_kind === 1){ total = total + 3; }
        if(four_kind === 1){ total = 5;}
        if(five_kind === 1){ total = 6;}

        
        cl.push(total);
        value.push(val);
    }

    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < hands.length -1; i++){
            if(cl[i] > cl[i+1]){

                hands.swap(hands[i],hands[i+1]);
               
                cl.swap(cl[i],cl[i+1]);
               
                bids.swap(bids[i],bids[i+1]);

                swapped = true;


            }else if(cl[i] === cl[i+1]){
                let card1,card2;
                let val1,val2;
                console.log(hands[i]);
                for(let k = 0; k < 5; k++){
                    card1 = hands[i][k];
                    card2 = hands[i+1][k];
                    if(card1 === 'T'){ val1 = 10; }
                    else if(card1 === 'J'){ val1 = 11;}
                    else if(card1 === 'Q'){ val1 = 12; }
                    else if(card1 === 'K'){val1 = 13;}
                    else if(card1 === 'A'){val1 = 14;}
                    else{ val1 = parseInt(hands[i][k],10);}
                    

                    if(card2 === 'T'){ val2 = 10; }
                    else if(card2 === 'J'){ val2 = 11;}
                    else if(card2 === 'Q'){ val2 = 12; }
                    else if(card2 === 'K'){val2 = 13;}
                    else if(card2 === 'A'){val2 = 14;}
                    else{ val2 = parseInt(hands[i+1][k],10);}
                    

                    if(val1 !== val2){
                        break;
                    }
                }

                if(val1 > val2){
                  
                hands.swap(hands[i],hands[i+1]);

                cl.swap(cl[i],cl[i+1]);

                bids.swap(bids[i],bids[i+1]);
                
                swapped = true;
                }
            }
        }
    }while(swapped);


    let prod = 1;
    let sum = 0;
    for(let i = 0; i < hands.length; i++){
        prod = bids[i] * (i+1);
        sum = sum + prod;
    }
    console.log("Part 1: ",sum);
}



let hands_j = new Array;

function part2(){
    
    cards = ['J','2','3','4','5','6','7','8','9','T','Q','K','A'];
    hands = [];
    bids = [];
    cl = [];
    value = [];

    for(line of input){
        line = line.split(' ');

        hands.push(line[0]);
        bids.push(parseInt(line[1],10));
    }

    for(line in hands){
        var string  = hands[line],
        counter = {};

    for (let i = 0, len = string.length; i < len; i += 1) {
        if(string[i] !== 'J'){
            counter[string[i]] = (counter[string[i]] || 0) + 1;
        }
    }

    var biggest = -1, number;
    for (let key in counter) {
        if (counter[key] > biggest) {
            biggest = counter[key];
            number = key;
        }
    }


    let tmp = hands[line];
    hands[line] = hands[line].replace(/J/g,number);
    /*for(let j = 0; j < 5; j++){
        if(hands[line][j] === 'J'){
            hands[line][j] = number;
        }
    }*/
    

    hands_j.push(hands[line]);
    hands[line] = tmp;
    
    }

    for(i in hands_j){
        let pairs = 0;
        let three_kind = 0;
        let four_kind = 0;
        let five_kind = 0;
        let total = 0;
        let val = 0;
        let j_in_hand = 0;
        
        for(let card = 0; card < cards.length; card++){
            let inst = 0;
        

            for(let char = 0; char < 5; char++){
                if(hands_j[i][char] === cards[card]){
                    val = val + card;
                    inst++;
                }
            }

            if(inst === 2){ pairs++; }
            if(inst === 3){ three_kind++; }
            if(inst === 4){ four_kind++; }
            if(inst === 5){ five_kind++; }
            
        }



        if(pairs > 0){ total = pairs;}
        if(three_kind === 1){ total = total + 3; }
        if(four_kind === 1){ total = 5;}
        if(five_kind === 1){ total = 6;}
        
        
        cl.push(total);
        value.push(val);
    }

   
    for(let i = 0; i < hands_j.length; i++){

        for(let j = 0; j < hands_j.length - i - 1; j++){
           
            if(cl[j] > cl[j+1]){
                
                hands_j.swap(hands_j[j],hands_j[j+1]);
                

                hands.swap(hands[j],hands[j+1]);
                
                cl.swap(cl[j],cl[j+1]);
                

                bids.swap(bids[j],bids[j+1]);
                

                
            }else if(cl[j] === cl[j+1]){
                
                let card1,card2;
                let val1,val2;
                for(let k = 0; k < 5; k++){
                    card1 = hands[j][k];
                    card2 = hands[j+1][k];
                    if(card1 === 'T'){ val1 = 10; }
                    else if(card1 === 'J'){ val1 = 1;}
                    else if(card1 === 'Q'){ val1 = 12; }
                    else if(card1 === 'K'){val1 = 13;}
                    else if(card1 === 'A'){val1 = 14;}
                    else{ val1 = parseInt(hands_j[j][k],10);}
                    

                    if(card2 === 'T'){ val2 = 10; }
                    else if(card2 === 'J'){ val2 = 1;}
                    else if(card2 === 'Q'){ val2 = 12; }
                    else if(card2 === 'K'){val2 = 13;}
                    else if(card2 === 'A'){val2 = 14;}
                    else{ val2 = parseInt(hands_j[j+1][k],10);}
                    

                    if(val1 !== val2){
                        
                        break;
                    }
                }

                
                if(val1 > val2){
                
                hands_j.swap(hands_j[j],hands_j[j+1]);

                hands.swap(hands[j],hands[j+1]);

                cl.swap(cl[j],cl[j+1]);

                bids.swap(bids[j],bids[j+1]);

                }

            }
        }
    }


    
    let prod = 1;
    let sum = 0;
    for(let i = 0; i < hands_j.length; i++){
        
        prod = bids[i] * (i+1);
        sum = sum + prod;
    }
    console.log("Part 2: ",sum);
}

part1();
part2();

