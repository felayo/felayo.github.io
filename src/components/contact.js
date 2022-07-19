import React from 'react';
import Hero from '../components/hero'
import Axios from 'axios';
import Content from '../components/content';

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(
            <div>
                <Hero title="Let's talk"/>
                <Content>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="form-label" htmlFor="full-name">Full Name</div>
                            <input className="form-control" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </div>


                        <div className="form-group">
                            <div className="form-label" htmlFor="email">Email</div>
                            <input className="form-control" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <div className="form-label" htmlFor="message">Message</div>
                            <input className="form-control" id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </div>


                        <button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </form>
                </Content>
            </div>
        );
    }

}


export default Contact;