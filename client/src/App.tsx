import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const POSTS = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
]

const App = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      await wait(200)
      return [...POSTS]
    },
  })

  const newPostMutation = useMutation({
    mutationFn: async (title: string) => {
      await wait(100)
      return POSTS.push({ id: crypto.randomUUID(), title })
    },
    onSuccess: () => {},
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
      <button onClick={() => newPostMutation.mutate('New POST')}>Add New</button>
    </div>
  )
}

const wait = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export default App
