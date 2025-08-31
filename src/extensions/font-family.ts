import type { FontFamilyProps } from '@/constants/define'
import type { GeneralOptions } from '@/type'

import type { FontFamilyOptions as TiptapFontFamilyOptions } from '@tiptap/extension-font-family'

import { DEFAULT_FONT_FAMILY_LIST } from '@/constants/define'
import { FontFamily as TiptapFontFamily } from '@tiptap/extension-font-family'
import { FontFamilyActionMenuButton } from './components/ActionMenuButton'

/**
 * Represents the interface for font family options, extending TiptapFontFamilyOptions and GeneralOptions.
 */
export interface FontFamilyOptions extends TiptapFontFamilyOptions, GeneralOptions<FontFamilyOptions> {
  /**
   * List of available font family properties
   *
   * @default DEFAULT_FONT_FAMILY_LIST
   */
  fontFamilies: FontFamilyProps[]
}

export const FontFamily = /* @__PURE__*/ TiptapFontFamily.extend<FontFamilyOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ['textStyle'],
      divider: false,
      spacer: false,
      fontFamilies: DEFAULT_FONT_FAMILY_LIST,
      button: ({ editor, extension, t }) => {
        return {
          component: FontFamilyActionMenuButton,
          componentProps: {
            editor,
            extension,
            t
          }
        }
      }
    }
  }
})
