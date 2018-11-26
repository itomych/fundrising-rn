import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import imgSend from '../res/send.png';
import imgDone from '../res/done.png';

export default function SendActionButton({ processing, disabled, done }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={disabled ? styles.containerDisabled : styles.containerActive}
      disabled={disabled || processing || done}>
      {processing ? (
        <ActivityIndicator size={'small'} color={'#fff'} />
      ) : (
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={done ? imgDone : imgSend}
        />
      )}
    </TouchableOpacity>
  );
}

SendActionButton.defaultProps = {
  processing: false,
  disabled: false,
  done: false,
};

SendActionButton.propTypes = {
  processing: PropTypes.bool,
  disabled: PropTypes.bool,
  done: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  containerActive: {
    height: 28,
    width: 28,
    borderRadius: 28 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(88, 165, 255, 1)',
  },
  containerDisabled: {
    height: 28,
    width: 28,
    borderRadius: 28 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(88, 165, 255, 0.4)',
  },
  image: {
    height: 20,
    width: 20,
    tintColor: '#fff',
  },
});
