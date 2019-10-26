import React from 'react';
import { connect } from 'react-redux';

type CoffeeImageProps = {
    url: string;
}

class CoffeeImage extends React.Component<CoffeeImageProps> {

    render() {

        return (
            <img src={this.props.url} alt="café" className="image coffee" ></img>
        )
    }
}

const mapStateToProps = (state: CoffeeShop.CoffeStore) => {

    return {
        url: state.url,
    };
}

const CoffeImageContainer = connect(mapStateToProps)(CoffeeImage)

export default CoffeImageContainer;