'use strict';

// let userName = prompt('What is your name?');

// alert(`Welcome to my personal blog ${userName}. I wish you a fun tour!`);


// let football = prompt('Do I enjoy playing and watching football matches?');

// switch (football.toLowerCase()){
// case 'yes':
// case 'y':

//   //console.log('You are right, I like football');
//   alert ('You are right, I like football');

//   break;

// case 'no':
// case 'n':

//   //console.log('You are worng, I do like football');
//   alert('You are worng, I do like football');
//   break;

// default:
//   //console.log('Please, specify your answer to yes/y or no/n');
//   alert ('Please, specify your answer to yes/y or no/n');
// }

// let travel = prompt('Do you think that I like travelling?');

// switch(travel.toLowerCase()){

// case 'yes':
// case 'y':

//   //console.log('Yes I do, you seem that you read my introduction in the website');
//   alert('Yes I do, you seem that you read my introduction in the website');

//   break;

// case 'no':
// case 'n':

//   //console.log('You seem that you did not read my introduction -.-');
//   alert('You seem that you did not read my introduction -.-');

//   break;

// default:

//   // console.log ('Please, specify your answer to yes/y or no/n');
//   alert ('Please, specify your answer to yes/y or no/n');
// }

// let horror= prompt('Do you think that I am seeing you now?');

// switch (horror.toUpperCase()){

// case 'YES':
// case 'Y':

//   //   console.log('Of course not, its a game :D');
//   alert ('Of course not, its a game :D');

//   break;

// case 'NO':
// case 'N':

//   //   console.log('Do not be scared I am just kidding :D');
//   alert ('Do not be scared I am just kidding :D');
//   break;

// default:
//   //console.log('Please, specify your answer to YES/Y or NO/N');
//   alert ('Please, specify your answer to YES/Y or NO/N');
// }

// let senseOfhumor=prompt('Do you think that I have a high level sense of humor?');

// switch(senseOfhumor.toUpperCase()){

// case 'YES':
// case 'Y':

//   //   console.log('You are totaly right!!');
//   alert ('You are totaly right!!');

//   break;

// case 'NO':
// case 'N':

//   //   console.log('Come on dude, don not kill it -.-');
//   alert ('Come on dude, don not kill it -.-');
//   break;

// default:

//   //console.log('Please, specify your answer to YES/Y or NO/N');
//   alert ('Please, specify your answer to YES/Y or NO/N');
// }


// let developer= prompt('Do you think that I am the developer of this website?');

// switch (developer.toUpperCase()){

// case 'YES':
// case 'Y':

//   //   console.log('You are right');
//   alert ('You are right!');

//   break;

// case 'NO':
// case 'N':

//   //   console.log('WRONG!!!... of course I did');
//   alert ('WRONG!!!... of course I did');
//   break;

// default:

//   //console.log('Please, specify your answer to YES/Y or NO/N');
//   alert ('Please, specify your answer to YES/Y or NO/N');
// }

// alert ('Thank you for answer those silly questions ' + userName + ' I appreciate your time, and welcome to my personal blog');




for(let i=0; i<4; i++){

  let guessNumber= prompt('How many governorates in Jordan?');

  if (guessNumber==='12'){
    alert('Your answer is right, well done!');
    break;

  } else if(guessNumber>12){
    alert('Too high,try again!');
  }

  else if(guessNumber<12){
    alert('Too low, try again!');
  }
}

let correctAnswer= ('The correct answer is 12');
alert(correctAnswer);



outerLoop:
for(let i=0; i<6; i++){
  let capitalCity= ['tokyo', 'casablanca', 'moscow', 'amesterdam'];
  let favCity= prompt('What is my favorite capital city');

  if(i===5){
    alert(capitalCity);
  }

  for(let j=0; j<capitalCity.length;j++){

    if (favCity==='tokyo'|| favCity==='casablanca' || favCity==='moscow' || favCity==='amestrdam'){
      alert(`You are right!! my favorite capital cities are ${capitalCity}`);
      break outerLoop;
    }else if (favCity!=='tokyo'|| favCity!=='casablanca' || favCity!=='moscow' || favCity!=='amestrdam'){
      continue;
    }
  }
}
