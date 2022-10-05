import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo"
import { client } from "./apollo"
import Starlinks from './src/starlinksComponent';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                    <Starlinks />
            </ApolloProvider>
        );
    }
}



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.body.appendChild(document.createElement('div')),
    )
})