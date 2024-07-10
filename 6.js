const points = [{x: 1, y:2}, {x:2, y:3}, {x:3, y:4}];


const [first,...other] = points;

console.log(first);
console.log([...other]);


