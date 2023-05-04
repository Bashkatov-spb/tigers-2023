const str = 'Elbrus Bootcamp';

const regexp = /(\w+) (\w+)/;

console.log(str.replace(regexp, '$2: $1 <===='));
