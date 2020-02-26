const INITIAL_STATE = {  
  isRTL:false
};

export default function settingsReducer(state = INITIAL_STATE, action) {  
  switch (action.type) {
      case "CHANGE_TO_AR":
      alert('a gya hai bahi...');
          return {
              ...state,             // keep the existing state,
              isRTL:true
          }
      case "CHANGE_TO_EN":
      alert('a gya hai bahi bahi...');
          return {
              ...state,             // keep the existing state,
              isRTL:false
          };
      default:
          return state;
  }
};