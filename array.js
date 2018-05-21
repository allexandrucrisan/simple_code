var numereNew = [];
var numere = [2, 5, 7, 8, 13, 15, 74, 1346, 13572458, 1231435];
for (var i=0; i<numere.length; i++){
    if (numere[i]%2 == 0){
        numereNew.push(numere[i]);
    }
}
var str = numereNew.join();
console.log("numerele pare sunt: " + str);
