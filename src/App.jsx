import { useState } from 'react'
import PostList from './PostList.jsx'
function App() {
  const [showPosts, setShowPosts] = useState(true)
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Day 40: Caching Lifecycle</h1>
      <p>Learn how React Query caches data and avoids unnecessary network requests.</p>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>
      {showPosts && <PostList />}
    </div>
  )
}
export default App
