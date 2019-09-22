import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import App from '../App';

configure({adapter: new Adapter() });

describe("App", () => {
    it("should render single image",  () => {
        const wrapper = shallow(<App />);
        wrapper.setState({
            imageId: 0,
            imageList: ['firtst', 'second'],
        });

        expect(wrapper).toMatchSnapshot();
    });

    it("should render gallery", () => {
        const wrapper = shallow(<App />);
        wrapper.setState({
            imageId: null,
        });

        expect(wrapper).toMatchSnapshot();
    });
});