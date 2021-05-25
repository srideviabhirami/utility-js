const min = require('./min');

describe('Min', () => {

    it('should return the minimum of the array [3,2,1] as 1', () => {
        let arr = [3,2,1];
        expect(min(arr)).toEqual(1);
    });

    it('should return minimum of empty array as undefined', () => {
            let arr = [];
            expect(min(arr)).toEqual(undefined);
    });

})