
const ol = document.querySelector('ol');
const movies= [
    {
        name:'Teen Titans:Trouble in Tokyo',
        year:2007,
        director:'Michael Chang',
        picture: new URL('https://en.wikipedia.org/wiki/File:Trouble_in_Tokyo.jpg')
    },
    {
        name:'Madeas Big Happy Family',
        year:2011,
        director:' Tyler Perry', 
        picture: new URL('https://en.wikipedia.org/wiki/File:Madea%27s_Big_Happy_Family_Poster.jpg')
    },{
        name:'Coraline',
        year:2009,
        director:'Henry Selick',
        picture: new URL ('https://en.wikipedia.org/wiki/File:Coraline_poster.jpg')
    },{
        name:'The SpongebobSquarepants Movie',
        year:2004,
        director:'Stephen Hillenburg',
        picture:new URL ('https://en.wikipedia.org/wiki/File:The_SpongeBob_SquarePants_Movie_poster.jpg')
    },{
        name:'Jumanji',
        year:2017,
        director:'Jake Kasdan',
        picture: new URL('https://en.wikipedia.org/wiki/File:Jumanji_Welcome_to_the_Jungle.png')
    }
              
    
 ];




 const template = movies.map(movies=>`

 <li> 
 <p> ${movies.name}</p>
 <p> ${movies.year}</p>
 <p> ${movies.director}</p>
 <p>${movies.picture}</p>
 </li>
 `) 
//  console.log(template);
 ol.innerHTML=template.join('');
 