import ApiCall from "./ApiCall";

const getAndSetAllIssues = (set) => {
    ApiCall.getFirstIssuesOfAllBooks()
        .then(res => {
            set(res.data);
        })
        .catch(e => {
            console.log('Error getting all issues: ', e.message)
            set(null);
        });
}

const getAndSetQueriedListWithNewQuery = (query, set) => {
    ApiCall.getFirstIssuesOfBooksByQuery(query)
        .then(res => {
            set(res.data);
        })
        .catch(e => {
            console.log('Error getting book list by query: ', e.message);
            set(null);
        });
}

const getAndSetSingleIssue = (id, set) => {
    ApiCall.getSingleIssue(id)
        .then(res => {
            set(res.data);
        })
        .catch(e => {
            console.log('Error getting single book: ', e);
            set(null);
        });
}

const getAndSetReviews = (id, set) => {
    ApiCall.getReviews(id)
        .then(res => {
            set(res.data)
        })
        .catch(e => {
            console.log('Error: ', e);
            set(null);
        });
}

const getAndSetPropositions = (set) => {
    ApiCall.getAndSetPropositions()
        .then(res => {
            set(res.data);
        })
        .catch(e => {
            console.log('Error: ', e);
            set(null);
        });
}















const getAndSetGenres = (setGenres, type) => {
    return ApiCall.getGenres(type)
        .then(res => {
            return res.data;
        })
        .then(data => {
            setGenres(data);
            return data;
        })
        .catch(e => {
            console.log(e)
            setGenres(null);
        });
}

const getAndSetFilteredListWithNewPage = (filters, pictureList, setPictureList, page, type) => {
    ApiCall.getFilteredList(filters, page, type)
        .then(res => {
            return res.data;
        })
        .then(data => {
            if (Array.isArray(pictureList) && pictureList.length) {
                setPictureList(pictureList.concat(data));
            } else {
                setPictureList(data);
            }
        })
        .catch(e => {
            console.log(e);
            setPictureList(null);
        });
}

const getAndSetFilteredListWithNewFilterOrType = (filters, setPictureList, type) => {
    ApiCall.getFilteredList(filters, 1, type)
        .then(res => {
            return res.data;
        })
        .then(data => {
            setPictureList(data);
        })
        .catch(e => {
            console.log(e);
            setPictureList(null);
        });
}

const getAndSetQueriedListWithNewPage = (query, pictureList, setPictureList, page) => {
    ApiCall.getQueriedList(query, page)
        .then(res => {
            return res.data;
        })
        .then(data => {
            if (Array.isArray(pictureList) && pictureList.length) {
                setPictureList(pictureList.concat(data));
            } else {
                setPictureList(data);
            }
        })
        .catch(e => {
            setPictureList(null);
        });
}


const getAndSetTrending = (set, setSize) => {
    ApiCall.getTrending()
        .then(res => {
            return res.data;
        })
        .then(data => {
            set(data);
            setSize(data.length);
        })
        .catch(e => {
            console.log(e.message);
        });
}




const getAndSetIsRead = (book_id, set) => {
    return ApiCall.getIsRead(book_id)
        .then(res => {
            return res.data;
        })
        .then(data => {
            set(data);
            return data;
        })
        .catch(e => {
            console.log('Error: ', e);
            set(false);
            return false;
        });
}

const getAndSetScoreAndReview = (id, setScore, setReview) => {
    ApiCall.getUserRating(id)
        .then(res => {
            return res.data;
        })
        .then(data => {
            setScore(data.score);
            setReview(data.review);
        })
        .catch(e => {
            console.log('Error: ', e);
            setScore(null);
        });
}

const getAndSetRecentPictures = (id, setMovies, setTvs) => {
    ApiCall.getRecentPictures('movie', id)
        .then(res => {
            return res.data;
        })
        .then(data => {
            setMovies(data);
        })
        .catch(e => {
            console.log('Error: ', e);
            setMovies(null);
        });

    ApiCall.getRecentPictures('tv', id)
        .then(res => {
            return res.data;
        })
        .then(data => {
            setTvs(data);
        })
        .catch(e => {
            console.log('Error: ', e);
            setTvs(null);
        });
}


const SearchUtil = {
    getAndSetAllIssues,
    getAndSetQueriedListWithNewQuery,
    getAndSetSingleIssue,
    getAndSetReviews,
    getAndSetPropositions,
    getAndSetIsRead,



    getAndSetGenres,
    getAndSetFilteredListWithNewPage,
    getAndSetFilteredListWithNewFilterOrType,
    getAndSetQueriedListWithNewPage,
    getAndSetTrending,
    getAndSetScoreAndReview,
    getAndSetRecentPictures
};

export default SearchUtil;