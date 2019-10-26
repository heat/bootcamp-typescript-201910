import React from 'react';


type FancyButtonProps = {
    onAction: () => Promise<void>;
    text?: string;
}

type FancyButtonState = {
    loading: boolean;
}
export class FancyButton extends React.Component<FancyButtonProps, FancyButtonState> {

    state: FancyButtonState = {
        loading: false,
    }
    async processClick(e: React.MouseEvent) {
        try {
            this.setState({ loading: true });
            await this.props.onAction();
        } catch (error) {
            alert(error.message);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        
        return (
            <button className="button" onClick={ e => this.processClick(e) } disabled={this.state.loading} >
                {this.props.text || 'MAIS'}
            </button>
        )
    }
};