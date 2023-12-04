import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from 'components/App';
import { Label } from 'src/constants';

describe('App', () => {
  it('should render', async () => {
    render(<App />);
    expect(await screen.findByRole('heading', { name: Label.App })).toBeInTheDocument();
  });
});
