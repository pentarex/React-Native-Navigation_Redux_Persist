import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { bindActionCreators } from 'redux';

class ProfileView extends Component {
    render() {
        return (
            <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Profile View </Text>
                <Button title={'LogOut'} onPress={this.logoutClicked} />
            </View>
        );
    }

    logoutClicked = () => {
        this.props.fetchLogout();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchLogout: bindActionCreators(logout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
