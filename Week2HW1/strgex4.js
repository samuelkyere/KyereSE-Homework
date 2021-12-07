
    /*let prompt = require('prompt-sync')();
    console.log("Menu\n1. Add\n2. Subtract\n3. Multiple\n4. Divide\n5. Exit");
    let userOption = Number(prompt('Choose the option: '));
    let  result;
    if (userOption === 5) {
        console.log('Program ended')
    }
    else if (userOption === 1 || 2 || 3 || 4 ) {
        let num1 = Number(prompt('enter a number:'));
    let num2 = Number(prompt('enter a number:'));

    switch (userOption){
        case 1: 
       // if(userOption >=1 && userOption <=5 ); 
            result = num1 + num2;
            break;
        case 2: 
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        case 5:
            break ;
        default:
           console.log('Invalid Option');
           break  ;
        
        /*switch(num1=1 && num2=1)*/
    // for ( let num1=1; num1<=2; num1++)} */ 


    let prompt = require('prompt-sync')();
    console.log("Menu\n1. Add\n2. Subtract\n3. Multiple\n4. Divide\n5. Exit");  
    let userOption = Number(prompt('Choose the option: '));
    
    if (userOption === 5) {
        console.log('Program ended.');
    } else if (userOption === 1 || 2 || 3 || 4) {
        let num1 = Number(prompt('enter a number:'));
        let num2 = Number(prompt('enter a number:'));

    
    switch ( userOption) {
        case 1:
            console.log(num1 + num2);
            break;
        case 2:
            console.log(num1 - num2);
            break;
        case 3:
            console.log(num1 * num2);
            break;
        case 4:
            console.log(num1/num2);
            break;
        default:
            console.log('Error, please try again.');
            break;
    }
} else {
    console.log('Invalid, start switch');
}
