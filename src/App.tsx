import React from 'react';
import './App.css';
import styles from './App.module.css';
import Item from './item';
import Hook from './Hook';
import Canvas from './Canvas';
import styled from "styled-components"; // sass 보다, styled component 컴파일이 빠름

const AppLink = styled.div<{ color: string }>`
  color: ${props => props.color};
  background-color: ${props => props.color === "white" ? "black" : "white"};
`;

const ItemChild = <p>Hello World!</p>;
interface Iprops {

}

interface IState {
  second: number;
  count:number;
}

class App extends React.Component<Iprops, IState> {
  public readonly state = {
    second: 0,
    count: 0
  };

  public constructor(props: Iprops) {
    super(props);
    // this.increaseCount = this.increaseCount.bind(this); //bad 방법
  }

  private tickTimer:number = 0;

  public componentDidMount() {
    this.tickTimer = setInterval(() => this.tick(), 1000) as any;
  }

  public componentWillUnmount() {
    clearInterval(this.tickTimer);
  }

  public render() {
    // className, class는 자바스크립트 클래스 예약어와 겹침
    return (
      <>
      <div className="App-link">Second: {this.state.second}</div>
      <AppLink color="blue">dsdsdsdsd</AppLink>
      <div className={styles.item}>Count : {this.state.count} <button onClick={this.increaseCount}>Up</button></div>

      <Item count={this.state.count}>
        {ItemChild}
      </Item>
      <Hook/>
      <Canvas/>
      </>
    )
  }

  private increaseCount = () => { // arrow function, this가 클래스로 잡힘
    this.setState(state => ({
      count: this.state.count + 1,
    }));
  }

  private tick() {
    this.setState(state => ({
      second: this.state.second + 1,
    }));
  }
}

export default App;
