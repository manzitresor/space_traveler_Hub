import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Profile from '../pages/Profile';
import store from '../redux/store';

describe('Profile page testing', () => {
  it('should render Profile page', () => {
    const { container } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
