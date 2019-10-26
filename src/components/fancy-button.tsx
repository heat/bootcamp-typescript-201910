import React from 'react';


type FancyButtonProps = {
    onAction: () => void;
    text?: string;
}

export class FancyButton extends React.Component<FancyButtonProps, {}> {

    processClick(e: React.MouseEvent) {
        this.props.onAction();
    }

    render() {
        
        return (
            <button className="button" onClick={ e => this.processClick(e)} >
                {this.props.text || 'MAIS'}
            </button>
        )
    }
};