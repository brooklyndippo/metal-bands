import { useState } from 'react';

export default function Like() {
    
    const [likes, setLikes] = useState(0);

    const handleIncrement = () => {
        setLikes(likes + 1);
    }   

    const handleDecrement = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    }   

    return (
        <div>
            <p><strong>Likes: {likes}</strong></p>
            <button onClick={handleDecrement}>👎 Dislike</button>
            <button onClick={handleIncrement}>👍 Like</button>
        </div>
    )

}