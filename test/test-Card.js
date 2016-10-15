import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {should} from 'chai';
should();

import Card from '../components/Card';


describe('Card component', () => {
    it('Renders div with correct className', () => {
        let renderer = TestUtils.createRenderer();
        renderer.render(<Card />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
    });
    it('Card has a <p> tag', () => {
        let title = 'Hello';

        let renderer = TestUtils.createRenderer();
        renderer.render(<Card title={title} />);
        let result = renderer.getRenderOutput();
        let p = result.props.children.type;
        p.should.equal('p');
    });
    it('Card has a title', () => {
        let title = 'Hello';

        let renderer = TestUtils.createRenderer();
        renderer.render(<Card title={title} />);
        let result = renderer.getRenderOutput();

        let cardTitle = result.props.children.props.children;
        cardTitle.should.equal(title);
    });
});
