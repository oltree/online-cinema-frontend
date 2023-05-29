import cn from 'classnames';
import { ContentState, EditorProps, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { FC, memo, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { OnChangeType } from '@/shared/types/onChange.type';

import styles from './TextEditor.module.scss';

interface TextEditorProps extends Omit<EditorProps, 'editorState'> {
  value: string;
  onChange: OnChangeType;
  placeholder?: string;
  error?: string | undefined;
}

const TextEditor: FC<TextEditorProps> = ({
  value,
  placeholder,
  onChange,
  error,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) return;

    const defaultValue = value || '';
    const blocksFromHtml = htmlToDraft(defaultValue);
    const contentState = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks,
      blocksFromHtml.entityMap
    );

    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  }, [value, isUpdated]);

  const handleEditorStateChange = (editorState: EditorState) => {
    setIsUpdated(true);
    setEditorState(editorState);

    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div className={cn(styles.wrapper, 'animate-fade')}>
      <label>
        <p>{placeholder}</p>

        <div className={styles.editorContainer}>
          <Editor
            toolbarClassName={styles.toolbar}
            editorClassName={cn(styles.editor, error && styles.error)}
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
            spellCheck
            toolbar={{
              options: ['inline', 'list'],
              inline: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['bold', 'italic', 'underline', 'strikethrough'],
              },
              list: {
                inDrodown: false,
                options: ['unordered', 'ordered'],
              },
            }}
          />
        </div>
      </label>
    </div>
  );
};

export default memo(TextEditor);
