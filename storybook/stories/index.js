import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  boolean,
  color,
  text,
  radios,
  withKnobs,
  number,
} from '@storybook/addon-knobs';

import CenterView from './CenterView';
import TextBox from './TextBox';
import SendActionButton from './SendActionButton';

storiesOf('TextBox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('general', () => (
    <TextBox
      sentText={text('Text which sent', 'Sent')}
      placeholder={'Why are you raising funds?'}
      description={
        'This note will appear on your Pop-Up Store to all visitors.'
      }
      maxLength={number('maxLength', 80)}
      sending={boolean('Sending', false)}
      onSend={text => {}}
    />
  ));

storiesOf('SendActionButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('disabled', () => {
    return (
      <SendActionButton
        disabled={boolean('Disabled', true)}
        processing={boolean('Processing', false)}
        done={boolean('Done', false)}
        onPress={() => {}}
      />
    );
  })
  .add('active', () => {
    return (
      <SendActionButton
        disabled={boolean('Disabled', false)}
        processing={boolean('Processing', false)}
        done={boolean('Done', false)}
        onPress={() => {}}
      />
    );
  })
  .add('processing', () => {
    return (
      <SendActionButton
        disabled={boolean('Disabled', false)}
        processing={boolean('Processing', true)}
        done={boolean('Done', false)}
        onPress={() => {}}
      />
    );
  })
  .add('done', () => {
    return (
      <SendActionButton
        disabled={boolean('Disabled', false)}
        processing={boolean('Processing', false)}
        done={boolean('Done', true)}
        onPress={() => {}}
      />
    );
  });
