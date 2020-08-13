console.log('js');


//addToCollection function
//-----------------------
let collection = [];

function addToCollection( title, artist, year ){
  console.log( 'in addToCollection' );
  if( collection ){
    collection.push( title, artist, year );
    console.log( 'Awesome track dude!', collection );
  } // end if
} // end addToCollection

addToCollection( 'Be Something', 'Polo G', 2020 )
