describe("Testing Filters", function () {

    var $controller, $filter;

    var testScope, injector, data = [
                { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
                { "Name":"Chuck", "Age":42, "Gender":"Male", "Id":2 },
                { "Name":"John", "Age":25, "Gender":"Male", "Id":3 }];

    describe("testFixture: Local Filter", function () {
        beforeEach( function () {
            module( 'filterApp' );
            inject( function ( $injector, $rootScope ) {
                testScope = $rootScope.$new();
                $controller = $injector.get("$controller");
            });
        });

        it("testCase: ageGreaterThan", function () {
            testScope = $controller("MainController");
            testScope.minAge = 30;
            expect(testScope.minAge).toBe(30);
            data.forEach(function (one) {
                var result = one.Age > testScope.minAge;
                expect(testScope.ageGreaterThan(one)).toBe(result);
            });
        });
    });

    describe("testFixture: Reusable Filter", function () {
        var filter;
        beforeEach( function () {
            module( 'filterApp.filters' );
            inject( function ( $injector ) {
                $filter = $injector.get('$filter');
            });
        });

        it("testCase: overTheHill", function () {
            filter = $filter("overTheHill");
            var result = filter(data);
            expect(result.length).toBe(1);
            expect(result).toContain({ "Name":"Chuck", "Age":42, "Gender":"Male", "Id":2 });
            expect(result).toContain(data[1]);
        });
    });

    describe("testFixture: Complex Reusable Filter", function () {
        var filter;
        beforeEach( function () {
            module( 'complexFilterApp.filters' );
            inject( function ( $injector ) {
                $filter = $injector.get('$filter');
            });
        });

        it("testCase: greaterThan", function () {
            filter = $filter("greaterThan");
            var result = filter(data, 40, "Age");
            expect(result.length).toBe(1);
            expect(result).toContain({ "Name":"Chuck", "Age":42, "Gender":"Male", "Id":2 });
        });
    });
});
