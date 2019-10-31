import React from "react";

function Canvas() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [second, setSecond] = React.useState(0);
    const timer = React.useRef(0);
    React.useEffect(() => {
        timer.current = setInterval(() => {
            setSecond(prevSecond => prevSecond + 1);
        }, 1000);
        return () => {
            clearInterval(timer.current);
        }
    }, []);
    React.useEffect(() => {
        if(canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
            ctx.font = "20px san-serif";
            ctx.textBaseline = "middle";
            ctx.fillText(String(second),10,10);
        }
    }, [second]); // useEffect와 같은 훅은 순서 의존적임, 중간에 추가되면 오류 발생, if나 for로 감싸거나 훅선언 중간에 return 하면 안됨
    return <canvas ref={canvasRef} width={300} height={300} />;
}

// class Canvas extends React.PureComponent {
//     private readonly canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
//     public componentDidMount() {
//         if(this.canvasRef.current) {
//             const ctx = this.canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
//             ctx.fillStyle = "red";
//             ctx.rect(10, 10, 100, 100);
//             ctx.fill();
//         }
//     }
//     public render() {
//         return <canvas ref={this.canvasRef} width={300} height={300} />;
//     }
// }

export default Canvas;