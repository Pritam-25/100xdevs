interface Todo {
    title: string;
    description: string;
}

// Correctly merging updates in updateTodo
const updateTodo = (todo: Todo, update: Todo) => {
    return { ...todo, ...update };
};

// updateTodoBetter now correctly merges partial updates
const updateTodoBetter = (todo: Todo, update: Partial<Todo>) => {
    return { ...todo, ...update };
};

const initialTodo: Todo = {
    title: "go to gym",
    description: "get good diet"
};

// Correct way to call updateTodo
const updatedTodo = updateTodo(initialTodo, { title: "pritam", description: "hello there" });

// Correct way to call updateTodoBetter
const updatedTodoBetter = updateTodoBetter(initialTodo, { title: "pritam" });

console.log(updatedTodoBetter);
