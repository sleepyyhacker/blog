import usersReducer from './usersReducer'
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
posts: postsReducer,
users: usersReducer
});
