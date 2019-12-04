import React, { Component } from 'react'

//setting the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state
class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            description: '',
        }

        this.state = this.initialState
    }
//making function that will run every time a change is made to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs.
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const{ name, description } = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange} />
                <label>Description</label>
                <input 
                    type='text'
                    name='description'
                    value={description}
                    onChange={this.handleChange} />
                <input type='button' 
                    value='submit'
                    onClick={this.submitForm} />
            </form>
        );
    }
} 

export default Form;