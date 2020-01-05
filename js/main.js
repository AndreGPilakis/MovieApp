var API_KEY = "1786ed5c";

$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText =  $('#searchText').val();
        getMovies(searchText);
        //Disables form from POSTing
        e.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com?s='+searchText+"&apikey="+API_KEY)
    .then((response) =>{
        let movies = response.data.Search;
        let output = '';
        console.log(movies);

        $.each(movies, (index, movie) =>{
            //Constructing output 
            output += `
            <div class="col-md-3">
                <div class="well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}</h5>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary href="#">Movie Details </a>
                </div>
            </div>
            `;
        });

        $('#movies').html(output);
    })
    .catch((err) => {
        console.log(err);
    });
}