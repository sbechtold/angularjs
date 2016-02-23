var express   = require( 'express' ),
    _           = require( 'underscore' ),
    State     = require( '../models/State' );

var router = express.Router();

router.route( '/' )

  .get( function ( req, res ) {
    State.find( function ( err, emps ) {
      if ( err ) {
        res.send( err );
      }
      res.json( emps );
    } );
  } );

router.route( '/:abbrev' )
  .get( function ( req, res ) {
    State.findOne( { 'abbreviation' : req.params.abbrev }, function ( err, emp ) {
      if ( err ) {
        res.send( err );
      }
      res.json( emp );

    } )
  } );

module.exports = router;
    