import { NextPage } from "next";
import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import { useState } from "react";

const Home: NextPage = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 justify-center">
        <div></div>
        <FilePond
          files={files}
          allowMultiple={true}
          maxFiles={3}
          server="/api/file/upload"
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <div></div>
      </div>
    </>
  );
};

export default Home;
