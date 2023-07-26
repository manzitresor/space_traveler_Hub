import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('NavBar Test', () => {
  test('If Navigations are working', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const missionText = screen.getByText('Missions');
    expect(missionText).toMatchSnapshot();
  });
});
