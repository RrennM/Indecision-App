'use strict';

console.log("app.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Best. App. Ever!',
    options: ['One', 'Two']

    // JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;
var subtractOne = function subtractOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};
var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: subtractOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
