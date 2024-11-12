import React from 'react';
import { Text, View, Button, Image, Vibration, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina01');
      const savedRating = await AsyncStorage.getItem('rating_Pagina01');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina01', this.state.status);
      await AsyncStorage.setItem('rating_Pagina01', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Tobey1} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina02');
      const savedRating = await AsyncStorage.getItem('rating_Pagina02');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina02', this.state.status);
      await AsyncStorage.setItem('rating_Pagina02', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Tobey2} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina03');
      const savedRating = await AsyncStorage.getItem('rating_Pagina03');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina03', this.state.status);
      await AsyncStorage.setItem('rating_Pagina03', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Tobey3} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina04 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina04');
      const savedRating = await AsyncStorage.getItem('rating_Pagina04');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina04', this.state.status);
      await AsyncStorage.setItem('rating_Pagina04', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Andrew1} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina05 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina05');
      const savedRating = await AsyncStorage.getItem('rating_Pagina05');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina05', this.state.status);
      await AsyncStorage.setItem('rating_Pagina05', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Andrew2} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina06 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina06');
      const savedRating = await AsyncStorage.getItem('rating_Pagina06');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina06', this.state.status);
      await AsyncStorage.setItem('rating_Pagina06', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Tom1} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina07 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina07');
      const savedRating = await AsyncStorage.getItem('rating_Pagina07');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina07', this.state.status);
      await AsyncStorage.setItem('rating_Pagina07', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Tom2} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina08 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina08');
      const savedRating = await AsyncStorage.getItem('rating_Pagina08');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina08', this.state.status);
      await AsyncStorage.setItem('rating_Pagina08', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Tom3} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina09 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina09');
      const savedRating = await AsyncStorage.getItem('rating_Pagina09');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina09', this.state.status);
      await AsyncStorage.setItem('rating_Pagina09', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={IntoSpiderverse} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
      </View>
    );
  }
}

class Pagina10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'não assisti',
      rating: '',
    };
  }

  async componentDidMount() {
    try {
      const savedStatus = await AsyncStorage.getItem('status_Pagina10');
      const savedRating = await AsyncStorage.getItem('rating_Pagina10');
      if (savedStatus !== null) this.setState({ status: savedStatus });
      if (savedRating !== null) this.setState({ rating: savedRating });
    } catch (error) {
      console.log('Erro ao carregar dados:', error);
    }
  }

  saveData = async () => {
    try {
      await AsyncStorage.setItem('status_Pagina10', this.state.status);
      await AsyncStorage.setItem('rating_Pagina10', this.state.rating);
      alert('Dados salvos!');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
    Vibration.vibrate(100);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={AcrossSpiderverse} style={{ width: 200, height: 250 }} />

        <Text>Status:</Text>
        <Picker
          selectedValue={this.state.status}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue) => this.setState({ status: itemValue })}
        >
          <Picker.Item label="Não assisti" value="não assisti" />
          <Picker.Item label="Quero assistir" value="quero assistir" />
          <Picker.Item label="Assisti" value="assisti" />
        </Picker>

        <Text>Nota (1 a 10):</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 50, textAlign: 'center' }}
          keyboardType="numeric"
          value={this.state.rating}
          onChangeText={(text) => this.setState({ rating: text })}
          maxLength={2}
        />

        <Button title="Salvar" onPress={this.saveData} />
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
