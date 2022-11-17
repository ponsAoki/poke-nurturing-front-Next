import { Underline } from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "../../../styles/articleTextArea.module.css";
import { ArticleEditBar } from "./articleEditBar";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const ArticleTextArea = ({ register }: Props): JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    // content: "",
  });
  if (!editor) return <></>;
  return (
    <div className={styles.textEditor}>
      <ArticleEditBar editor={editor} />
      <EditorContent editor={editor} {...register("article")} />
    </div>
  );
};
