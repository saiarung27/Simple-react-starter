import React from "react";
import ReactDom from "react-dom";
// Create a new component, This component should produce some html elements.

const Root = function() {
    return <div>Hello World!</div>;
}


// Take this produced html to put it on page.
ReactDom.render(<Root/>, document.querySelector('.container'));