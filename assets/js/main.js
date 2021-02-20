function translation(){
    let sum = (document.getElementById("input").value);
    numbers = sum.split('');
    numbers = numbers.reverse();
    console.log(numbers);
    let wordNumbers0 = ["нуль","одна","дві","три","чотири","пять","шість","сім","вісім","девять","десять","одинацать","дванадцать","тринадцать","чотирнадцять","пятнатцать","шістнадцять","сімнадцять","вісімнадцять","девятнадцять"];
    let wordNumbers00 = [" ", "десять", "дватцять","тридцять","сорок","пятдесять","шисдесят","сімдесят","вісімдесят","девяносто"];
    let wordNumbers000 = ["","сто", "двісті", "триста","чотириста","пятсот","шістсот","сімсот","вісімсот","девятсот"];
    let result = new Array();
    let howManyFullTrees = Math.trunc((numbers.length -1)/3);
    console.log(howManyFullTrees);
    howManyNumbers = new Array;
    numbersRank = [["","","",""], [" тисяча"," тисячі"," тисячь", ""], [" мільйон"," мільйони"," мільйонів", ""],[" мільярд"," мільярди"," мільярдів",""]]

    for (let i = 0; i < howManyFullTrees + 1; i++) {
        if (howManyFullTrees == (numbers.length)/3 || i < howManyFullTrees) {
            howManyNumbers[i] = 3;
        }else {
            howManyNumbers[i] = numbers.length - (howManyFullTrees * 3)
        }
    }
    console.log(howManyNumbers);

    let arrOfArrNumbers = new Array();

    for (let i = 0; i < howManyFullTrees + 1; i++) {
        arrOfArrNumbers[i] = new Array();
        result[i] = new Array();

        for (let j = 0; j < howManyNumbers[i]; j++) {
            arrOfArrNumbers[i][j] = numbers[j + i*3];
            //console.log(`result[${i}][${j}] ${result[i][j]} j: ${j}`);
        }
        result[i] = [...arrOfArrNumbers[i]];
    }
    console.log(result);    
    console.log(arrOfArrNumbers)
    let condition = +numbers.reverse().join('');
    numbers.reverse().join('');
    if (condition == 0) {
        document.getElementById("idWords").innerHTML = wordNumbers0[0] + " Грн.";
    }else if (numbers[numbers.length-1] == 0 || condition < 0) {
        document.getElementById("idWords").innerHTML = "Мразь водди свою сумму а не долг"
    }
    else{

    for (let i = 0; i < arrOfArrNumbers.length; i++) { 
        for (let j = 0; j < arrOfArrNumbers[i].length; j++) {
            if (i == 2) {
                wordNumbers0[1] = ' один';
                wordNumbers0[2] = ' два'
            }

            if (result[i][j] == 0 && numbers.length>1) {
                result[i][j] = "";
                console.log('here 0')
            }else if (j == 0) {
                result[i][j] = wordNumbers0[arrOfArrNumbers[i][j]];       
            }else if (j == 1) {
                console.log(arrOfArrNumbers[i][j] + arrOfArrNumbers[i][j-1]);
                if (arrOfArrNumbers[i][j] + arrOfArrNumbers[i][j-1] < 20 && arrOfArrNumbers[i][j-1] != 0) {
                    console.log(`11-19 ${result[i][j] + result[i][j-1]}`);
                    result[i][j-1] = wordNumbers0[arrOfArrNumbers[i][j] + arrOfArrNumbers[i][j-1]];
                    result[i][j] = '';
                }else{
                    result[i][j] = wordNumbers00[arrOfArrNumbers[i][j]];
                }
            }else if (j == 2) {
                result[i][j] = wordNumbers000[arrOfArrNumbers[i][j]];  
            }
            console.log(`result[${i}][${j}] ${result[i][j]} j: ${j}`);
        }
        let typeRank = 1;
        // else if (arrOfArrNumbers[i][0] <= 4 && (arrOfArrNumbers[i][1] + arrOfArrNumbers[i][0]) > 14) {
        //     typeRank = 1;
        // }
        if (arrOfArrNumbers[i][0] > 4 || arrOfArrNumbers[i][0] == 0 || (arrOfArrNumbers[i][1] + arrOfArrNumbers[i][0]) < 20 && (arrOfArrNumbers[i][1] + arrOfArrNumbers[i][0]) > 10) {
            typeRank = 2;
        }else if (arrOfArrNumbers[i][0] == 1) {
            typeRank = 0;
        }

        if (arrOfArrNumbers[i].reverse().join("") == 0) {
            typeRank = 3;
        }
        result[i][0] += numbersRank[i][typeRank];
        result[i] = result[i].reverse().join(" ");
    }


        console.log(numbers[numbers.length-1])
        document.getElementById("idWords").innerHTML = result.reverse().join(" ") + " Грн.";
    }

    console.log(result);

    // for (let i = 0; i < result.length; i++) {
    //     result[i] = result[i].reverse().join(" ")        
    // }

    console.log(result);

    // for (let i = 0; i < result.length; i++) { 
    //     for (let j = 0; j < result[i].length; j++) {
    //         if (numbers[j + i*3] == 0 && numbers.length>1) {
    //             numbers[j + i*3] = "";
    //         }
    //         if ((j + i*3) == 0) {
    //             result[i][j] = wordNumbers0[numbers[j + i*3]];       
    //         }else if ((j + i*3) == 1) {
    //             if (numbers[j + i*3] + numbers[(j + i*3)-1] < 20) {
    //                 result[i][j-1] = wordNumbers0[numbers[j + i*3] + numbers[(j + i*3)-1]];
    //             }else{
    //                 result[i][j] = wordNumbers00[numbers[j + i*3]];
    //             }
    //         }else if ((j + i*3) == 2) {
    //             result[i][j] = wordNumbers000[numbers[j + i*3]];  
    //         }
    //     }
    // }
    // console.log(result);






// result[0].join(' ');
        // if (sum >= 20) {
        //     result[0] = wordNumbers00[numbers[0]];
        //     result[1] = wordNumbers0[numbers[1]];
        // }
        // if (sum <20) {
        //     result[0] = wordNumbers0[numbers[0]];        
        // }
        // if (sum < 10 && sum >= 0) {
        //     result[0] = wordNumbers0[numbers[0]];
        // }

    // document.getElementById("idWords").innerHTML = result.reverse().join(" ") + " Грн.";
}
