const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

export async function fetchTasksFromAPI() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.map(task => ({
      id: task.id,
      description: task.title,
      completed: task.completed,
    }));
  } catch (err) {
    console.error('Error fetching from API:', err);
    return [];
  }
}
