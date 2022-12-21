import { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import webPlugin from "grapesjs-preset-webpage";
import formPlugin from "grapesjs-plugin-forms";
import basicPlugin from "grapesjs-blocks-basic";

function App() {
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const e = grapesjs
      .init({
        container: "#editor",
        plugins: [basicPlugin, formPlugin, webPlugin],
        pluginsOpts: {
          gjsPresetWebpage: {
            blocks: [
              "column1",
              "column2",
              "column3",
              "column3-7",
              "text",
              "link",
              "image",
              "video",
              "map",
            ],
          },
        },
      })
      .getSelected();

    setEditor(e);
  }, [editor]);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
