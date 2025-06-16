import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('calls addTask with input value on submit', () => {
  const mockAddTask = jest.fn();
  render(<TaskForm addTask={mockAddTask} />);

  fireEvent.change(screen.getByPlaceholderText(/add new task/i), {
    target: { value: 'Study React' },
  });

  fireEvent.click(screen.getByText(/add/i));

  expect(mockAddTask).toHaveBeenCalledWith('Study React');
});
