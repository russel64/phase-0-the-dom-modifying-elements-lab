// Write your code here!

const problem = document.querySelector('#main');

problem.remove();

const newHeader = document.createElement('h1');



newHeader.id = 'victory';

newHeader.textContent = 'Bill Russell is the champion';

document.body.append(newHeader);