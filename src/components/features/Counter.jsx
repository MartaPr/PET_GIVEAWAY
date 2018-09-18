import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class Counter extends Component {

    state = {
        countStarts: 50,
        countEnds: 100
    }

    counter = () => {
        (this.state.countStarts < this.state.countEnds) && this.setState({
            countStarts: this.state.countStarts + 1
        });
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.counter()
        }, 30)
    }

    render() {
        return (
            <div className="amount_wrapper">
                <div className="counter_wrapper">
                    <Fade onReveal={() => this.counter()}>
                        <div className="counter">
                            <span>{this.state.countStarts}%</span>
                            <span>Pure happiness</span>
                        </div>
                    </Fade>
                    <div className="counter_description_slide">
                        <Fade delay={500}>
                            <div className="counter_description">
                                <h2>Get a pet</h2>
                                <p>Spicy jalapeno bacon ipsum dolor amet officia cupim est, sint in in reprehenderit leberkas alcatra. In brisket non ea laborum nulla quis id tail reprehenderit short loin jerky meatball. Spare ribs short ribs shankle ribeye veniam esse kielbasa incididunt tri-tip alcatra irure. Esse spare ribs voluptate tail capicola biltong id sausage aute alcatra, beef short loin ex labore.
                                 Mollit ground round nisi, lorem enim cillum exercitation ut pork belly. Buffalo in elit qui kielbasa, aute jerky nostrud labore picanha id ham hock hamburger. Reprehenderit short ribs elit veniam venison, pork belly commodo fatback. Ex porchetta biltong, consectetur sed swine laborum chicken pariatur pork loin dolore.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
        );
    }
}

export default Counter;