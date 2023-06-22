import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './components/Card/Card';

test('renders Card component', () => {
  const games = [
    {
      id: 1,
      name: 'Game 1',
      background_image: 'image1.jpg',
      genres: [{ name: 'Genre 1' }, { name: 'Genre 2' }],
    },
    {
      id: 2,
      name: 'Game 2',
      background_image: 'image2.jpg',
      genres: [{ name: 'Genre 3' }, { name: 'Genre 4' }],
    },
  ];

  render(<Router>
    <Card games={games} />
  </Router>);

  const cardElements = screen.getAllByRole('link');
  expect(cardElements.length).toBe(games.length);

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const linkElement = screen.getByText(game.name);
    expect(linkElement).toBeInTheDocument();

    const imgElement = screen.getByAltText(game.name);
    expect(imgElement).toBeInTheDocument();

    const genreElement = screen.getByText(`Género: ${game.genres.map((genre) => genre.name).join(', ')}.`);
    expect(genreElement).toBeInTheDocument();
  }
});