import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CompanyLogo from '../CompanyLogo.vue'

describe('LogoComponent', () => {
  it('renders the logo with the correct src, alt, and size', () => {
    const wrapper = mount(CompanyLogo, {
      props: {
        src: '/test-logo.svg',
        width: '100',
        height: '50',
      },
    })

    const img = wrapper.find('img')

    expect(img.attributes('src')).toBe('/test-logo.svg')
    expect(img.attributes('width')).toBe('100')
    expect(img.attributes('height')).toBe('50')
  })

  it('renders the default logo if no src is provided', () => {
    const wrapper = mount(CompanyLogo)
    const img = wrapper.find('img')
    
    expect(img.attributes('src')).toBe('/ex-initial-logo.svg')
  })
})
