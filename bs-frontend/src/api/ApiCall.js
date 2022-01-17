import axios from "axios";
import authHeader, {authHeaderJSON} from "../auth/AuthHeader";

const API_URL = "http://localhost:8080/";


const getFirstIssuesOfAllBooks = () => {
    return axios.get(API_URL + "issue/all/first", {});
};

const getFirstIssuesOfBooksByQuery = (query) => {
    return axios.get(API_URL + `issue/query/${query}`, {});
};


const getSingleIssue = (id) => {
    return axios.get(API_URL + `issue/${id}`, {});
};

const addRating = (dto) => {
    return axios.post(API_URL + `rating/add`, dto, { headers: authHeaderJSON() });
}

const getReviews = (id) => {
    return axios.get(API_URL + `rating/${id}/reviews`, {});
}

const getUserRating = (id) => {
    return axios.get(API_URL + `rating/${id}/user`, { headers: authHeader() });
}

const getFilteredList = (filters, page) => {
    //TODO: implement page logic
    return axios.post(API_URL + `issue/filter`, filters, {})
}

const getIsIssueAvailable = (issueId) => {
    return axios.get(API_URL + `issue/${issueId}/available`, { headers: authHeader() })
}

const sellAnIssue = (issueId) => {
    return axios.post(API_URL + `issue/${issueId}/sell`, {}, { headers: authHeader() })
}

const orderAnIssue = (issueId) => {
    return axios.post(API_URL + `issue/${issueId}/order`, {}, { headers: authHeader() })
}


const getUserInfo = (username) => {
    return axios.get(API_URL + `user/info/${username}`, { headers: authHeader() });
};












const getTrending = () => {
  return axios.get(API_URL + "movie/trending", {});
};

const getGenres = () => {
  return axios.get(API_URL + `book/genres`, {});
};

const getQueriedList = (query, page) => {
  return axios.get(API_URL + `movie/query/${query}?page=${page}`, {})
}

const getWatchedMovies = (username) => {
  return axios.get(API_URL + `watched/movie/all/${username}`, {});
}

const addTvShowToWatched = (username, tvShowId) => {
  return axios.post(API_URL + `watched/tv/add/${username}/${tvShowId}`, {}, {});
}

const getWatchedTvShows = (username) => {
  return axios.get(API_URL + `watched/tv/all/${username}`, {});
}

const addNewFriend = (username) => {
  return axios.post(API_URL + `user/friends/add/${username}`, {}, { headers: authHeader() });
}

const getAllFriends = () => {
  return axios.get(API_URL + `user/friends/all`, { headers: authHeader() });
}

const findFriendsByQuery = (query) => {
  return axios.get(API_URL + `user/friends/find/${query}`, { headers: authHeader() });
}

const getUserStats = () => {
  return axios.get(API_URL + `user/stats`, { headers: authHeader() });
}

const getAndSetPropositions = () => {
  return axios.get(API_URL + `book/recommended/first`, {});
}

const getIsRead = (book_id) => {
    return axios.get(API_URL + `rating/${book_id}/isRead`, { headers: authHeader() });
}

const getReview = (type, username, picture_id) => {
    return axios.get(API_URL + `watched/${type}/${picture_id}/${username}/review`, {});
}

const getRecentPictures = (type, id) => {
    return axios.get(API_URL + `watched/${type}/recent/${id}`, {});
}




const ApiCall = {
    getFirstIssuesOfAllBooks,
    getFirstIssuesOfBooksByQuery,
    getSingleIssue,
    addRating,
    getReviews,
    getAndSetPropositions,
    getIsRead,
    getUserRating,
    getGenres,
    getFilteredList,
    getIsIssueAvailable,
    sellAnIssue,
    orderAnIssue,
    getUserInfo,




    getTrending,
    getQueriedList,
    getWatchedMovies,
    addTvShowToWatched,
    getWatchedTvShows,
    addNewFriend,
    getAllFriends,
    findFriendsByQuery,
    getUserStats,
    getReview,
    getRecentPictures
};

export default ApiCall;