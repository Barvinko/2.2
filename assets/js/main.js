function translation(){
    let sum = (document.getElementById("input").value);
    numbers = sum.split('');
    numbers = numbers.reverse();
    console.log(numbers);
    let wordNumbers0 = ["нуль","одна","дві","три","чотири","пять","шість","сім","вісім","девять","десять","одинацать","дванадцать","тринадцать","чотирнадцять","пятнатцать","шістнадцять","сімнадцять","вісімнадцять","девятнадцять"];
    let wordNumbers00 = [" ", "десять", "дватцять","тридцять","сорок","пятдесять","шисдесят","сімдесят","вісімдесят","девяносто"];
    let wordNumbers000 = ["","сто", "двісті", "триста","чотириста","пятсот","шістсот","сімсот","вісімсот","девятсот"];
    let result = new Array();
    for (let i = 0; i < 3; i++) {
        result[i] = new Array();
    }
    console.log(result);
    

for (let j = 0; j < Math.ceil(numbers.length/3); j++) {
    let i = 0;
    let minusBeforeNum = 0;
    if (j >= 1) {
        i += 3; 
    }

    let replay = 3;
    if (j>= 1 && ) {
        
    }


    for (i = i; i < numbers.length; i++) {
        if (numbers[i] == 0 && numbers.length>1) {
            numbers[i] = "";
        }
        if (i == 0) {
            result[j][i] = wordNumbers0[numbers[i]];       
        }else if (i == 1) {
            if (numbers[i] + numbers[i-1] < 20) {
                result[j][i-1] = wordNumbers0[numbers[i] + numbers[i-1]];
                console.log(`number[i-1] ${result[i]}`);
            }else{
                result[j][i] = wordNumbers00[numbers[i]];
            }
        }else if (i == 2) {
            result[j][i] = wordNumbers000[numbers[i]];  
        }
    }
}
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

    document.getElementById("idWords").innerHTML = result[0].reverse().join(" ") + " Грн.";
}
