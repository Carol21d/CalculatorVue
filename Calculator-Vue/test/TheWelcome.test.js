import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TheWelcome from '../src/components/TheWelcome.vue'


describe.skip('TheWelcome', () => {
  test('wrapper contains a h1 with name Calculator', () => {
    const wrapper = mount(TheWelcome)
 
    expect(wrapper.find('h1').text()).toBe('Calculator')
  })
})

describe.skip('TheWelcome', () =>{
  it('contains a class named wrapper-tittle ', () =>{
    const wrapperClass = mount(TheWelcome)
    expect(wrapperClass.find('.wrapper-title').exists())
  
})
})

describe.skip('TheWelcome', () =>{
  test(' button contains button.id', () =>{
    const wrapperButton = mount(TheWelcome)
    expect(wrapperButton.find('button').attributes('#button.id'))
  })
})