import React from 'react'
import { Logo } from '../components/Logo/Logo';
import LogoSvg from '../components/Logo/Logo'

describe('Logo', () => {
    it('returns an image with a svg as src', () => {
        const wrapper = shallow(<Logo />)
        const imgSrc = wrapper.find('img').src
        expect(imgSrc).toEqual(LogoSvg)
    })
})

