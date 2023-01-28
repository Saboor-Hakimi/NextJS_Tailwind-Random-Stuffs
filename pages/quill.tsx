import { NextPage } from "next";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useState } from "react";

import "react-quill/dist/quill.core.css";

const Home: NextPage = () => {
  const [value, setValue] = useState("");

  console.log(value);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        onChange={setValue}
        placeholder="Content goes here..."
      />
      <div
        className="h-4 view ql-editor"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </>
  );
};

export default Home;
