let name="Bipin"
const repcount=50
//console.log(name+repcount+"value");
 console.log('Hello my name is ${name} and my repo count is  ${repcount}');
 const gameName=new String('Hitesh_bipin_ten')
 console.log(gameName);
 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.length);  
 console.log(gameName.toLowerCase);
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 const newstring =gameName.substring(0,4)
 console.log(newstring);

 const anotherstring =gameName.slice(-8,4)
 console.log(anotherstring);

 const newstringone="  hitesh  "
 console.log(newstringone);
 console.log(newstringone.trim());

 const url="https://hitesh.com/hitesh%20chouhdary"
 console.log(url.replace('%20','_'));
 console.log(url.includes('hitesh'));
 console.log(gameName.split('_'));