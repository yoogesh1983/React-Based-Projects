import React, { Component } from 'react';
import TextInputGroup_ref from '../../template/TextInputGroup_ref';
import addContactAction from '../../../event/action/AddContactAction';
import {Consumer} from '../../../event/Store';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */

/*
  This is for Uncontrolled component where the field are comming as props
*/
class AddContact extends Component {

  constructor(props)
  {
    super(props);

    //we will set this state by a rest call which happens as soon as the component will mount
    state: { title:''};

    this.idInput = React.createRef();
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  };

  static defaultProps = {
    id: '999',
    name: 'Krisha',
    phone: '7137322412',
    email: 'Krisha_45@gmail.com'
   };
   
  onsubmit = (dispatch, e) => {
    e.preventDefault();

    const contact = {
                      name: this.nameInput.current.value,
                      phone: this.phoneInput.current.value,
                      email: this.emailInput.current.value
                    }

    //check for errors
    const valid = this.validateContact(contact);

    if (valid)
    {
      addContactAction(contact, dispatch);

     //Finally redirect to home page
     this.props.history.push('/');
    }
  }

  
  render(){
    return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return this.addContact_ref(dispatch);
        }}
      </Consumer>
    );
  }


  addContact_ref(dispatch) 
  {
    const { id, name, email, phone, errors} = /*this.state*/ this.props;

    return (<div className="card mb-5">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={this.onsubmit.bind(this, dispatch)}>
          <TextInputGroup_ref name="name" placeholder="Enter Name" defaultValue={name} reference={this.nameInput} />
          <TextInputGroup_ref name="phone" placeholder="Enter phone" defaultValue={phone} reference={this.phoneInput} />
          <TextInputGroup_ref type="email" name="email" placeholder="Enter email" defaultValue={email} reference={this.emailInput} />
          <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
        </form>
      </div>
    </div>);
  }

  validateContact(contact) {
    const {name, phone, email } = contact;

    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' }
      });
      return false;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: 'phone is required' }
      });
      return false;
    }
    if (email === '') {
      this.setState({
        errors: { email: 'email is required' }
      });
      return false;
    }
    return true;
  }


  //Using Fetch to get request from rest call for more Information Go to ...... https://jsonplaceholder.typicode.com/
  componentDidMount()
  {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          this.setState({
              title: data.title,
          });
      })
  }
}

export default withRouter(AddContact);
