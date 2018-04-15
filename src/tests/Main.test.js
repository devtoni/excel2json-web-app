import React from 'react'
import renderer from 'react-test-renderer'
import { Main } from '../components/Main/Main';

describe('Main', () => {
    it('starts with an empty array for the jsonFile', () => {
        const tree = renderer.create(<Main />).toJSON
        expect(tree).toMatchSnapshot()
    })
})