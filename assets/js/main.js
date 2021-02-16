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

    for (let i = 0; i < howManyFullTrees + 1; i++) {
        if (howManyFullTrees == (numbers.length)/3 || i < howManyFullTrees) {
            howManyNumbers[i] = 3;
        }else {
            howManyNumbers[i] = numbers.length - (howManyFullTrees * 3)
        }
    }
    console.log(howManyNumbers);

    for (let i = 0; i < howManyFullTrees + 1; i++) {
        result[i] = new Array();

        for (let j = 0; j < howManyNumbers[i]; j++) {
            result[i][j] = numbers[j + i*3];
            console.log(`result[${i}][${j}] ${result[i][j]} j: ${j}`);
        }
    }
    // console.log(result);    

    for (let i = 0; i < result.length; i++) { 
        for (let j = 0; j < result[i].length; j++) {
            if (numbers[j + i*3] == 0 && numbers.length>1) {
                numbers[j + i*3] = "";
            }
            if ((j + i*3) == 0) {
                result[i][j] = wordNumbers0[numbers[j + i*3]];       
            }else if ((j + i*3) == 1) {
                if (numbers[j + i*3] + numbers[(j + i*3)-1] < 20) {
                    result[i][j-1] = wordNumbers0[numbers[j + i*3] + numbers[(j + i*3)-1]];
                }else{
                    result[i][j] = wordNumbers00[numbers[j + i*3]];
                }
            }else if ((j + i*3) == 2) {
                result[i][j] = wordNumbers000[numbers[j + i*3]];  
            }
        }
    }
    console.log(result);






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

    document.getElementById("idWords").innerHTML = result.join(" ") + " Грн.";
}
