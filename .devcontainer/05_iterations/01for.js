//for loop
for(let index=1;index<=Array.length;index++){
    const element=Array[index]
}
for(let i=0;i<=10;i++)
{
    const element=i;
    if(element==5)
    {
        //console.log("five 5 reached");
    }
    //console.log(element);
}
for (let i=1;i<=5;i++)
{
    //console.log(`outer loop:${i}`);
    for(let j=1;j<=5;j++)
    {
        //console.log(`inner loop:${j}and outer loop:${i}`);
        //console.log(i+'*'+j+'='+i*j);
    }
}
//break and continue statements
for(let i=1;i<=10;i++)
{
    if(i==5)
    {
       // console.log("five reached")
        break;
    }
    //console.log(i);
}
for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        console.log("five reached")
        continue;
    }
    console.log(i);
}