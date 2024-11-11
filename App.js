import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntoSpiderverse from './assets/spiderverse.png';

const Stack = createStackNavigator();

class Principal extends React.Component {
  render() {
    return (
      <View>
        <Button title="Página 01" onPress={() => this.goToPagina01()} />
        <Button title="Página 02" onPress={() => this.goToPagina02()} />
        <Button title="Homem-Aranha no Aranhaverso" onPress={() => this.goToPagina03()} />
      </View>
    );
  }

  goToPagina01() {
    this.props.navigation.navigate("Pagina01");
  }

  goToPagina02() {
    this.props.navigation.navigate("Pagina02");
  }

  goToPagina03() {
    this.props.navigation.navigate("Pagina03");
  }
}

class Pagina01 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 01!!!"}</Text>
        <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
        <Text>{" "}</Text>
        <Button title="Página 02" onPress={() => this.props.navigation.navigate("Pagina02")} />
      </View>
    );
  }
}

class Pagina02 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 02!!!"}</Text>
        <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

class Pagina03 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 03!!!"}</Text>
        <Image source={IntoSpiderverse} style={{ width: 200, height: 250 }}/>
        <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Principal} />
          <Stack.Screen name="Pagina01" component={Pagina01} />
          <Stack.Screen name="Pagina02" component={Pagina02} />
          <Stack.Screen name="Pagina03" component={Pagina03} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
