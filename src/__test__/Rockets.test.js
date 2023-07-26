import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../pages/Rockets';
import store from '../redux/store';

describe('Rockets component Test', () => {
  test('should render Rockets', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
