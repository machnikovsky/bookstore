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
    return axios.get(API_URL + `book/${id}/issue`, {});
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










const getTrending = () => {
  return axios.get(API_URL + "movie/trending", {});
};

const getGenres = (type) => {
  return axios.get(API_URL + `movie/genres?type=${type}`, {});
};

const getFilteredList = (filters, page, type) => {
  return axios.post(API_URL + `movie/filter?page=${page}&type=${type}`, Object.fromEntries(filters), {})
}

const getQueriedList = (query, page) => {
  return axios.get(API_URL + `movie/query/${query}?page=${page}`, {})
}

const getUserInfo = (username) => {
  return axios.get(API_URL + `user/info/${username}`, { headers: authHeader() });
};

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




    getTrending,
    getGenres,
    getFilteredList,
    getQueriedList,
    getUserInfo,
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