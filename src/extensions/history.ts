import type { GeneralOptions } from '@/type'
import type { HistoryOptions as TiptapHistoryOptions } from '@tiptap/extension-history'

import { History as TiptapHistory } from '@tiptap/extension-history'

import { HistoryActionButton } from './components/ActionButton'

export interface HistoryOptions extends TiptapHistoryOptions, GeneralOptions<HistoryOptions> {}

export const History = /* @__PURE__*/ TiptapHistory.extend<HistoryOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      depth: 10,
      newGroupDelay: 1,
      divider: false,
      spacer: false,
      button: ({ editor, t }) => ({
        component: HistoryActionButton,
        componentProps: {
          editor,
          t
        }
      })
    }
  }
})
