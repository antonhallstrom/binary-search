 const binarySearch = require('./binary-search')

describe('binarySearch', () => {
    it('returns index of item', () => { 
        // arrange
        const list = [1, 2, 3]
        const item = 1

        // act
        const search = binarySearch(list, item)
        
        // assert
        expect(search).toBe(0)
    })
    it('returns null if the list is not sorted', () => { 
        // arrange
        const list = [3, 2, 1]
        const item = 1

        // act
        const search = binarySearch(list, item)
        
        // assert
        expect(search).toBe(null)
    })
    it('returns null if the item is not found', () => { 
        // arrange
        const list = [1, 2, 3]
        const item = 4

        // act
        const search = binarySearch(list, item)
        
        // assert
        expect(search).toBe(null)
    })
})