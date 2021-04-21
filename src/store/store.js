export const initialState = {
  PlayerX: 0,
  RockY: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "MOVE_RIGHT":
      return { ...state, PlayerX: state.PlayerX + 8 };

    case "MOVE_LEFT":
      return { ...state, PlayerX: state.PlayerX - 8 };

    case "MOVE_ROCK":
      return { ...state, RockY: state.RockY + 2 };

    default:
      throw new Error();
  }
}
