const CHANGE_WORDS_AMOUNT = 'CHANGE_WORDS_AMOUNT';
const CHANGE_START_RANGE = 'CHANGE_START_RANGE';
const CHANGE_LETTERS_IN_WORDS = 'CHANGE_LETTERS_IN_WORDS';
const CHANGE_RANGE_INCREASE = 'CHANGE_RANGE_INCREASE';
const CHANGE_SPEED = 'CHANGE_SPEED';

let initialState = {
    wordsAmount: 6,
    startRange: 250,
    lettersInWords: 8,
    rangeIncrease: 250,
    speed: 1
}

let wordsSettingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_WORDS_AMOUNT:
            return {
                ...state,
                wordsAmount: action.newWordsAmount
            }
        
        case CHANGE_START_RANGE:
            return {
                ...state,
                startRange: action.newStartRange
            }

        case CHANGE_LETTERS_IN_WORDS:
            return {
                ...state,
                lettersInWords: action.newLettersInWords
            }

        case CHANGE_RANGE_INCREASE:
            return {
                ...state,
                rangeIncrease: action.newRangeIncrease
            }

        case CHANGE_SPEED:
            return {
                ...state,
                speed: action.newSpeed
            }

        default: 
            return state
    }
}



//Action Creators
export const ChangeWordsAmountAC = (newWordsAmount) => {
    return {type: CHANGE_WORDS_AMOUNT, newWordsAmount: newWordsAmount}
}

export const ChangeStartRangeAC = (newStartRange) => {
    return {type: CHANGE_START_RANGE, newStartRange: newStartRange}
}

export const ChangeLettersInWordsAC = (newLettersInWords) => {
    return {type: CHANGE_LETTERS_IN_WORDS, newLettersInWords: newLettersInWords}
}

export const ChangeRangeIncreaseAC = (newRangeIncrease) => {
    return {type: CHANGE_RANGE_INCREASE, newRangeIncrease: newRangeIncrease}
}

export const ChangeSpeedAC = (newSpeed) => {
    return {type: CHANGE_SPEED, newSpeed: newSpeed}
}

export default wordsSettingsReducer;