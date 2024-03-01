// LoginScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../path/to/LoginScreen';

describe('LoginScreen', () => {
  it('should display the email input field', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    expect(getByPlaceholderText('Email')).toBeTruthy();
  });

  it('allows entering email', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });
  
});
