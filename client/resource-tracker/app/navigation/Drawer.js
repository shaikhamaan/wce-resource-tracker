

import { StyleSheet, Text } from 'react-native';


import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Sidebar from '../components/Sidebar';

import MakeRequest from '../screens/MakeRequest';
import AllRequests from '../screens/AllRequests';
import ViewRequest from '../screens/ViewRequest';
import UserProfile from '../screens/UserProfile';
import { colors } from 'react-native-elements';
import ResourceList from '../screens/ResourceList';
import EditResoure from '../screens/EditResource';
import AddResource from '../screens/AddResource';
import ApproveResource from '../screens/ApproveResource';
const AppDrawer = createDrawerNavigator();

const drawerStyles = {
  drawerItemStyle: {
    backgroundColor: colors.grey5,
  },
  drawerLabelStyle: {
    color: "black",
    fontSize: 18
  }
}

export default function Drawer() {
  return (
    <>
      <NavigationContainer>
        <AppDrawer.Navigator
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{
            headerShown: true,
            drawerLabelStyle: {
              marginLeft: -20,
              fontSize: 18,
              color: "#00aced",
            },
            drawerStyle: {
            },
            drawerItemStyle: {
              paddingLeft: 20,
            },

          }}
        >
          <AppDrawer.Screen name='MakeRequest' component={MakeRequest} options={{
            headerTitle: 'Make Request',
            drawerLabel: 'Make Request',
            ...drawerStyles

          }} />
          <AppDrawer.Screen name='AllRequests' component={AllRequests} options={{
            headerTitle: 'All Requests',
            drawerLabel: 'All Requests',
            ...drawerStyles
          }} />

          <AppDrawer.Screen name='ViewRequest' component={ViewRequest} options={{
            headerTitle: 'View Request',
            drawerLabel: 'View Request',
            ...drawerStyles
          }} />

          <AppDrawer.Screen name='UserProfile' component={UserProfile} options={{
            headerTitle: 'User Profile',
            drawerLabel: 'User Profile',
            ...drawerStyles
          }} />

          <AppDrawer.Screen name='ApproveScreen' component={ApproveResource} options={{
            headerTitle: 'Resource Operations',
            drawerLabel: 'Resource Operations',
            ...drawerStyles
          }} />

          <AppDrawer.Screen name='ManageResources' component={ResourceList} options={{
            headerTitle: 'Manage Resources',
            drawerLabel: 'Manage Resources',
            ...drawerStyles
          }} />

          <AppDrawer.Screen name='AddResource' component={AddResource} options={{
            headerTitle: 'Add Resource',
            drawerLabel: 'Add Resource',
            ...drawerStyles
          }} />

          <AppDrawer.Screen name='EditResource' component={EditResoure} options={{
            headerTitle: 'Edit Resource',
            drawerLabel: 'Edit Resource',
            ...drawerStyles
          }} />



        </AppDrawer.Navigator>
      </NavigationContainer>
    </>
  );
}
