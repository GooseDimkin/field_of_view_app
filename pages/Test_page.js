import store from './../redux/store';

export default function Test_page() {
    let data = store.getState().wordsSettingsData
    return(
        <div>
            <div>Сколько слов: {data.wordsAmount}</div>
            <div>Стартовое расстояние: {data.startRange}</div>
            <div>Сколько букв в словах: {data.lettersInWords}</div>
            <div>Увеличение расстояния: {data.rangeIncrease}</div>
            <div>Скорость: {data.speed}</div>
        </div>
    );
}