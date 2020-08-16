console.log('js');


//addToCollection function
//-----------------------
let collection = [];

function addToCollection( title, artist, year ){
  console.log( 'in addToCollection' );
  if( collection ){
    collection.push( {
      title: title,
      artist: artist,
      year: year
    } );
    console.log( 'Awesome track dude!', collection );
  } // end if
} // end addToCollection

addToCollection( 'Be Something', 'Polo G', 2020 );
addToCollection( 'Drops of Jupiter', 'Train', 2001 );
addToCollection( 'Redbone', 'Childish Gambino', 2016 );


// STRETCH GOALS!!!

// findRecord( title ) function
//-----------------------------
function findRecord( title ){
  console.log( 'in findRecord' );
  for( i = 0; i < collection.length; i++ ){
    // what to put in conditional
    if( collection[ i ].title === title ){
      return collection.indexOf( collection[ i ] );
    } // end if
  } // end for
  return false;
} // end findRecord

console.log( 'Should be index 0', findRecord( 'Be Something' ) );
console.log( 'Should be index 2', findRecord( 'Redbone' ) );
console.log( 'Should be false', findRecord( 'Jump Around' ) );


// allBy( artist ) function
//-------------------------
/* function allBy( artist ){
  for( i = 0; i < collection.length; i++ ){
    if( collection.artist === artist ){
      collection.push( {
        artist: 'Train'
      } );
      return collection;
    } // end if
  } // end for
} // end allBy

console.log( allBy( 'Train' ) );

*/





//
