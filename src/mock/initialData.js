export const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Levar o lixo pra fora"},
        "task-2": { id: "task-2", content: "Ligar para minha tia"},
        "task-3": { id: "task-3", content: "Dar banho no cachorro"},
        "task-4": { id: "task-4", content: "Fazer exercícios"}
    },
    columns: {
        'column-1': {
          id: 'column-1',
          title: 'A Fazer',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },

    columnOrder: ['column-1']
}