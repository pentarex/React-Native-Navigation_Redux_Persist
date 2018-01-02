import React, { Component } from 'react';
import {  View, Text, Button, } from 'react-native';
import { connect } from 'react-redux';

class RegisterView extends Component {
  render() {
    return (
      <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> RegisterView </Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);