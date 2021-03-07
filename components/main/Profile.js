import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleLogout } from '../../redux/actions';
import Button from '../common/Button';
import { Styles } from '../../styles';

export class Profile extends Component {
  logout = async () => {
    await firebase.auth().signOut();
    this.props.handleLogout();
  };

  render() {
    const { userDetails } = this.props;

    if (!userDetails) {
      return (
        <View style={Styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={Styles.container}>
        <Text style={Styles.titleText}>Hola, {userDetails.name} 👋</Text>
        <Text style={Styles.contentText}>
          This is your email: {userDetails.email}
        </Text>
        <View style={{ marginTop: 40 }}>
          <Button label='Logout' onPress={this.logout} />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleLogout }, dispatch);

export default connect(null, mapDispatchToProps)(Profile);
