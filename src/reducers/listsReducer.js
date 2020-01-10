const initialState = [
    {
        title : "Last Episode",
        id : 0,
        cards : [
            {
                id : 0,
                text : "We created a static lsit and a static card"
            },
            {
                id : 1,
                text : "We used a mix between material UI React and styled compone"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default :
            return state;
    }
};

export default listsReducer;