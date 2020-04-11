import { shallowMount } from '@vue/test-utils'
import Profile from '@/components/Profile'

describe('Profile.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Profile)
  })

  it('should render component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
