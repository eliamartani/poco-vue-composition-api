import { get as getProfile } from '../../../src/services/profile'

beforeEach(() => {
  fetch.resetMocks()
})

describe('profile.js', () => {
  it('should fetch data', async () => {
    const expected = JSON.stringify({
      results: [
        {
          name: {
            title: 'mr',
            first: 'brad',
            last: 'gibson'
          }
        }
      ]
    })

    fetch.mockResponseOnce(expected)

    const response = await getProfile()
    const received = JSON.stringify(response)

    expect(received).toEqual(expected)

    expect(fetch.mock.calls.length).toEqual(1)
  })
})
