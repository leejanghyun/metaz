import {jsonStringify} from '../'

describe('jsonStringify', () => {
  it('should return string', async () => {
    const result = jsonStringify({
      foo: 'foo',
    })
    expect(result).toBe('{"foo":"foo"}')
  })
})
