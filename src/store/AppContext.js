import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    constructor(){
        super()

        this.state = {
            isMenuOpened: false,
            isPhotoWindowOpened: false,        
        }
    }

    render() {
        return(
            <div>
                <Context.Provider value={{
                    state: {...this.state},
                    onUpdateMenuOpened: () => { this.setState({ isMenuOpened: !this.state.isMenuOpened }) },
                    onUpdatePhotoWindowOpened: () => { this.setState({ isPhotoWindowOpened: !this.state.isPhotoWindowOpened }) },
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
