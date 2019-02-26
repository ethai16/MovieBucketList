

function listReducer(state, action) {

    if (state === undefined){
        return {
            watchList:[],
            archive:[]
        }
    }
    switch(action.type){
        case "addMovieArchive":
            for (var i = 0; i < state.archive.length; i++) {
                if (state.archive[i].movieData.title ===  action.movieData.title) {
                    return state;
                }
            }

            return {
                ...state,
                archive: state.archive.concat({ movieTitle: action.movieData.title, movieData: action.movieData })
            }

        case 'addMovieWatchlist':
        for (var i = 0; i < state.watchList.length; i++) {
            if (state.watchList[i].movieData.title===  action.movieData.title) {
                return state;
            }
        }

        return {
            ...state,
            watchList: state.watchList.concat({ movieTitle: action.movieData.title, movieData: action.movieData })
        }

        case "removeMovieArchive":
            const updateArchive = state.archive.filter(movie =>
                movie.movieTitle !== action.movieData.movieTitle)
            return {
                ...state,
                archive: updateArchive
            }
        case "removeMovieWatchlist":

        const updateWatchList = state.watchList.filter(movie =>
            movie.movieTitle !== action.movieData.movieTitle)


        return {
            ...state,
            watchList: updateWatchList
        }
        case "moveMovieToArchive":

            for (var i = 0; i < state.archive.length; i++) {
                if (state.archive[i].movieData.title ===  action.movieTitle) {
                    return {
                        ...state,
                        watchList: state.watchList.filter(movie => movie.movieTitle !== action.movieTitle),
                    };
                }
            }


            return {
                ...state,
                watchList: state.watchList.filter(movie => movie.movieTitle !== action.movieTitle),
                archive: state.archive.concat({ movieTitle: action.movieTitle, movieData: action.movieData })
            }

        default:
        return state
    }
}

export default listReducer