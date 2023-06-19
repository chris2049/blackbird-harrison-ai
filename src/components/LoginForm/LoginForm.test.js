import { render, screen } from '@testing-library/react';
import LoginForm from '.';


const validatePassword = (_password) =>{
  return (_password.length >= 8 &&
      /[A-Z]/.test(_password) &&
      /[a-z]/.test(_password) &&
      /\d/.test(_password) &&
      /[^A-Za-z0-9]/.test(_password)
      );
}

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

it('fail if no upprrCase', ()=>{
  expect(validatePassword('pizzaguy1!')).toBe(false)
})

it('fail if no lowerCase', ()=>{
  expect(validatePassword('PIZZAGUY1!')).toBe(false)
})

it('fail if no number', ()=>{
  expect(validatePassword('Pizzaguy!')).toBe(false)
})

it('fail if shorter than 8', ()=>{
  expect(validatePassword('Piz1!')).toBe(false)
})

it('fail if no special characters', ()=>{
  expect(validatePassword('pizzaguy1')).toBe(false)
})

it('should pass', ()=>{
  expect(validatePassword('Pizzaguy!1')).toBe(true)
})