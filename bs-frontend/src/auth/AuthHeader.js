export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('JwtToken'));
  
    if (user && user.jwt) {
      return { Authorization: 'Bearer ' + user.jwt };
    } else {
      return {};
    }
}

export function authHeaderJSON() {
    const user = JSON.parse(localStorage.getItem('JwtToken'));

    if (user && user.jwt) {
        return {
            "Authorization": 'Bearer ' + user.jwt,
            "Content-Type": 'application/json'
        };
    } else {
        return {};
    }



}