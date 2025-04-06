
// types/tiptap.d.ts
declare module '@tiptap/suggestion' {
    import { Plugin } from 'prosemirror-state'
    import { Editor, Range } from '@tiptap/core'
  
    export interface SuggestionOptions {
      editor: Editor
      char?: string
      startOfLine?: boolean
      allowSpaces?: boolean
      allowedPrefixes?: string[] | null
      pluginKey?: string
      command?: (props: { editor: Editor; range: Range; props: any }) => void
      items?: (props: { query: string }) => any[]
      render?: () => {
        onStart: (props: any) => void
        onUpdate: (props: any) => void
        onKeyDown: (props: any) => boolean
        onExit: () => void
      }
    }
  
    export default function Suggestion(options: SuggestionOptions): Plugin
  }