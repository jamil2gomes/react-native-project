import React from 'react';
import {Container, Title} from './styles';
import {Image} from 'react-native';

import imgLogo from '../../assets/logo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Image source={imgLogo} />
      <Title>Faça o seu logon</Title>
    </Container>
  );
};

export default Login;
