const head = require('./head');

describe('Head', () => {

    it('should return the head of the array [1,2,3] as 1', () => {
        let arr = [1,2,3];
        expect(head(arr)).toEqual(1);
    });

    it('should return the head of the array [] as undefined', () => {
            let arr = [];
            expect(head(arr)).toEqual(undefined);
    });

})