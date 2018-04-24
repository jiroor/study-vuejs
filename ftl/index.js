// 5. イベントリスナ
(function() {
  var data = {
    title: 'mogg',
  };

  var element = {
    bindTitle: document.getElementById('bind-title'),
    buttonAddG: document.getElementById('add-g'),
  };

  element.buttonAddG.addEventListener('click', function() {
    data.title = `${data.title}g`;

    element.bindTitle.innerText = data.title;
  });
})();

// 6. 双方向バインディング
(function() {
  var data = {
    input: 'Input text.',
  };

  var element = {
    bindInput: document.getElementById('bind-input'),
    formInputText: document.getElementById('input-text'),
  };

  (function init() {
    element.bindInput.innerText = data.input;
  })();

  element.formInputText.addEventListener('input', function() {
    data.input = element.formInputText.value;

    element.bindInput.innerText = data.input;
  });
})();
