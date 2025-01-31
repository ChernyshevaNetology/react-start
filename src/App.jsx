import './App.css'
import { MultipleThemeRender } from './projects/project-example/multiple-theme-render'
import { MultipleCounters } from "./projects/project-2/multiple-counters";
import { Counter } from "./projects/project-1/counter";

export const App = () => {
    return (
    <div className={'container'}>
        <MultipleCounters />
    </div>
  )
}

