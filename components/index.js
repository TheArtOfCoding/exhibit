import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Form from './main/Form';
import Profile from './main/Profile';
import Details from './main/Details';

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen
          name='Form'
          component={Form}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Details'
          component={Details}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='plus-box' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          children={() => <Profile userDetails={currentUser} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='account-circle'
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.userState.currentUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
