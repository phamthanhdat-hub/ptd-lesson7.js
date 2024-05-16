import React, { useContext } from 'react'
import { ThemeContext } from './PTDuseContext'

export default function PTDuseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + 'm-3'}>
        <h2>PTDuseContext2</h2>
        <p>
            <b>2210900007</b>
            <b> Pham Thanh Dat</b>
            <i> K22CNT3</i>
        </p>
    </div>
  )
}
