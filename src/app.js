console.log("app.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Best. App. Ever!',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    </ol>
</div>
);

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