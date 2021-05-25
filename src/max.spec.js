const max = require('./max');

describe('Max', () => {

    it('should return the maximum of the array [1,2,3] as 3', () => {
        let arr = [1,2,3];
        expect(max(arr)).toEqual(3);
    });

    it('should return maximum of empty array as undefined', () => {
            let arr = [];
            expect(max(arr)).toEqual(undefined);
    });

})