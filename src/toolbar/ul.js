import { ul } from '@/utils/constants/command';

export default {
  name: ul,
  icon: 'v-md-icon-ul',
  title: '无序列表（Ctrl+U）',
  action(editor) {
    editor.execCommand(ul);
  },
};
