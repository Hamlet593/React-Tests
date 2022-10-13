import { memo, useRef } from "react";

export default memo(function VideoPlayer ({ src }) {
  const refUser = useRef();

  const countRef = useRef(0);
  countRef.current++;
  console.log(countRef.current);

  return (
    <div>
      <p>Call count is {countRef.current}</p>
      <video src={src} ref={refUser} />
      <button
        onClick={() => {
          refUser.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          refUser.current.pause();
        }}
      >
        Pause
      </button>
    </div>
  );
});