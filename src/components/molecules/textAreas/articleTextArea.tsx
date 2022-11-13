import { Underline } from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ArticleEditBar } from "./articleEditBar";

export const ArticleTextArea = (): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    // content: "",
  });
  if (!editor) return <></>;
  return (
    <>
      <ArticleEditBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};
