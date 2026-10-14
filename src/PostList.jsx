import { useQuery } from '@tanstack/react-query'
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Network error')
  }
  return res.json()
}
function PostList() {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
  if (isPending) {
    return <p>Loading posts...</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>
  }
  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Refetch Posts'}
      </button>
      <h2>Posts List</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  )
}
export default PostList
