'use client'

import { useState } from 'react'
import { changeWordKana } from '@/utils/changeWord_kana'


export const KanaCharacterConversion = () => {
    
    const [value, setValue] = useState<string>('')

    const handleInputFocusOut = () => {
        const changeData = changeWordKana(value)
        setValue(changeData)
    }

    return (
        <>
            <h2 className="c_h2">自作script使用</h2>
            <div>
                <label htmlFor="kana1">入力フォーム</label>
                <input
                    type="text"
                    name="kana1"
                    id="kana1"
                    className="c_input_text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={handleInputFocusOut}
                />
            </div>
        </>
    )
}

export default KanaCharacterConversion
