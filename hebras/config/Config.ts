export type Operations = {
    url: string,
    name: string
}

export const OPERATIONS = [
    {
        operation: 'POST',
        do: {
            url: "https://jsonplaceholder.typicode.com/posts",
        }
    },
    {
        operation: 'TEST',
        do: {
            url: "jhfghbfdbfghtr",
        }
    }
]

export const OP = (operation) => {
    OPERATIONS.filter((o: string) => )
}