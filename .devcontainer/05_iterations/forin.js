//fo in loop
const myObject={
    js:'javascript',
    cpp:'c++',
    py:'python',
    java:'java'
}
for(const key in myObject)
{
    //console.log(`${key}:->${myObject[key]}`);
}
const Programming=["javascript","c++","python","java"]
for(const key in Programming){
    //console.log(`index ${key}:->${Programming[key]}`);
}
const map=new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")
map.set('NP',"Nepal")
map.set('US',"United States")
for(const key in map){
   // console.log(`${key}:->${map[key]}`);//for in ma no loop
}