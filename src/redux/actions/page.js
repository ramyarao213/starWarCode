import {
  GET_CHAR_REQUEST,
  GET_CHARA_SUCCESS,
  GET_CHAR_FAIL,
    UPDATE_CHAR,
    GET_HOME_REQUEST
} from '../constants/page'

function setCharacters(data) {
  return {
      type: UPDATE_CHAR,
      payload: data
  }
}


function enrichInformation(data){
        return data.results.sort(function (a, b) {
            a.homeworld = getHomeWorld(a);
            b.homeworld = getHomeWorld(b);
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
        });
    }


export function getCharacters() {
  return dispatch => {
    dispatch({
      type: GET_CHAR_REQUEST
    });

    return fetch(`https://swapi.co/api/people/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      }).then(response => {
            return enrichInformation(response);
      }).then(data => {
        dispatch({
          type: GET_CHARA_SUCCESS
        });
        dispatch(setCharacters(data));
      })
      .catch(error => {
        dispatch({
          type: GET_CHAR_FAIL,
          payload: error.message
        })
      })
  }
}


 function getHomeWorld(obj) {
    return dispatch => {
        dispatch({
            type: GET_HOME_REQUEST
        });
        return fetch(obj.homeworld)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw new Error(`${response.status}: ${response.statusText}`)
            })
            .catch(error => {
                dispatch({
                    type: GET_CHAR_FAIL,
                    payload: error.message
                })
            })
    }
}

