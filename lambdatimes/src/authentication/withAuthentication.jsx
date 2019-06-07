import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const withAuthentication = LoginContainer => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        loggedInUsername: "",
        enteredUsername: ""
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }

    login() {
      window.localStorage.setItem("username", this.state.enteredUsername);
      this.setState({
        loggedInUsername: this.state.enteredUsername
      })
      this.toggle();
    }

    logout() {
      window.localStorage.removeItem("username");
      this.setState({
        loggedInUsername: "",
        enteredUsername: ""
      })
    }

    onChangeUsername(event) {
      console.log(event.target.value);
      this.setState(
        {
          enteredUsername: event.target.value
        }
      )
    }

    getLoggedInUsername() {
      const username = window.localStorage.getItem("username");
      this.setState({
        loggedInUsername: username
      })
    }

    componentWillMount() {
      this.getLoggedInUsername();
    }

    render() {
      const message = this.state.loggedInUsername ? <span onClick={this.logout.bind(this)}> WELCOME, {this.state.loggedInUsername.toUpperCase()}</span> : <span onClick={this.toggle}>LOG IN</span>
      return (
        <LoginContainer>
          {message}
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="usernameInput">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="usernameInput"
                    placeholder=""
                    onChange={this.onChangeUsername.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="passwordInput">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="passwordInput"
                    placeholder=""
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.login.bind(this)}>
                Login
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </LoginContainer>
      );
    }
  };
};

export default withAuthentication;
