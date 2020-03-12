import React from 'react';
import styles from "./Container.module.css";
import Message from "./Commponents/Message/Message";
import MyName from "./Commponents/Name/MyName";

const App = () => {
    return (
        <div className="App">
            <div className={styles.container}>
                <MyName/>
                <Message/>
            </div>
        </div>
    );
};
export default App;