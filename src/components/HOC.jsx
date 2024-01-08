import React, { useState } from 'react'

const HOC = (WrappedHOC) => {
    return(props) => {
        const [like,setlike] = useState(0)

        const handleLike = () => {
            setlike((prevState) => prevState+1);
        }
        return(
            <WrappedHOC
                {...props}
                likeHandle = {handleLike}
                likeCount = {like}
            />
        )
    }
}

export default HOC