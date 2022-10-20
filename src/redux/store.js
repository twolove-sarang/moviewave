import { createStore } from "redux"
import reducer from './reducer/moviereducer'


let store =createStore(reducer)


export default store