export function fetchDataAction() {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const json = await response.json()
            dispatch({type: 'FETCH_DATA', payload: json})
        } catch (error) {
            console.warn(error)
        }
    }
}

export function showLoader() {
    return {
        type: 'TOGGLE_LOADER',
        payload: true
    }
}

export function hideLoader() {
    return {
        type: 'TOGGLE_LOADER',
        payload: false
    }
}

export function hideButton() {
    return {
        type: 'HIDE_BUTTON',
        payload: false
    }
}