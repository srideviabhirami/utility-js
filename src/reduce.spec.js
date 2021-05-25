const add = require('./add');
const reduce = require('./reduce');

describe('Reduce', () => {

    it('should return 10 when array is empty and initial value is 10 for reducer', () => {
        let arr = [];
        expect(reduce(arr,add,10)).toEqual(10);
    });

    it('should return a string when an array of characters is passed to reducer with initialValue', () => {
            let arr = ['a','b','c'];
            expect(reduce(arr,add,'z')).toEqual('zabc');
        });

    it('should return a string when an array of characters is passed to reducer without initialValue', () => {
                let arr = ['a','b','c'];
                expect(reduce(arr,add)).toEqual('abc');
            });

    it('should return undefined when empty array is passed to reducer', () => {
            let arr = [];
            expect(reduce(arr,add)).toEqual(undefined);
    });

})