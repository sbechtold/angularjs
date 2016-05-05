describe("Testing Controller", function () {

    var stateService, stateFactory;
    beforeEach( function () {
        module( 'statesApp.factories', function ( $provide ) {
             $provide.factory( 'stateFactory', function ( $log ) {
                return {
                    query :  jasmine.createSpy().and.returnValue([{
                            "_id": "AK",
                            "name": "ALASKA",
                            "abbreviation": "AK",
                            "capital": "Juneau",
                            "mostPopulousCity": "Anchorage",
                            "population": 698473,
                            "squareMiles": 656425,
                            "timeZone1": "AKST (UTC-09)",
                            "timeZone2": "HST (UTC-10)",
                            "dst": "YES"
                        }])
                }})
            });

        module( 'statesApp.services' );
        inject( function ( _stateService_, _stateFactory_ ) {
            stateService = _stateService_;
            stateFactory = _stateFactory_;
      } );
    });

    it("test fetch states", function () {
       var data = stateService.all();
       expect(data.length).toBe(1);
       expect(data[0].name).toBe("ALASKA");

       // Jasmine enables all kinds of metadata about your calls
       console.log(stateFactory.query.calls.count()); // Number of calls
       console.log(stateFactory.query.calls.argsFor(0)); // Arguments for the first call

       expect(stateFactory.query.calls.count()).toBe(1);
       expect(stateFactory.query.calls.argsFor(0)).toEqual([]);

    });
});
