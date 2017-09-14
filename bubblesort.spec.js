// beforeAll(function () {
//     spyOn(bubbleSort.prototype.swap, 'swap').and.callThrough(); 
//   });
  // it('how many times swap is called', function () {
  //   bubbleSort.swap();
  //   expect(bubbleSort.prototype.swap.calls.count()).toEqual(3);
  // });


describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles an array of one element', function(){
      expect( bubbleSort([1])).toEqual( [1] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles an array of multiple elements', function(){
      expect( bubbleSort([1,4,2,9,3,5]) ).toEqual( [1,2,3,4,5,9] );
    });
    it('how many times swap is called', function () {
      spyOn(window, 'swap').and.callThrough(); 
        bubbleSort( [1,4,2,9,3,5] )
        expect(swap.calls.count()).toBe(4)
        console.log('call count should be: ', swap.calls.count())
      // bubbleSort.prototype.swap();
      // expect(Bubble.swap.calls.count()).toEqual(4);
    });
  });