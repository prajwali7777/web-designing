let nos = [1, 2, 3, 4, 5];
console.log("initially nos are:", nos);
nos.shift();
console.log("Nos after the shift:",nos);
nos.unshift(1);
console.log("Nos after the unshift:",nos);
nos.splice();
console.log("Nos after the splice deletion:",nos);
//insert elements in between  using splice
nos.splice(2,0,7,8);
console.log("Nos after the splice addition:",nos);
f =["a","b", "c"];
console.log(f)
f.splice(1,0,"d","e","f");
console.log("values after addition:",f);
g = ["x", "y", "z"];
console.log(g)
g.splice(1, 2,"a","b");
console.log("values after addition:",g);