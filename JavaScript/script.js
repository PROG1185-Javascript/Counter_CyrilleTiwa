let count = 0;
const countElement = document.getElementById('count');

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}

function updateCount() {
    countElement.textContent = count;
}
