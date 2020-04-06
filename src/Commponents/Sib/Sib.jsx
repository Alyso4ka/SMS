import React from 'react';
import styles from './Sib.module.css';
import Button from "./Button/Button";


class Sib extends React.Component {


    newMessageText = React.createRef();

    state = {
        startNumber: 0,
        text: '',

    }


    addClickHandler = () => {
        let newText = this.newMessageText.current.value;
        this.newMessageText.current.value = "";
        this.onChangeText(" Привет " + newText);
        this.setState({startNumber: this.state.startNumber + 1})
    };

onChangeText = (qwe) => {
    let newMessage = [...this.state.text, qwe];
    this.setState({text: newMessage})
}




    render() {
        return (
            <div className={styles.sib}>
                <span>{this.state.startNumber}</span>
                <input ref={this.newMessageText} type="text"/>
            <Button addClickHandler={this.addClickHandler}/>
            <p>{this.state.text}</p>


            </div>
        )
    }
};

export default  Sib;
