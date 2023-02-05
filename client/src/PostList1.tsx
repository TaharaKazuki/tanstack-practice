import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import { getPost } from './api/posts'

type Props = {
  id: string
}

export const Post: FC<Props> = ({ id }) => {
  const postQuery = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
  })

  return <div></div>
}
