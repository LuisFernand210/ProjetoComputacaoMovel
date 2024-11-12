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
          <Button title="Homem-Aranha" onPress={() => this.goToPagina01()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha 2" onPress={() => this.goToPagina02()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha 3" onPress={() => this.goToPagina03()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="O Espetacular Homem-Aranha" onPress={() => this.goToPagina04()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="O Espetacular Homem-Aranha 2" onPress={() => this.goToPagina05()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha: De Volta ao Lar" onPress={() => this.goToPagina06()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha: Longe de Casa" onPress={() => this.goToPagina07()} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button title="Homem-Aranha: Sem Volta Para Casa" onPress={() => this.goToPagina08()} />
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

  goToPagina01() {this.props.navigation.navigate("Homem-Aranha");}
  goToPagina02() {this.props.navigation.navigate("Homem-Aranha 2");}
  goToPagina03() {this.props.navigation.navigate("Homem-Aranha 3");}
  goToPagina04() {this.props.navigation.navigate("O Espetacular Homem-Aranha");}
  goToPagina05() {this.props.navigation.navigate("O Espetacular Homem-Aranha 2");}
  goToPagina06() {this.props.navigation.navigate("Homem-Aranha: De Volta ao Lar");}
  goToPagina07() {this.props.navigation.navigate("Homem-Aranha: Longe de Casa");}
  goToPagina08() {this.props.navigation.navigate("Homem-Aranha: Sem Volta Para Casa");}
  goToPagina09() {this.props.navigation.navigate("Homem-Aranha no Aranhaverso");}
  goToPagina10() {this.props.navigation.navigate("Homem-Aranha: Através do Aranhaverso");}
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
          <Stack.Screen name="Homem-Aranha" component={Pagina01} />
          <Stack.Screen name="Homem-Aranha 2" component={Pagina02} />
          <Stack.Screen name="Homem-Aranha 3" component={Pagina03} />
          <Stack.Screen name="O Espetacular Homem-Aranha" component={Pagina04} />
          <Stack.Screen name="O Espetacular Homem-Aranha 2" component={Pagina05} />
          <Stack.Screen name="Homem-Aranha: De Volta ao Lar" component={Pagina06} />
          <Stack.Screen name="Homem-Aranha: Longe de Casa" component={Pagina07} />
          <Stack.Screen name="Homem-Aranha: Sem Volta Para Casa" component={Pagina08} />
          <Stack.Screen name="Homem-Aranha no Aranhaverso" component={Pagina09} />
          <Stack.Screen name="Homem-Aranha: Através do Aranhaverso" component={Pagina10} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
