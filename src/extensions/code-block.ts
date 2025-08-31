import type { GeneralOptions } from '@/type'
import type { CodeBlockOptions as TiptapCodeBlockOptions } from '@tiptap/extension-code-block'

import { CodeBlock as TiptapCodeBlock } from '@tiptap/extension-code-block'

import { CodeBlockActionButton } from './components/ActionButton'

export interface CodeBlockOptions extends TiptapCodeBlockOptions, GeneralOptions<CodeBlockOptions> {}

export const CodeBlock = /* @__PURE__*/ TiptapCodeBlock.extend<CodeBlockOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      languageClassPrefix: 'language-',
      exitOnTripleEnter: true,
      defaultLanguage: null,
      exitOnArrowDown: true,
      HTMLAttributes: {},
      spacer: false,
      divider: false,
      button: ({ editor, t }) => ({
        component: CodeBlockActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
