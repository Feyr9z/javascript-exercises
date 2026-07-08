// para = document.querySelector('p');

// for (let i = 20; i > 10; i--) {
//     para.textContent = `value: ${i}`;
// }

/*
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.addEventListener('click', () => {
    let n = Number(prompt('Enter number: ', 2));
    showEvenOrOdd(n);
});

function showEvenOrOdd(n) {
    if (isEven(n)) {
        para.textContent = `${n} adalah bilangan genap`;
    } else {
        para.textContent = `${n} adalah bilangan ganjil`;
    }
}

function isEven(n) {
    return n % 2 === 0;
}
*/

/*const btn = document.querySelector('button');
// const para = document.querySelector('p');

btn.addEventListener('click', () => {
    let n = Number(prompt('Enter number: '));
    printFizzBuzz(n);
});

const printFizzBuzz = (n) => {
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};
*/
/*
const container = document.querySelector('#container');

const content = document.createElement('div');
const champions = document.createElement('h3');
const rival = document.createElement('p');

champions.textContent = 'FOUR TIMES WORLD CHAMPIONS';
rival.textContent = 'best rival is SIR LEWIS HAMMILTON';

content.classList.add('content');
content.textContent = 'MAX VERSTAPPEN';

container.appendChild(content);
container.appendChild(rival);
container.insertBefore(champions, rival);

container.style.color = '#0A2947';
container.style.backgroundColor = '#F3E4C9';
container.style.padding = '20px';
*/

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         alert(event.target.id);
//     });
// });

/*
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    console.log(event.isTrusted);
});

btn.dispatchEvent(new MouseEvent('click'));
*/
