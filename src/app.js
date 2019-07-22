console.log("app.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Best. App. Ever!',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault();
};

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
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);