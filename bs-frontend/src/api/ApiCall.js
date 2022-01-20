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

const getFilteredList = (filters) => {
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

const updateUserInfo = (firstName, lastName, email, password) => {
    axios.put(
        API_URL + `user/update`,
        {firstName, lastName, email, password},
        { headers: authHeader() }
    );
}

const getCart = () => {
    return axios.get(API_URL + `cart`, { headers: authHeader() })
}

const addToCart = (issueId) => {
    return axios.post(API_URL + `cart/add/${issueId}`, {}, { headers: authHeader() })
}

const payForItemsInCart = () => {
    return axios.post(API_URL + `cart/pay`, {}, { headers: authHeader() })
}

const addNewIssue = (dto) => {
    return axios.post(API_URL + `issue/add`, dto, { headers: authHeader() })
}

const getGenres = () => {
  return axios.get(API_URL + `book/genres`, {});
};

const getUserStats = () => {
  return axios.get(API_URL + `user/stats`, { headers: authHeader() });
}

const getAndSetPropositions = () => {
  return axios.get(API_URL + `book/recommended/first`, {});
}

const getIsRead = (book_id) => {
    return axios.get(API_URL + `rating/${book_id}/isRead`, { headers: authHeader() });
}

const deleteMyAccount = () => {
    return axios.delete(API_URL + `user/delete`, { headers: authHeader() });
}

const getOtherIssues = (issue_id) => {
    return axios.get(API_URL + `issue/${issue_id}/other`, {});
}

const promoteUser = (userId) => {
    return axios.put(API_URL + `user/${userId}/promote`, {}, { headers: authHeader() });
}

const findUsersByQuery = (query) => {
    return axios.get(API_URL + `user/find/${query}`, { headers: authHeader() });
}

const getAllBooksRatedByUser = (username) => {
    return axios.get(API_URL + `rating/${username}/all`, { headers: authHeader() });
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
    getCart,
    addToCart,
    payForItemsInCart,
    addNewIssue,
    updateUserInfo,
    getUserStats,
    deleteMyAccount,
    getOtherIssues,
    promoteUser,
    findUsersByQuery,
    getAllBooksRatedByUser
};

export default ApiCall;