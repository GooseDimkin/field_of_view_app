import store from './../redux/store';
import React, { useState, useEffect } from 'react';
import {withRouter} from 'next/router'
import Logo from './Logo';

let randomIndexes = [];
let indexOfRandomIndex = -1;

function Test_page(props) {
    let settings_data = store.getState().wordsSettingsData;

    while(randomIndexes.length < settings_data.wordsAmount) {
        let r = Math.floor(Math.random() * settings_data.wordsAmount);
        if(randomIndexes.indexOf(r) === -1) randomIndexes.push(r);
    }  
    console.log(randomIndexes);

    let all_words = store.getState().wordsData.words;
    let all_needed_words = all_words.map(w => w.length === settings_data.lettersInWords && w);
    all_needed_words = all_needed_words.filter((n) => {return n != false})
    let words = [];
    for(let i = 0; i < settings_data.wordsAmount; ++i) {
        words.push(all_needed_words[randomIndexes[i]]);
    }    
    
    let space_value = settings_data.startRange;

    let getWords = (randomWordId) => {
        if(randomWordId === undefined)
            return exitFoo()

        let space_between_element = document.getElementById('space');
        let word = words[randomWordId]
        let n = Math.ceil(word.length / 2);
        let splittedRandomWord = word.match(new RegExp('.{1,' + n + '}', 'g'));
        space_value += settings_data.rangeIncrease;
        space_between_element.style.setProperty('--space_between', space_value + 'px');

        return splittedRandomWord;
    }

    let exitFoo = () => {
        return props.router.push('/Finish_page')
    }

    let getSpeed = () => {
        if(settings_data.speed ^ 0 != settings_data.speed || settings_data.speed === 1.5) {
            settings_data.speed = Math.ceil(settings_data.speed) + '000';
            settings_data.speed -= 500;

            return settings_data.speed;
        }
        else {
            return settings_data.speed + '000';
        }
    }

    const [word, setWord] = useState('');

    useEffect(() => {
        const interval = setInterval(() => setWord(word => getWords(randomIndexes[indexOfRandomIndex += 1])), getSpeed());
        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <Logo/>
            <div id='space' className='devider'>
                <div className='word'>{word[0]}</div>
                ~
                <div className='word'>{word[1]}</div>
            </div>
        </div>
    );
}

export default withRouter(Test_page);