export default function PostContent({ message, image }) {
  return (
    <div className="py-2 flex flex-col gap-4">
      {message && <span className="text-sm">{message}</span>}
      {image && (
        <div className="-mx-4">
          <img
            // src="https://images.pexels.com/photos/35475025/pexels-photo-35475025.jpeg?_gl=1*1yfac6u*_ga*MTc2NjE2NDA4OC4xNzY4MzE0NTQ2*_ga_8JE65Q40S6*czE3NjgzMTQ1NDYkbzEkZzEkdDE3NjgzMTU2NzMkajYwJGwwJGgw"
            src={image}
            alt="post"
          />
        </div>
      )}
    </div>
  );
}
