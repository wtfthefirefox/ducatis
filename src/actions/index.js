const nextSlide = (countSlides) => {
    return {
        type: 'NEXT_SLIDE',
        payload: countSlides
    }
}

const prevSlide = (countSlides) => {
    return {
        type: 'PREV_SLIDE',
        payload: countSlides
    }
}

const loadItems = (items) => {
    return {
        type: 'ITEMS_LOADED',
        payload: items
    }
}

const changeActiveSlide = (idx) => {
    return {
        type: 'CHANGE_ACTIVE_SLIDE',
        payload: idx
    }
}

export {
    nextSlide,
    prevSlide,
    loadItems,
    changeActiveSlide
}