import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../Context'

export default class Liste extends Component {

    

    render() {

        return (
            <Consumer>
            {value =>{ return (
                <React.Fragment>
                    <h1 className="display-5 my-6">Mes contacts :</h1>
                    {value.contacts.map(contact =>(
                        <Contact
                        key={contact.id}
                        id={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        deleteClick={() => this.supprime(contact.id)}
                        />
                    ))}
                </React.Fragment>
            )}}
            </Consumer>
        )
       
    }
}
