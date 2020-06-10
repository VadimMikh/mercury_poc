const initialState = {
    loading: false,
    showbutton: true,
    posts: [
        {
            "userId": 1,
            "id": 8937957,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }, {
            "userId": 1,
            "id": 2877696,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }, {
            "userId": 1,
            "id": 3876758,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }, {
            "userId": 1,
            "id": 49889987,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }, {
            "userId": 1,
            "id": 57983759,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }, {
            "userId": 1,
            "id": 6987396796,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_DATA':
        return {
            ...state,
            posts: state.posts.concat(action.payload)
        }
    case 'TOGGLE_LOADER':
        return {
            ...state,
            loading: action.payload
        }
    case 'HIDE_BUTTON':
        return {
            ...state,
            showbutton: action.payload
        }
    default:
        return state
    }
}