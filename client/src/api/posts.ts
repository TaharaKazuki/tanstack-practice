import axios from 'axios'

const client = axios.create({
  url: 'http://localhost:3000',
})

export const getPosts = async () => {
  return client
    .get('/posts', {
      params: {
        _sort: 'title',
      },
    })
    .then((res) => res.data)
}

export const getPostsPaginated = async (page: number) => {
  return client
    .get('/posts', {
      params: { _page: page, _sort: 'title', _limit: 2 },
    })
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.headers['x-total-count'])
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      }
    })
}

export const getPost = async (id: string) => {
  return client.get(`/posts/${id}`).then((res) => res.data)
}

export const createPost = async ({ title, body }: { title: string; body: any }) => {
  return client
    .post('/posts', {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then((res) => res.data)
}
