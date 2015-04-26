
test( "ord" , function ( ) {

	deepEqual( char.ord( "z" ) - char.ord( "a" ) + 1 , 26 ) ;
	deepEqual( char.ord( "Z" ) - char.ord( "A" ) + 1 , 26 ) ;
	deepEqual( char.ord( "9" ) - char.ord( "0" ) + 1 , 10 ) ;

} ) ;
