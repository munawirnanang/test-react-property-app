import React, {Component, Fragment} from 'react';

import Header from '../Component/Homepage/Header';
import Wrapper from '../Container/Homepage/Wrapper';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <Wrapper />
            </Fragment>   
        )
    }
}

export default Homepage;