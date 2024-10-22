function removeDuplicatas(array) {
    let resultado = []; 
  
    for (let i = 0; i < array.length; i++) {
      if (!resultado.includes(array[i])) {
        resultado.push(array[i]); 
      }
    }
  
    return resultado; 
  }
  
  console.log(removeDuplicatas([4, 2, 4, 8, 7, 7])); 
  