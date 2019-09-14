export const SETPROJNAME = 'SETPROJNAME'
export const SETLISTNAME = 'SETLISTNAME'

const initialState = {
  projectName: "",
  listName: "",
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SETPROJNAME:
      return {
        ...state,
        projectName: action.value
      };
    case SETLISTNAME:
      return {
        ...state,
        listName: action.value
      }
    default:
      return state
  }
}

export const setProjName = (projName) => {
  return dispatch => {
    dispatch({
      type: SETPROJNAME,
      value: projName
    })
  }
}

export const setListName = (listName) => {
  return dispatch => {
    dispatch({
      type: SETLISTNAME,
      value: listName
    })
  }
}
