
test( "chr ord" , function ( ) {

	var i ;

	for ( i = 0 ; i < 20000 ; ++i ) {

		deepEqual( char.ord( char.chr( i ) ) , i ) ;

	}


} ) ;
