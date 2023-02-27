import { NextPage } from "next";
import { useState, useId } from "react";

import supabase from "../utils/supabase";

export async function getStaticProps() {
  // create a dummy post with is_published = true
  await supabase.from("posts").insert([
    {
      title: "Hello World",
      content: "This is a dummy post",
      is_published: true,
    },
  ]);

  const posts = await supabase.from("posts").select("*");
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      {/* for each post show post title and content */}
      {posts.data.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
