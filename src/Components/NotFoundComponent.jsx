import React, { Component } from 'react';

export default class NotFoundComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage:'Something Went Wrong'
        }
        this.goHome = this.goHome.bind(this);
    }

    componentDidMount() {
        try {
            this.setState({errorMessage:this.props.location.state.error.message});
        }
        catch(err) {
            this.setState({errorMessage:"Something went wrong!"});
        }
    }

    goHome() {
        this.props.history.push('/employees');
    }

    render() {
        return (
        <div>
            <h3 className="alert alert-danger">{this.state.errorMessage}</h3>
            <button type="button" className="btn btn-primary" onClick={this.goHome} style={{marginLeft: "10px"}}>Go Home</button>
        </div>
        );
    }
}