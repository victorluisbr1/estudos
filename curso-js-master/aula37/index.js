function somaImpar(num1,num2,num3) {

    let arrays = [num1,num2,num3];
    
    let soma = 0;
    
    let numImpar;
    
    for(let i = 0; i <arrays.length; i++) {
    
      numImpar = arrays[i] % 2;

      if (numImpar === 1) {
        soma += arrays[i];
      }
    } 

    if (numImpar != 1 && soma == 0) {
      console.log(' ')
    }

    return soma;
}
    
    console.log(somaImpar(4, 2, 6));