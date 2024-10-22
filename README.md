# Função para Remover Duplicatas em um Array

Este projeto contém uma função em JavaScript que remove valores duplicados de um array. O objetivo é retornar um novo array contendo apenas os valores únicos presentes no array original.

## Como funciona

A função `removeDuplicatas(array)` recebe um array como argumento e retorna um novo array sem elementos duplicados. Ela percorre o array original e, a cada elemento, verifica se ele já está presente no array de resultado. Se não estiver, o elemento é adicionado ao resultado.

### Exemplo

```javascript
function removeDuplicatas(array) {
    let resultado = [];
  
    for (let i = 0; i < array.length; i++) {
        if (!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }
  
    return resultado;
}

console.log(removeDuplicatas([4, 2, 4, 8, 7, 7])); // [4, 2, 8, 7]
