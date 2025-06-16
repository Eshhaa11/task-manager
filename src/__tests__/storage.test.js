import { saveTasks, loadTasks } from '../services/storage';

test('saves and loads from localStorage', () => {
  const data = [{ id: 1, description: 'Test', completed: false }];
  saveTasks(data);
  const loaded = loadTasks();
  expect(loaded).toEqual(data);
});
