
  let num=[1,3,-2,4];
function max(num){
    if(num.length<2){
        console.log("array contains only 1 elements");
    }
    let maxproduct=num[0]*num[1];
    for(let i=0;i<=num.length;i++){
        for(let j=i+1;j<=Array.length;i++){
            let product=[i]*[j];
            if(product>max){
                max=product;
            }
        }
    }
    return maxproduct;
}
console.log(max(num));
    

question
var libary=[
   {
    title:"the greast gatsby",
    author:"f.scott fitzgerald",
    readingstatus:"true"
   },
   {
    title:"to kill a mockingbid",
    author:"harper lee",
    readingstatus:"flase"
   },
  {
    title:"1984",
    author:"georage orwell",
    readingstatus:"true"
  }];
  for (var i=0; i< libary.length; i++)
  {
    var book ="'"+libary[i].title+"'"+ "by" +libary[i].author+".";
    if(libary[i].readingstatus==true){
        console.log(book+"Reading status:TRUE");
    }else
    {
    console.log(book+"Reading status:FLASE");
    }
  }

QUESTION
let arr=[2,3,4,5];

let target=0;
function returntarget(arr){
    let temp=[];
    for(let i=0;i<=arr.length;arr++){
        for(let j=0;j<i+1;j++){
            if(arr[i]+arr[j]==target){
                temp.push(arr[i])
            }
        }
        console.log(arr)
    }

    return target

}
returntarget(arr)

question

function amountTocoins(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);
            
        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }
  console.log(amountTocoins(46, [25, 10, 5, 2, 1]));






questiom
    function reverse(str,start,end)
    {
        let temp; 
         
        while (start <= end) 
        {
       
            temp = str[start];
            str[start]=str[end];
            str[end]=temp;
            start++;
            end--;
        }
    }

    function reverseWords(s)
    {
      
        s=s.split("");
        let start = 0;
        for (let end = 0; end < s.length; end++) 
        {
          
            if (s[end] == ' ') 
            {
                reverse(s, start, end);
                start = end + 1;
            }
        }
        reverse(s, start, s.length - 1);  
        reverse(s, 0, s.length - 1);
        return s.join("");
    }
   
    var s = "welcome to js world ";
      
    document.write(reverseWords(s));
     
  