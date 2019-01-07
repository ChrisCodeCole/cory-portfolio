import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    render() {
        return(
            <div>
                <Context.Provider value={{

                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        );
    }
}

export function connectWithStore(Container) {
    return class extends Component {
        render() {
            return <Context.Consumer>
                {(context) => <Container {...context} {...this.props} />}
            </Context.Consumer>
        }
    }
}
