import styles from './../styles/TestPage.module.css';
import store from './../redux/store';
import React, { useState, useEffect } from 'react';
import {withRouter} from 'next/router'

let randomIndexes = [];
let indexOfRandomIndex = -1;
function Test_page(props) {
    let settings_data = store.getState().wordsSettingsData;

    while(randomIndexes.length < settings_data.wordsAmount) {
        let r = Math.floor(Math.random() * settings_data.wordsAmount);
        if(randomIndexes.indexOf(r) === -1) randomIndexes.push(r);
    }  

    let all_words = store.getState().wordsData.words;
    let all_needed_words = all_words.map(w => w.length === settings_data.lettersInWords && w);
    all_needed_words = all_needed_words.filter((n) => {return n != false})
    let words = [];
    for(let i = 0; i < settings_data.wordsAmount; ++i) {
        words.push(all_needed_words[randomIndexes[i]]);
    }     

    let getWords = (randomWordId) => {
        if(randomWordId === undefined)
            return exitFoo()

        let word = words[randomWordId]
        let n = Math.ceil(word.length / 2);
        let splittedRandomWord = word.match(new RegExp('.{1,' + n + '}', 'g'));

        return splittedRandomWord;
    }

    let exitFoo = () => {
        return props.router.push('/Finish_page')
    }

    const [word, setWord] = useState('');

    useEffect(() => {
        const interval = setInterval(() => setWord(word => getWords(randomIndexes[indexOfRandomIndex += 1])), (settings_data.speed) + '000');
        return () => clearInterval(interval);
    }, []);

    return(
        <div className={styles.devider}>
            <div className={styles.word}>{word[0]}</div>
            ~
            <div className={styles.word}>{word[1]}</div>
        </div>
    );
}

export default withRouter(Test_page);