const initialState={
    username:'',
    id:'Bob Loblaw',
    image:'anpicture'
}

const GET_USER = 'GET_USER';
const UPDATE_USER = 'UDPATE_USER';

export function getUser({ id, username, image }) {
  return {
    type: GET_USER,
    payload: { id, username, image }
  };
}

export function updateUser(id, username, image) {
  return {
    type: UPDATE_USER,
    payload: { id, username, image }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        image: action.payload.image
      });

    case UPDATE_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        image: action.payload.image
      });

    default:
      return state;
  }
}