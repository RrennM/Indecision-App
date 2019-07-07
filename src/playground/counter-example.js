let count = 0;
const subtractOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};
const addOne = () => {
    count++;
    renderCounterApp();
};


const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={addOne}>+1</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();