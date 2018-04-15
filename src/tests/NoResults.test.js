import React from 'react'
import { NoResults } from '../components/NoResults/NoResults';

describe('NoResults', () => {
    it ('returns a div with class NoResults', () => {
        const wrapper = shallow(<NoResults />)
        expect(wrapper.hasClass('NoResults')).toEqual(true)
    })
})