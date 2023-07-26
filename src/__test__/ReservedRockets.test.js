/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReservedRockets from '../pages/reservedRockets';
import '@testing-library/jest-dom/extend-expect';

const mock = configureMockStore();

describe('ReservedRockets Component Test', () => {
  test('Renders reserved rockets', () => {
    // Mock data for reserved rockets
    const mockRockets = [
      {
        id: 1,
        name: 'Rocket 1',
        reserved: true,
      },
      {
        id: 2,
        name: 'Rocket 2',
        reserved: true,
      },
    ];

    // Create a mock Redux store with the necessary state
    const store = mock({
      rockets: {
        data: mockRockets,
      },
    });

    // Render the component with the mocked store
    const { getByText } = render(
      <Provider store={store}>
        <ReservedRockets />
      </Provider>,
    );

    // Check if the component renders the rocket names
    expect(getByText('Rocket 1')).toBeInTheDocument();
    expect(getByText('Rocket 2')).toBeInTheDocument();
  });

  test('Renders "You have not any Reserved Rocket" when there are no reserved rockets', () => {
    // Mock data for no reserved rockets
    const mockRockets = [
      {
        id: 3,
        name: 'Rocket 3',
        reserved: false,
      },
    ];

    // Create a mock Redux store with the necessary state
    const store = mock({
      rockets: {
        data: mockRockets,
      },
    });

    // Render the component with the mocked store
    const { getByText } = render(
      <Provider store={store}>
        <ReservedRockets />
      </Provider>,
    );

    // Check if the component renders the message for no reserved rockets
    expect(getByText('You have not any Reserved Rocket')).toBeInTheDocument();
  });
});
