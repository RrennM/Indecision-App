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

// Using a function to check if
function getLocation (location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}
const user = {
    name: 'Tyson',
    age: 33,
    location: 'Portland'
}
// Ternary operation and logical && operator
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);