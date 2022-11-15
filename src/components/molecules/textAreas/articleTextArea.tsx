import { Underline } from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "../../../styles/articleTextArea.module.css";
import { ArticleEditBar } from "./articleEditBar";

export const ArticleTextArea = (): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    // content: "",
  });
  if (!editor) return <></>;
  return (
    <div className={styles.textEditor}>
      <ArticleEditBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
