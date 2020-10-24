class BigSquare extends React.Component {

    constructor() {
        super();
        this.state = {
            squares: ['red', 'blue', 'yellow', 'green']
        }
    }

    render() {
        return <div className='field'>
            {this.state.squares.map((item, index) => (
                <Square
                    key={index + 1}
                    pos={index}
                    square={item}
                />))}
        </div>
    };
}


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBig: false
        }
    }

    handleToBig = () => {
        this.setState({isBig: true});
    }

    handleToSmall = () => {
        this.setState({isBig: false});
    }

    render() {
        if (this.state.isBig) {
            return (
                <div>
                    <div onClick={this.handleToSmall} className={`big ${this.props.square}`}></div>
                </div>)
        } else {
            return (<div>
                <div onClick={this.handleToBig} className={`small ${this.props.square}`}></div>
            </div>)
        }
    }
}

ReactDOM.render(<BigSquare/>, document.getElementById('root'));