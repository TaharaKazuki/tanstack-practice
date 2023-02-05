import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
]

const App = () => {
  const queryClient = useQueryClient()
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      await wait(2000)
      return [...POSTS]
    },
  })

  const newPostMutation = useMutation({
    mutationFn: async (title: string) => {
      await wait(1000)
      return POSTS.push({ id: crypto.randomUUID(), title })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  if (isLoading) return <h1>Loading...</h1>
  if (isError) {
    return <pre>{JSON.stringify(error)}</pre>
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate('New POST')}
      >
        Add New
      </button>
    </div>
  )
}

const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export default App
