import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import { changeLoadingStatus } from './redux/reducers/main';

import AppNavigator from './navigation/AppNavigator';
import { FullHeightView } from './constants/Layout';

const Container = ({ isLoadingComplete, skipLoadingScreen, _changeLoadingStatus }) => (
  !isLoadingComplete && !skipLoadingScreen
    ? (
      <AppLoading
        startAsync={() => {}}
        onError={error => console.warn(error)}
        onFinish={() => _changeLoadingStatus(true)}
      />
    ) : (
      <FullHeightView>
        <AppNavigator />
      </FullHeightView>
    )
);

export default connect(
  state => ({ isLoadingComplete: state.main.isLoadingComplete }),
  dispatch => ({
    _changeLoadingStatus: isLoadingComplete => dispatch(changeLoadingStatus(isLoadingComplete)),
  }),
)(Container);
