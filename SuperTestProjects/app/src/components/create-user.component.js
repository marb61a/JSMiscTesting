import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

    }

    onChangeUserName(e){
        this.setState({ name: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();

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
