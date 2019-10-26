import React from 'react';



export class FancyButton extends React.Component {

    processClick(e) {
        this.props.onAction();
    }

    render() {
        
        return (
            <button className="button" onClick={ e => this.processClick(e)} >
                MAIS
            </button>
        )
    }
};