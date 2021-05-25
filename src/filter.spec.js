const {filter,returnTrue,returnFalse,checkIfGreaterThanOne,checkIfUpperCase} = require('./filter')

describe("Filter", () => {

it('should return the given array [1,2,3] when value is passed to returnTrue filter', () => {
        let arr = [1,2,3];
        expect(filter(arr,returnTrue)).toEqual([1,2,3]);
});


it('should return empty array when value is passed to returnTrue filter', () => {
        let arr = [];
        expect(filter(arr,returnTrue)).toEqual([]);
    });

it('should return empty array when value is passed to returnFalse filter', () => {
        let arr = [1,2,3];
        expect(filter(arr,returnFalse)).toEqual([]);
});

it('should return empty array when value is passed to returnFalse filter', () => {
        let arr = [];
        expect(filter(arr,returnTrue)).toEqual([]);
    });

it('should return array of values with value greater than 1', () => {
        let arr = [1,2,3];
        expect(filter(arr,checkIfGreaterThanOne)).toEqual([2,3]);
});

it('should return empty array when empty array is passed to checkIfGreaterThanOne filter', () => {
        let arr = [];
        expect(filter(arr,checkIfGreaterThanOne)).toEqual([]);
});

it('should filter and return an array of uppercase characters', () => {
        let arr = ['a','B','c','D'];
        expect(filter(arr,checkIfUpperCase)).toEqual(['B','D']);
});

it('should filter and return an empty array of if no upper case charaters are found', () => {
        let arr = ['a','b','c','d'];
        expect(filter(arr,checkIfUpperCase)).toEqual([]);
});


})