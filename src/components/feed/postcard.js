const PostCard = ({ post, onSave, onShare, onReport }) => (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-sm text-gray-700">{post.preview}</p>
      <p className="text-xs text-gray-500">Source: {post.source}</p>
      <div className="mt-2 space-x-2">
        <button onClick={() => onSave(post)} className="text-blue-600">Save</button>
        <button onClick={() => onShare(post)} className="text-green-600">Share</button>
        <button onClick={() => onReport(post)} className="text-red-600">Report</button>
      </div>
    </div>
  );
  
  export default PostCard;
  