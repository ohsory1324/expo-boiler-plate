import { Dimensions, Platform, NativeModules } from 'react-native';
import styled, { css } from 'styled-components/native';

const { StatusBarManager } = NativeModules;

const { width, height } = Dimensions.get('window');

export const window = { width, height };

export const statusBarHeight = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export const FullHeightView = styled.SafeAreaView`
  padding-top: ${statusBarHeight};
  flex: 1;
`;

export const flexCenter = css`
  justify-content: center;
  align-items: center;
`;
