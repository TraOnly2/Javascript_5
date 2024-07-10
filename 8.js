
function findNumber(...last){
    return last.reduce((acc, cur) =>{
        if(acc[cur]){
            acc[cur] += 1;
        }else{
            acc[cur] = 1;
        }
        return acc

    },{});
}

console.log(findNumber(1,5,2,4,1,2,5,3,6,6,5,4,5,2,1,9,5,7));