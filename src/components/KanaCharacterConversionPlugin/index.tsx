'use client'

import { useState } from 'react'
import moji from "@eai/moji";

export const KanaCharacterConversionPlugin = () => {
    
    const [value, setValue] = useState<string>('')

    const handleInputFocusOut = () => {
        //ひらがなからカタカナへ変換
        const hiraToKana = moji(value)
        .convert("HG", "KK") // ひらがな→カタカナ
        .convert("ZS", "HS") // 全角スペース→半角スペース
        .convert("ZK", "HK") // 全角カナ→半角カナ
        .convert("ZE", "HE") //全角記号→半角記号
        .toString();
        setValue(hiraToKana);
    }

    return (
        <>
            <h2 className="c_h2">Moji.jsプラグイン使用</h2>
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

export default KanaCharacterConversionPlugin
