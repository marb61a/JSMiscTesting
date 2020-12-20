import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Users extends Component {
    constructor(props){
        super(props);

        this.state = { usersCollection: [] };
    }

    render(){
        return(
            <div className="wrapper-users">
                <div className="container">

                </div>
            </div>
        )
    }
}