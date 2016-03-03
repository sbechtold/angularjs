/*
    Create a series of tests to verify that your Product Page has 
    successfully loaded
*/
describe( 'Testing Our HTTP Page', function () {

  var URL = 'http://localhost:9080/HTTP/Solutions/Basic/';

  describe( 'Testing Get All Products', function () {
    beforeEach( function () {
      browser.get( URL );
    } );

    it( 'testCase: Verify all have been loaded', function () {
      var nameList = element.all( by.repeater( 'product in products' ) );
      var count;
      nameList.then( function ( names ) {
        count = names.length;
        expect(count).toBe(78);
      } );
     
    } );
  } );
} );

