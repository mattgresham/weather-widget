import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.APP_CONFIG = {
  API_ENDPOINT_WEATHER: ''
};

Enzyme.configure({ adapter: new Adapter() });
