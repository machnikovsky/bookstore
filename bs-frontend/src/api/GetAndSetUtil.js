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

const getAndSetGenres = (setGenresAvailable) => {
    ApiCall.getGenres()
        .then(res => {
            return res.data;
        })
        .then(data => {
            setGenresAvailable(data);
            return data;
        })
        .catch(e => {
            console.log('Error retrieving genres: ', e.message);
            setGenresAvailable(null);
        });
}

const getAndSetFilteredList = (filters, set) => {
    ApiCall.getFilteredList(filters)
        .then(res => {
            return res.data;
        })
        .then(data => {
            set(data);
        })
        .catch(e => {
            console.log(e);
            set(null);
        });
}

const getAndSetIsIssueAvailable = (issueId, set) => {
    ApiCall.getIsIssueAvailable(issueId)
        .then(res => {
            return res.data;
        })
        .then(data => {
            set(data);
        })
        .catch(e => {
            console.log(e);
            set(null);
        });
}

const sellBookAndIncrementSold = (issueId, counter, set) => {
    ApiCall.sellAnIssue(issueId)
        .then(res => {
            return res.data;
        })
        .then(() => {
            set(counter + 1);
        })
        .catch(e => {
            console.log(e);
        });
}

const orderBookAndIncrementOrdered = (issueId, counter, set) => {
    ApiCall.orderAnIssue(issueId)
        .then(res => {
            return res.data;
        })
        .then(() => {
            set(counter + 1);
        })
        .catch(e => {
            console.log(e);
        });
}

const getAndSetUserRoles = (username, setRoles) => {
    ApiCall.getUserInfo(username)
        .then(res => {
            return res.data;
        })
        .then(data => {
            setRoles(data.roles);
        })
        .catch(e => {
            console.log(e);
            setRoles([]);
        });
}

const getAndSetCart = (setCartItems, setTotalPrice) => {
    ApiCall.getCart()
        .then(res => {
            return res.data;
        })
        .then(data => {
            setCartItems(data.cart_items);
            setTotalPrice(data.total_price);
        })
        .catch(e => {
            setCartItems([]);
            setTotalPrice(0);
            console.log('Error getting cart: ', e.response.data);
        });
}

const addToCartAndIncrementCart = (issueId, counter, set) => {
    ApiCall.addToCart(issueId)
        .then(res => {
            return res.data;
        })
        .then(() => {
            set(counter + 1);
        })
        .catch(e => {
            console.log(e);
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

const getAndSetOtherIssues = (id, set) => {
    ApiCall.getOtherIssues(id)
        .then(res => {
            return res.data;
        })
        .then(data => {
            set(data);
            console.log("Other issues: ", data);
        })
        .catch(e => {
            console.log('Error: ', e.response.data);
            set(null);
        });
}

const SearchUtil = {
    getAndSetAllIssues,
    getAndSetSingleIssue,
    getAndSetReviews,
    getAndSetPropositions,
    getAndSetIsRead,
    getAndSetGenres,
    getAndSetFilteredList,
    getAndSetIsIssueAvailable,
    sellBookAndIncrementSold,
    orderBookAndIncrementOrdered,
    getAndSetUserRoles,
    getAndSetCart,
    addToCartAndIncrementCart,
    getAndSetScoreAndReview,
    getAndSetOtherIssues
};

export default SearchUtil;