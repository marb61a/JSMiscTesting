import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: ''
        };
    }

    onChangeUserName(e){
        this.setState({ name: e.target.value });
    }

    onChangeUserEmail(e){
        this.setState({ email: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const userObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post("http://localhost:4000/users/create", userObject)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        
        this.setState({
            name: '',
            email: ''
        });
    }

    render(){
        return(
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>

                </form>
            </div>
        );
    }
};
