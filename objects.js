
const ol = document.querySelector('ol');
const movies= [
    {
        name:'Teen Titans:Trouble in Tokyo',
        year:2007,
        director:'Michael Chang',
        picture: 'https://upload.wikimedia.org/wikipedia/en/3/39/Trouble_in_Tokyo.jpg'
    },
    {
        name:'Madeas Big Happy Family',
        year:2011,
        director:' Tyler Perry', 
        picture: 'https://upload.wikimedia.org/wikipedia/en/3/30/Madea%27s_Big_Happy_Family_Poster.jpg'
    },{
        name:'Coraline',
        year:2009,
        director:'Henry Selick',
        picture: 'https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg'
    },{
        name:'The SpongebobSquarepants Movie',
        year:2004,
        director:'Stephen Hillenburg',
        picture: 'https://upload.wikimedia.org/wikipedia/en/3/31/The_SpongeBob_SquarePants_Movie_poster.jpg'
    },{
        name:'Jumanji',
        year:2017,
        director:'Jake Kasdan',
        picture: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png'
    
    }
              
    
 ];




 var template = movies.map(movies=>`

 <li> 
 <p> ${movies.name}</p>
 <p> ${movies.year}</p>
 <p> ${movies.director}</p>
 <img src = "${movies.picture}">
 </li>
 `)
 ol.innerHTML=template.join('');
 