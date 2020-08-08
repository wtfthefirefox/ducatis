const initialState = {
    items: [],
    activeSlide: 0,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEXT_SLIDE': 
            if (state.activeSlide + 1 > action.payload) {
                return {
                    ...state,
                    activeSlide: 0
                }
            }

            return {
                ...state,
                activeSlide: state.activeSlide + 1
            }
        case 'PREV_SLIDE': 
            if (state.activeSlide - 1 < 0) {
                return {
                    ...state,
                    activeSlide: action.payload
                }
            }

            return {
                ...state,
                activeSlide: state.activeSlide - 1
            }
        case 'ITEMS_LOADED':
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case 'CHANGE_ACTIVE_SLIDE':
            return {
                ...state,
                activeSlide: action.payload
            }
        default: 
            return state
    }
}

export default reducer;