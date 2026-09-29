//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 




for(let a=0;a<5;a++)
    {
        let str1="";
        for(let b=0;b<5-a;b++)
            {
                str1=str1+" ";
            } 
        for(let c=0;c<a;c++)
            {
             str1=str1+"* "
            }
            console.log(str1);
        }
for(let i=0;i<6;i++)
    {
        let str="";
        for(let j=5;j>5-i;j--)
            {
                str=str+" ";
            }
        for(let z=5;z>i;z--)
            {
                str=str+"* ";
            }
            console.log(str);
    }
