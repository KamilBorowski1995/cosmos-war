import uniqid from "uniqid";

export const initialState = {
  PlayerX: 0,
  Rock: [],
  Bullet: [],
  WindowSize: [0, 0],
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_WINDOW_SIZE":
      return { ...state, WindowSize: [action.sizeX, action.sizeY] };

    case "MOVE_RIGHT":
      if (state.PlayerX < state.WindowSize[0] - 100) {
        return { ...state, PlayerX: state.PlayerX + 8 };
      } else return { ...state };

    case "MOVE_LEFT":
      if (state.PlayerX > 100) {
        return { ...state, PlayerX: state.PlayerX - 8 };
      } else return { ...state };

    case "MOVE_ROCK":
      const arrayMoveRock = state.Rock.map(({ posX, posY, id }) => {
        if (posY > -64) {
          return {
            id: id,
            posY: posY - 2,
            posX: posX,
          };
        } else {
          return undefined;
        }
      }).filter((el) => el !== undefined);
      return { ...state, Rock: arrayMoveRock };

    case "NEW_ROCK":
      const newArrayRock = [
        ...state.Rock,
        { id: uniqid(), posX: state.PlayerX - 24, posY: state.WindowSize[1] },
      ];
      return { ...state, Rock: newArrayRock };

    case "NEW_BULLET":
      const newArrayBullet = [
        ...state.Bullet,
        { id: uniqid(), posX: state.PlayerX + 24, posY: 84 },
      ];
      return { ...state, Bullet: newArrayBullet };

    case "MOVE_BULLET":
      const arrayMoveBullet = state.Bullet.map(({ posX, posY, id }) => {
        if (posY < 1000) {
          return {
            id: id,
            posY: posY + 4,
            posX: posX,
          };
        } else {
          return undefined;
        }
      }).filter((el) => el !== undefined);

      return { ...state, Bullet: arrayMoveBullet };

    case "DESTRUCTION_ROCK":
      let idDeleteRock = null;
      let idDeleteBullet = null;
      const colision = state.Rock.forEach((elRock) => {
        state.Bullet.forEach((elBullet) => {
          if (
            elRock.posX <= elBullet.posX &&
            elRock.posX + 64 >= elBullet.posX
          ) {
            if (elRock.posY <= elBullet.posY) {
              idDeleteRock = elRock.id;
              idDeleteBullet = elBullet.id;
            }
          }
        });
      });

      const RockAfterDelete = state.Rock.filter((el) => el.id !== idDeleteRock);
      const BulletAfterDelete = state.Bullet.filter(
        (el) => el.id !== idDeleteBullet
      );

      // return { ...state };
      return { ...state, Rock: RockAfterDelete, Bullet: BulletAfterDelete };

    default:
      throw new Error();
  }
}
