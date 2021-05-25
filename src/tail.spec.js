const tail = require('./tail');

describe('Tail', () => {

    it('should return the tail of the array [1,2,3] as [2,3]', () => {
        let arr = [1,2,3];
        expect(tail(arr)).toEqual([2,3]);
    });

    it('should return the tail of the array [] as undefined', () => {
        let arr = [];
        expect(tail(arr)).toEqual(undefined);
    });

})