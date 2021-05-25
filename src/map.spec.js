const {map,cube,identity,addValue} = require('./map')
describe("Map", () => {

it('should return the cube of the array [1,2,3] as [1,8,27]', () => {
        let arr = [1,2,3];
        expect(map(arr,cube)).toEqual([1,8,27]);
    });

it('should return the cube of empty array [] as []', () => {
        let arr = [];
        expect(map(arr,cube)).toEqual([]);
});

it('should return the identity of the array [1,2,3] as [1,2,3]', () => {
        let arr = [1,2,3];
        expect(map(arr,identity)).toEqual([1,2,3]);
});

it('should return the identity of empty array [] as []', () => {
        let arr = [];
        expect(map(arr,identity)).toEqual([]);
});

it('should return the array of values as [10,11] by adding 1 to the value of the objects [{x:9},{x:10}]', () => {
        let arrayOfObjects = [{x:9},{x:10}];
        expect(map(arrayOfObjects,addValue)).toEqual([10,11]);
});

it('should return the empty array when empty array is given for map function', () => {
        let arrayOfObjects = [];
        expect(map(arrayOfObjects,addValue)).toEqual([]);
});

})