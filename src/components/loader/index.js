import React from 'react'
import './styles.scss'
import { RotateSpinner } from 'react-spinners-kit'

const Loading = () => {
    return(
        <div class="loading">
            <RotateSpinner size={35} color="#3b638f" />
        </div>
    );
}

export default Loading;