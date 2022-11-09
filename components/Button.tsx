import React, { useState } from 'react';

function Button() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)} className='rounded'>
				Hello All
			</button>
		</div>
	);
}

export default Button;
