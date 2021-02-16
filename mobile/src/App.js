import React, {useState} from 'react';
import { LogBox, Text} from 'react-native';

import {
  Container, Content, Logo, NewOrderContainer
} from './styles';

//COMPONENTS
import Button from './components/Button';
import logo from './images/logo.png';
import Modal from './components/Modal';
import Orders from './components/Orders';


LogBox.ignoreLogs(['Unrecognized WebSocket']);

export default function App() {
    const [isModalVisible, setisModalVisible] = useState(false);

  function handleOpenModal(){
    setisModalVisible(true);
  }

  function handCloseModal(){
    setisModalVisible(false);
  }

  return (
    <>
    <Modal visible={isModalVisible} onRequestClose={handCloseModal}/>
      <Container>
        <Content>
          <Logo source={logo}/>   
          <Text>Orders!</Text>
          <Orders/>
        </Content>
        <NewOrderContainer>
            <Button onPress={handleOpenModal}>
                <Button.Label>Novo Pedidio</Button.Label>
            </Button>
        </NewOrderContainer>
      </Container>
    </>
  );
}
