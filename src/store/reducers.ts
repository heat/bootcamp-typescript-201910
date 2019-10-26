import { Action } from "redux";


const initialState : CoffeeShop.CoffeStore = {
    url: 'https://coffee.alexflipnote.dev/random'
};

// composicao de action
type ActionReducer = {
    url: string;
} & Action;

const reducer = (state: CoffeeShop.CoffeStore = initialState, action: ActionReducer)  => {

    switch (action.type) {
        case 'fetch':
            return {
                url: action.url,
            }
        default:
            return state;
    }
}

export default reducer;