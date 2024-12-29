import { useState } from 'react';
import { Button } from '../../components/button.jsx'

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using
  the useState Hook.
*/

export const Theme = () => {
    const [theme, setTheme] = useState('light')

    const toDark = () => setTheme('dark')
    const toLight = () => setTheme('light')

    return (
        <div className={theme}>
            <div className="text">
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ad, animi aspernatur consequatur deleniti
                dolore ea eligendi et exercitationem explicabo fugiat harum impedit
                ipsum iure laudantium magni minus natus nesciunt nihil nostrum,
                numquam odio perspiciatis placeat provident quibusdam
                quidem quos repellat sed sint soluta ullam vel veniam veritatis vitae! Culpa, natus!
            </div>
            <div className="btn">
                <Button title={'🔦'} />
                {theme === "light"
                    ? <button onClick={toDark}>🔦</button>
                    : <button onClick={toLight}>💡</button>
                }
            </div>
        </div>
    )
}