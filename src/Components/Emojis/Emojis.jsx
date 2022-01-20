import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { filterEmojis } from '../../utils/filterEmojis'
import EmojiBox from '../EmojiBox/EmojiBox'
import Empty from '../Empty/Empty'
import styles from './Emojis.module.css'

const Emojis = ({emojisData, searchText}) => {
    const [filteredEmojis, setFilteredEmojis] = useState([])

    useEffect(() => {
        setFilteredEmojis(filterEmojis({
            emojisData, 
            searchText
        }))
    }, [emojisData, searchText])

    if (filteredEmojis.length > 0) {
        return (
            <div className={styles.emojisGrid}>
                {filteredEmojis.map((data, index) => {
                    return (
                        <EmojiBox
                        key={index}
                        title={data.title}
                        symbol={data.symbol}
                        />
                    )
                })}
            </div>
        )
    } else {
        return (
            <Empty text='Ops, emoji yang kamu cari tidak ditemukan' />
        )
    }
}

Emojis.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string,
}

export default Emojis