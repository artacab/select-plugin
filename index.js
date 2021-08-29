import {Select} from './plugin/select'
import './plugin/styles.scss'


const select = new Select('#select', {
    placeholder: 'Select item',
    selectedId: '3',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Vue'},
        {id: '3', value: 'Angular'},
        {id: '4', value: 'Python'},
        {id: '5', value: 'C#'},
        {id: '6', value: 'Golang'},
        {id: '7', value: 'Ruby'},
        {id: '8', value: 'Express'}
    ],
    onSelect(item) {
        console.log('selected', item)
    }
})

