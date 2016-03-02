/*

Write a test using the angular mocking framework which will create a mock productFactory
and return data

You should (at a minimum) test the all() service method
*/
describe("Testing Controller", function () {
    var productService;
    beforeEach( function () {
        module( 'productApp.factories', function ( $provide ) {
             $provide.factory( 'productFactory', function ( $log ) {
               var data = [{
                       "_id": "56d68af3b4f8cbc7effa44b5",
                       "odata.metadata": "http://services.odata.org/V3/Northwind/Northwind.svc/$metadata#Products/@Element",
                       "productID": 2,
                       "productName": "Chang",
                       "supplierID": 1,
                       "categoryID": 1,
                       "quantityPerUnit": "24 - 12 oz bottles",
                       "unitPrice": 19,
                       "unitsInStock": 17,
                       "unitsOnOrder": 40,
                       "reorderLevel": 25,
                       "discontinued": false
                   }];
                return {
                    query : function () {
                    return data;
                  },
                  update:function(one) {
                    data[0] = one;
                    return one;
                  }
                }})
            });

        module( 'productApp.services' );
        inject( function ( _productService_ ) {
            productService = _productService_;
      } );
    });

    it("test fetch products", function () {
       var data = productService.all();
       expect(data.length).toBe(1);
       expect(data[0].productName).toBe("Chang");

    });
});
