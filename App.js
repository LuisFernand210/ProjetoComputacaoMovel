import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tobey1 from './assets/Tobey1.png'
import Tobey2 from './assets/Tobey2.png'
import Tobey3 from './assets/Tobey3.png'
import Andrew1 from './assets/Andrew1.png'
import Andrew2 from './assets/Andrew2.png'
import Tom1 from './assets/Tom1.png'
import Tom2 from './assets/Tom2.png'
import Tom3 from './assets/Tom3.png'
import IntoSpiderverse from './assets/spiderverse.png'
import AcrossSpiderverse from './assets/spiderverse2.png'

const Stack = createStackNavigator();

class Principal extends React.Component {
  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-aranha" onPress={() => this.goToPagina01()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-aranha 2" onPress={() => this.goToPagina02()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-aranha 3" onPress={() => this.goToPagina03()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="O Espetacular Homem-Aranha" onPress={() => this.goToPagina04()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="O Espetacular Homem-Aranha 2" onPress={() => this.goToPagina05()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem Aranha: De Volta ao Lar" onPress={() => this.goToPagina06()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem Aranha: Longe de Casa" onPress={() => this.goToPagina07()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem Aranha: Sem Volta Para Casa" onPress={() => this.goToPagina08()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha no Aranhaverso" onPress={() => this.goToPagina09()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha: Através do Aranhaverso" onPress={() => this.goToPagina10()} />
        </View>
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

  goToPagina04() {
    this.props.navigation.navigate("Pagina04");
  }

  goToPagina05() {
    this.props.navigation.navigate("Pagina05");
  }

  goToPagina06() {
    this.props.navigation.navigate("Pagina06");
  }

  goToPagina07() {
    this.props.navigation.navigate("Pagina07");
  }

  goToPagina08() {
    this.props.navigation.navigate("Pagina08");
  }

  goToPagina09() {
    this.props.navigation.navigate("Pagina09");
  }

  goToPagina10() {
    this.props.navigation.navigate("Pagina10");
  }
}

class Pagina01 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 01!!!"}</Text>
        <Image source={Tobey1} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina02 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 02!!!"}</Text>
        <Image source={Tobey2} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina03 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 03!!!"}</Text>
        <Image source={Tobey3} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina04 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 04!!!"}</Text>
        <Image source={Andrew1} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina05 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 05!!!"}</Text>
        <Image source={Andrew2} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina06 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 06!!!"}</Text>
        <Image source={Tom1} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina07 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 07!!!"}</Text>
        <Image source={Tom2} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina08 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 08!!!"}</Text>
        <Image source={Tom3} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina09 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 09!!!"}</Text>
        <Image source={IntoSpiderverse} style={{ width: 200, height: 250 }}/>
      </View>
    );
  }
}

class Pagina10 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{"Página 10!!!"}</Text>
        <Image source={AcrossSpiderverse} style={{ width: 200, height: 250 }}/>
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
          <Stack.Screen name="Pagina04" component={Pagina04} />
          <Stack.Screen name="Pagina05" component={Pagina05} />
          <Stack.Screen name="Pagina06" component={Pagina06} />
          <Stack.Screen name="Pagina07" component={Pagina07} />
          <Stack.Screen name="Pagina08" component={Pagina08} />
          <Stack.Screen name="Pagina09" component={Pagina09} />
          <Stack.Screen name="Pagina10" component={Pagina10} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
