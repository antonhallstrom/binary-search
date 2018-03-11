/**
 * @fileOverview Binary search function
 * It takes a sorted array and an item, if that items is in that array it returns it's index.
 * Each time it checks if the middle element is the same as the item you searched for.
 * If not, it updates low/or high by +1/-1.
 * @param {Array} list 
 * @param {number|string} item 
 */
function binarySearch(list, item) {
    let low = 0
    let high = list.length - 1

    while(low <= high) {
        let mid = (low + high) / 2
        let guess = list[mid]

        if (guess == item) {
            return mid
        }

        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

module.exports = binarySearch