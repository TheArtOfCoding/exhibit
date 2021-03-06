import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, handleLogout } from '../redux/actions';

export class Index extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  componentDidMount() {
    this.props.fetchUser();
  }

  logout = async () => {
    await firebase.auth().signOut();
    this.props.handleLogout();
  };

  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return (
        <View style={this.styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={this.styles.container}>
        <Text>{currentUser.name} is Logged in!</Text>
        <Button title='Logout' onPress={() => this.logout()} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.userState.currentUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser, handleLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
