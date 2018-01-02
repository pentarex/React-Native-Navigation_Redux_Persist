import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator, } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../redux/actions/loginActions';
import routes from '../rnn/routes';

class LoginView extends Component {
  render() {
    return (
      <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Login View </Text>
        <Button title={'Login'} onPress={this.loginClicked} />
        <Button title={'Register'} onPress={this.registerClicked} />
        <ActivityIndicator animating={this.props.loginReducer.isFetching} size={'large'} />
      </View>
    );
  }

  loginClicked = () => {
    this.props.fetchLogin('username', 'password');
  }

  registerClicked = () => {
    this.props.navigator.push({ screen: routes.REGISTER_ROUTE });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchLogin: bindActionCreators(login, dispatch) // it doesnt matter how we will name the property as long as it points to the right method
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
