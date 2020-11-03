import React, {Component} from 'react'

const Context = React.createContext();

const reducer = (state, action) => {

    switch(action.type) {
        case 'DELETE_CONTACT'
        :
        return {
            contacts: state.contacts.filter(contact =>
            contact.id !== action.payload)
        };
        case 'ADD_CONTACT'
        :
        return{
            contacts: [action.payload, ...state.contacts]
        }
        default: return state;
    }
}

export class Provider extends Component{

    state = { 
        contacts : [
            {
                id : 1,
                nom : "Ibrahim",
                email : "ibrahim@gmail.com",
                tel : "555-555-555",
            },
            {
                id : 2,
                nom : "Aurélie",
                email : "aurelie@gmail.com",
                tel : "555-555-555",
            },
            {
                id : 3,
                nom : "Jane",
                email : "jane@gmail.com",
                tel : "555-555-555",
            },
            {
                id : 4,
                nom : "Toto",
                email : "toto@gmail.com",
                tel : "555-555-555",
            },
        ],
        dispatch: action => {
            this.setState(state =>reducer(state, action))
        }

    }

render() {
    return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
    )
}
}

export const Consumer = Context.Consumer;