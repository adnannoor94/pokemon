import { Provider } from 'react-redux';
import { store } from '../state/store'
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('List renders', async () => {
    const { container } = render(<Provider store={store}><App /></Provider>);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const listElement = container.querySelector('ul');
    expect(listElement).toBeInTheDocument();
    expect(listElement?.children.length).toBe(20);

    // Click on the second li item
    const secondLiItem = listElement?.children[1]; // Note: Index is zero-based
    secondLiItem ? fireEvent.click(secondLiItem) : null;

    const backLink = container.querySelector('i');
    expect(backLink).toBeInTheDocument();

    await new Promise(resolve => setTimeout(resolve, 1500));

    const secondPokemonName = screen.getByText(/Ivysaur/i);
    expect(secondPokemonName).toBeInTheDocument();
});
