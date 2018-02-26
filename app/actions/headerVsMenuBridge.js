// @flow
import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: boolean
};

export const HEADER_MENU_BRIDGE_SHOW_MENU = 'HEADER_MENU_BRIDGE_SHOW_MENU';

export function drawMenuBridge() {
  return {
    type: HEADER_MENU_BRIDGE_SHOW_MENU
  };
}

export function drawMenu() {
  return (dispatch: (action: actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
