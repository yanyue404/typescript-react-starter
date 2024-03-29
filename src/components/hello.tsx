import * as React from 'react';
import './style.css';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
function Hello({ name, enthusiasmLevel = 1, onDecrement, onIncrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('自己的项目，必须支持感叹一下！');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!'); // 自动减 1 的特点
}
