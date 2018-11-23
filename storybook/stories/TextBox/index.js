import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import SendActionButton from '../SendActionButton';

export default class TextBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.sentText,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sentText !== this.props.sentText) {
      this.setState({
        value: this.props.sentText,
      });
    }
  }

  _handleTextChanged = text => {
    this.setState({
      value: text,
    });
  };

  _handleSend = () => {
    if (this.props.onSend) {
      this.props.onSend(this.state.value);
    }
  };

  render() {
    const { placeholder, maxLength, description, sending } = this.props;
    const { value } = this.state;

    const isSent =
      this.props.sentText !== undefined && value === this.props.sentText;

    const isAllowSend = !value || value.length === 0;

    return (
      <View style={styles.container}>
        <View style={styles.rowTop}>
          <TextInput
            style={styles.textInput}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            returnKeyType={'send'}
            underlineColorAndroid={'transparent'}
            multiline
            onChangeText={this._handleTextChanged}
            onSubmitEditing={this._handleSend}
          />
          <SendActionButton
            processing={sending}
            disabled={isAllowSend}
            done={isSent}
            onPress={this._handleSend}
          />
        </View>
        <View style={styles.rowBottom}>
          <Text style={styles.textDescription}>{description}</Text>

          <Text style={styles.counter}>{`${
            value ? value.length : 0
          }/${maxLength}`}</Text>
        </View>
      </View>
    );
  }
}

TextBox.defaultProps = {
  maxLength: 80,
  sending: false,
};

TextBox.propTypes = {
  onSend: PropTypes.func.isRequired,

  description: PropTypes.string,
  placeholder: PropTypes.string,
  sentText: PropTypes.string,
  maxLength: PropTypes.number,
  sending: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  rowTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
  },
  rowBottom: {
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    backgroundColor: 'transparent',
    marginRight: 16,
  },
  textDescription: {
    flex: 1,
    fontSize: 12,
    color: '#555',
    backgroundColor: 'transparent',
  },
  counter: {
    paddingLeft: 16,
    fontSize: 12,
    color: '#555',
    backgroundColor: 'transparent',
  },
});
