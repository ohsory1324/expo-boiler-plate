import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { FullHeightView, flexCenter } from '../constants/Layout';

const Container = styled(FullHeightView)`
  ${flexCenter}
`;

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Text>Hello World</Text>
      </Container>
    );
  }
}

export default HomeScreen;
