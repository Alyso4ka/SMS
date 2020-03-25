import React from 'react';
import styles from "./Container.module.css";
import Message from "./Commponents/Message/Message";
import MyName from "./Commponents/Name/MyName";
import Qualities from "./Commponents/Qualities/Qualities";
import Btn from "./Commponents/Btn/Btn";


const App = () => {



    return (
        <div className="App">

            <div className={styles.container}>
                <Btn />
                <MyName />
                <Qualities />
                <Message />

            </div>
        </div>
    );
};
export default App;