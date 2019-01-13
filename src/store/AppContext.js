import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    constructor(){
        super()

        this.state = {
            isMenuOpened: false,
            isPhotoWindowOpened: false,  
            imageIndex: 0      
        }
    }

    changeImageIndex = (lastIndex, idx) => {
        if(idx < 0)
            this.setState({ imageIndex: lastIndex })
        else if(idx > lastIndex)
            this.setState({ imageIndex: 0 })
        else
            this.setState({ imageIndex: idx })
    }

    render() {
        return(
            <div>
                <Context.Provider value={{
                    state: {...this.state},
                    onUpdateMenuOpened: () => { this.setState({ isMenuOpened: !this.state.isMenuOpened }) },
                    onUpdatePhotoWindowOpened: (idx) => { this.setState({ isPhotoWindowOpened: !this.state.isPhotoWindowOpened, imageIndex: idx }) },
                    onChangeImageIndex: (arr, idx) => { this.changeImageIndex(arr, idx) },
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
