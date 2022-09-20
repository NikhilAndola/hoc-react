import React from 'react';

const CounterHoc = (WrappedComp) => {
  function Counter(props) {
    // console.log('hoc props', props);
    const [count, setCount] = React.useState(0);
    const increment = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <WrappedComp count={count} increment={increment} {...props} />
      </div>
    );
  }
  return Counter;
};

export default CounterHoc;
