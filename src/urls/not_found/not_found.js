import React from "react";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './not_found.css';

class NotFound extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        document.title = 'Страница не найдена';
    }

    render() {
        return (
            <>
                <Header />
                <div className='page'>
                    <div className='error-page-wrapper'>
                        <h1>{this.props.name}</h1>
                        <span>{this.props.text}</span>
                        <a href='/'>Вернуться на главную</a>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default NotFound;
