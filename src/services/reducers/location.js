import {UPDATE_LOCATION_PATH} from "../actions/location";

export const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_LOCATION_PATH:
            return {
                prevLocationPath: state.currentLocationPath ?? null,
                currentLocationPath: action.locationPath,
            };
        default:
            return state
    }
} 