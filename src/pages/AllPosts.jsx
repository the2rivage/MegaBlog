import { PostCard, Container } from "../components";
import appwriteservices from "../appwrite/config";
import { useEffect, useState } from "react";
export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteservices.listPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.rows);
      }
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
