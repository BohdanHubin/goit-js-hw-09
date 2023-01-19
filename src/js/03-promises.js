import { Notify } from 'notiflix/build/notiflix-notify-aio';

const fornRef = document.querySelector('.form');
const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

fornRef.addEventListener('submit', runCreatePromises)

function createPromise(position, delay) {
  return promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position,delay});
      }
    }, delay);
  });
}

function runCreatePromises(event) {
  event.preventDefault();

  let delay = +(delayRef.value);
  const amount = +(amountRef.value);
  const step = +(stepRef.value);
  
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
}
