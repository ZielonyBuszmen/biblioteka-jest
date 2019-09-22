import renderer from 'react-test-renderer';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import Gallery from '../Gallery/Gallery';

configure({adapter: new Adapter() });

describe("Gallery", () => {
    it("should render", () => {
        const imageList = [
            {
                image: 'photo.jpg',
                date: '20 July',
                likes: 13,
                comments: [],
            },
        ];

        const component = renderer
            .create(<Gallery imageList={imageList}/>)
            .toJSON();

        expect(component).toMatchSnapshot();
    });

    it("should render with enzyme", () => {
        const imageList = [
            {
                image: 'photo.jpg',
                date: '20 July',
                likes: 13,
                comments: [],
            },
        ];

        const component = shallow(<Gallery imageList={imageList} />);
        expect(component).toMatchSnapshot();

    });
});