import { ADD_TODO, TOGGLE_TODO } from '../actionsTypes';

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  // console.log(state)
  switch(action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      let kkk = state.todos
      console.log(kkk)
      return {
        todos: [
          ...state.todos,
          { 
            content: content, 
            completed: false, 
            id: id 
          }
        ]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos =  state.todos.map((obj) => {
        // return obj.id === id ? { ...obj, completed: !obj.completed } : obj

        if (obj.id === id){
          return { ...obj, completed: !obj.completed }
        } else {
          return obj
        }
      })
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todos;
