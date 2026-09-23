import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function curtir() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={curtir}>
        👍 Curtir
      </button>
      <p>{likes} curtidas</p>
    </div>
  );
}

export default LikeButton;