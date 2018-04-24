<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Study Vue.js</title>
  </head>
  <body>
    <div id="app">
      <!-- 1. レンダリング -->
      <p>${message}</p>

      <!-- 2. バインディング -->
      <p title="${hovered}">この文にマウスを乗せて数秒すると、バインドしたタイトルが表示されます</p>

      <!-- 3. 条件分岐 -->
      <#if seen>
        <p>この文が表示されます</p>
      </#if>

      <!-- 4. ループ -->
      <ol>
        <#list todos as todo>
          <li>${todo.text}</li>
        </#list>
      </ol>

      <!-- 5. イベントリスナ -->
      <p id="bind-title"></p>
      <button id="add-g">Add G</button>

      <!-- 6. 双方向バインディング -->
      <p id="bind-input"></p>
      <input type="text" id="input-text">
    </div>

    <script src="./index.js"></script>
  </body>
</html>
