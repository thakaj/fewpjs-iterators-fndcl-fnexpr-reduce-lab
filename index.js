const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function totalBatteries(){
    batteryBatches.reduce(function(accumulator,number){
        return accumulator + number
    },0)
}
