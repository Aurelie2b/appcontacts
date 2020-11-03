import React, { Component } from 'react'

export default class ToDoList extends Component {

        state = {
            element : ' ',
            items : []
        }   

        onChange =  (event) => {
            this.setState({
                [event.target.name] : event.target.value
            })

            console.log(this.state.element);

        }


        onSubmit = (event) => {
            event.preventDefault();
            this.setState({
                element : '',
                items : [...this.state.items, {element: this.state.element}]
            })
        }


        deleteItem = (index) => {
            const arr = this.state.items;
            arr.splice(index, 1);
            this.setState({
                items : arr
            })
        }

        renderTodo = () => {
            
            return this.state.items.map((item, index) =>{
                return(
                    <React.Fragment>
                        <div className = "card mb-3" key={index}>
                            <div className="card-body">
                            <h4>{item.element}
                            <i className= "fas fa-times" 
                            style={{cursor: 'pointer', float: 'right', color : 'red'}}
                            onClick={() => this.deleteItem(index)}
                            ></i>
                            </h4>
                            </div>
                        </div>
                    </React.Fragment>
                )

            })
        } 


    render() {
        return (
            <React.Fragment>
                <div className="card my-3">

                    <h1 className="display-5 my-5">To-do list : </h1>

                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <label htmlFor="element">Ajouter une chose à faire</label>
                                <input type="text" 
                                className="form-control form-control-lg"
                                name="element"
                                onChange={this.onChange}
                                value={this.state.element}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">Ajouter</button>

                        </form>         
                    </div>
                </div>
                <h1 className="display 5 my-5">Choses à faire :</h1>
                {this.renderTodo()}

            </React.Fragment>
        )
    }
}
