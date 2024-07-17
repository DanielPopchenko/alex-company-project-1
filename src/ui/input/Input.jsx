import React from 'react';

const Input = React.forwardRef((props, ref) => <input {...props} ref={ref} />);

export default Input;
