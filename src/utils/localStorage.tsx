import { user } from "../type/user";

export const authenticated = (user: user, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}