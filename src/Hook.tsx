import React from "react";

function Hook() {
    const [count, setCount] = React.useState(0);
    const multipleCount = React.useMemo(() => count * count, [count]); // 사실 number는 새로 객체를 생성하지 않기에 노의미 이긴 함
    const increaseCount = React.useCallback(() => { //갈고있다가, 함수로 넘겨줌, useMemo는 값을 바로 넘겨줄때
        // setCount(prevCount => prevCount + 1);
        setCount(count + 1);
    }, [count]);
    React.useEffect(() => { //count 가 변경될때마다 실행
        console.log(multipleCount);
    }, [multipleCount]); // [count]를 []로 넣으면 한번만 실행 됨
    return <p>Hook Count: {count} <button onClick={increaseCount}>Up</button></p>;
}

export default React.memo(Hook);