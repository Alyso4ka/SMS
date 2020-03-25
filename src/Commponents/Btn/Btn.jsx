import React from 'react';
import styles from './Btn.module.css';


class Btn extends React.Component {


    newMessageText = React.createRef()

    state = {
        spanNumber: 0,
    }


    addClickHandler = () => {
        let text = this.newMessageText.current.value
        this.newMessageText.current.value = ""
        alert("Привет " + text)
        this.setState({
            spanNumber: this.state.spanNumber + 1,

        })
    }


    render() {
        return (
            <div className={styles.btn}>
                <span>{this.state.spanNumber}</span>
                <input ref={this.newMessageText} type="text"/>
                <button onClick={this.addClickHandler}>Отправить</button>
            </div>
        )
    }
};

export default Btn;