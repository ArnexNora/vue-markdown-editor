import { italic } from '@/utils/constants/command';

export default {
  name: italic,
  icon: 'v-md-icon-italic',
  title: '斜体（Ctrl+I）',
  action(editor) {
    editor.execCommand(italic);
  },
};
