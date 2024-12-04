





// tablefor = 2;

// for ( i=0 ; i <= 100 ; i++ ){
//     let value=i+1;
//     console.log(value + ' x '+ tablefor + ' = ' +(value*tablefor));
// }


// let names=["faranklin","anto","jasmine","sam","sams"]

// for (i=0 ; i<names.length;i++){
//     console.log(names[i])
// }

// tablefor = 2;
// for ( i=0 ; i<=10 ; i++){
//     console.log(i+1 + ' x '+ tablefor + ' = '+((i+1)*tablefor));
// }

// let names=["franklin","anto","jasmine","sams","sabare","akash"]

// for (i=0 ; i<names.length ; i++){
//     console.log(names[i])
// }


// let user =[
//     {name :'franklin',gender:'m'},
//     {name :'sams',gender:'m'},
//     {name :'jasmine',gender:'m'},
//     {name :'jia',gender:'m'},
//     {name :'anto',gender:'m'}
// ]
// let person = {
// }


//  for ( const key in person){
//     let val = person[key]
//     console.log(val)
//  }


// for ( let index = 0 ; index <user.length ; index++){
//      const element = user[index];
//      console.log(element)
// }
// index = 0;
// for ( const user of users){
//     console.log(user)
    
// }

// user.forEach((user)=>{
//     console.log(user)
// }
// )

// let person={
//     name:'sabare',
//     age: '10',
//     date:'23'
// }

// for (const key in person){
//     let val=person[key]
//     console.log(val)
// }


// const fruits = ['apple','banana','orange']

// const modifiedfruit =  fruits.map( (fruit) => {
//        console.log('fruit',fruit.toUpperCase())
//        return
//     })

// console.log(modifiedfruit);


// <<< filter()  >>>

// const humanNames = [ 'anu' , 'banu', 'cathy', 'dory','ellie']

// const result = humanNames.filter(name => name.length >3  )

// console.log(result)


// const users =[

// {
//     id: 1,
//     name:'sabare',
//     active : true,
// },
// {
//     id: 1,
//     name:'pravin',
//     active : true,
// },
// {
//     id: 1,
//     name:'raja',
//     active : false,
// },

// ]
// const activeusers = users.filter((user) => user.active)

// console.log(activeusers);
// <<< filter()  >>>


// << foreach()  >>

// const fruits = ['apple', 'banana', 'orange']

// fruits.forEach((fruit) => {
//  console.log(fruit.toUpperCase())
// })

// << foreach()  >>

// << map()  >>

// const fruits = ['apple', 'banana', 'orange']
// const modifiedfruit = fruits.map((fruit) => fruit.toUpperCase() )
// console.log(modifiedfruit)


// const number = [1,2,3,4,]
// const doublenumber =number.map( (num) =>  num*2 )
// console.log(doublenumber);

// << map()  >>


// const fruits = ['apple', 'banana', 'orange', 'mango']

// console.log
// ( fruits.copyWithin(1, 2));

// const fruits = ['banana', 'orange', 'apple', 'mango']
//  for ( let [,index] of fruitEntries){
//     console.log(fruits,index)
//  }

// console.log(fruitEntries)

// <<< reduce()  >>>
//  const customerSpentAmount =[450,80,790,1252]

//  const totalAmountSpent = customerSpentAmount.reduce((prevVal,currentVal) => {
//  console.log( prevVal,currentVal);
//   return prevVal + currentVal
// },0)


// console.log(totalAmountSpent)


// <<< reduce()  >>>

// const number = [2,3,45,65,5]
// const result = number.sort((a, b) =>  b- a )
// console.log(result);

    
// <<< reduce()  >>>



const disply = document.getElementById("display");

function appendToDisplay(input){
    display.value += input ;
}

function cleardisplay(){
display.value = null;
}

function calculate(){
    
try{
    display.value = eval(display.value);
  }
  catch (error){
    display.value = "Error";
  }
}

