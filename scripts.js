var height = prompt( "Podaj wysokość choinki" );

        
function rysujChoinke( height ){
    for( var i = 1; i <= height; i++ ){
      var star = "";
      for( var j = 0; j < i * 2 - 1; j++ ){
            star += "*";       
      }
     console.log( star );
    }
}

rysujChoinke( height );