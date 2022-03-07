import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const Input = () => {
	const [value, setValue] = useState('');

	const handleChange = (e) => setValue(e.target.value);

	return (
		<div>
			<input
				value={value}
				onChange={handleChange}
				placeholder="type something"
				name="name"
				id="name"
			/>
			<button disabled={!value} onClick={() => console.log('click')}>
				Submit
			</button>
		</div>
	);
};

describe('first test', () => {
	it('renders the component', () => {
		render(<Input />);
		screen.getByText('Submit');
	});

	it('changes input value', () => {
		render(<Input />);
		const button = screen.getByText('Submit');
		const input = screen.getByPlaceholderText('type something');
		const handleClick = jest.fn();

		expect(button).toBeDisabled();

		fireEvent.change(input, { target: { value: 'Sebastian' } });
		expect(input).toHaveValue('Sebastian');

		expect(button).not.toBeDisabled();

		fireEvent.click(button);
	});
});
