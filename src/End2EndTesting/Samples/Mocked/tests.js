describe( 'Testing highlight-match.html', function () {

  var URL = 'http://localhost:9080/End2EndTesting/Samples/Mocked/';

  describe( 'Testing Get All States', function () {
    beforeEach( function () {
      browser.get( URL );

      
    } );

    it( 'should add a name', function () {
      var nameList = element.all( by.repeater( 'state in states' ) );
      var count;
      nameList.then( function ( names ) {
        count = names.length;
        expect(count).toBe(2);
      } );
     
    } );
  } );
} );

