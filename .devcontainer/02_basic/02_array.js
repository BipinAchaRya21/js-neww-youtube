const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
//const allHeros=marvel_heros.concat(dc_heros)
//console.log(allHeros);
//console.log(marvel_heros.concat(dc_heros));
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);
//const another_arry=[1,2,3[4,5,6],7,[6,7[8,9]]]
//const real_ano_arry=another_arry.flat(Infinity)
//console.log(real_ano_arry);
console.log(Array.isArray("Bipin"));
console.log(Array.from("Bipin"));
console.log(Array.from({name:"Bipin"}));
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));