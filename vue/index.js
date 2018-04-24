new Vue({
  el: '#app',

  data() {
    return {
      // 1. レンダリング
      message: 'Hello Vue.js!',

      // 2. バインディング
      hovered: 'ホバー時のメッセージ',

      // 3. 条件分岐
      seen: true,

      // 4. ループ
      todos: [{
        text: '皿洗い',
      }, {
        text: '洗濯',
      }, {
        text: '風呂掃除',
      }],

      // 5. イベントリスナ
      title: 'mogg',

      // 6. 双方向バインディング
      input: 'Input text.'
    };
  },

  methods: {
    // 5. イベントリスナ
    addG() {
      this.title = `${this.title}g`;
    },
  },
});
