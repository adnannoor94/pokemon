import { Provider } from 'react-redux';
import { store } from '../state/store'
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Hero section render', () => {
  render(<Provider store={store}><App /></Provider>);
  const heroElement = screen.getByText(/Explore The World Of Pocket Monsters/i);
  expect(heroElement).toBeInTheDocument();
});
