
import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

function requestCheck( arg: any): arg is CoffeeShop.CoffeeApiResponse {
    if (!arg) {
      return false;
    }
    if (arg.file) {
      return true;
    }
    return false;
}

export const randomCoffeeAction = (): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: Dispatch) => {
        axios.get<CoffeeShop.CoffeeApiResponse | {} | null>('http://localhost:3000/random.json')
            .then( res => {
                const newcoffee = res.data;
                if (requestCheck(newcoffee)) {
                    dispatch({
                        type: 'fetch',
                        url: newcoffee.file,
                    });
                } else {
                    throw new Error(`${res.statusText} - falha na requisicao`);
                }
            })
            .catch( err => console.log(err));
    }
}