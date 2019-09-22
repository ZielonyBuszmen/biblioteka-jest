import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import CommentInput from '../../Image/CommentInput';

configure({adapter: new Adapter()});

describe('CommentInput', () => {
    it('should add new comment', () => {
        const commentHandler = jest.fn();

        const component = 
            <CommentInput imageId={5} addCommentHandler={commentHandler} />;
        
        const wrapper = shallow(component);
        wrapper.setState({
            author: 'Rod Stanley',
            text: 'This photo is the best!',
        });

        const form = wrapper.find('form');
        expect(form.length).toBe(1);

        form.simulate('submit', {preventDefault: () => {}});

        expect(commentHandler.mock.calls.length).toBe(1);
        expect(commentHandler.mock.calls[0][0]).toBe(5);
        expect(commentHandler.mock.calls[0][1]).toBe('Rod Stanley');
        expect(commentHandler.mock.calls[0][2]).toBe('This photo is the best!');
    });
});