const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    test('should be type array', async () => {
       expect(typeof shuffleArray).toBe('array')
    })
    test('should match items in "array"', async () => {
        expect(shuffleArray).toBe('array')
    })
})