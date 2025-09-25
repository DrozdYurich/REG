// База тестов
const testDatabase = {
  html: {
    title: "Тест по HTML",
    questions: [
      {
        text: "Что означает аббревиатура HTML?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
        correct: 0
      },
      {
        text: "Какой тег используется для создания гиперссылки?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
      },
      {
        text: "Какой тег определяет основную часть документа HTML?",
        options: ["<body>", "<main>", "<section>", "<html>"],
        correct: 0
      },
      {
        text: "Как правильно вставить изображение?",
        options: [
          '<img src="image.jpg" alt="Описание">',
          '<image src="image.jpg">',
          '<img href="image.jpg">',
          '<picture src="image.jpg">'
        ],
        correct: 0
      },
      {
        text: "Какой атрибут задаёт уникальный идентификатор элемента?",
        options: ["class", "id", "name", "tag"],
        correct: 1
      },
      {
        text: "Какой тег используется для нумерованного списка?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 1
      },
      {
        text: "Где правильно размещать тег <title>?",
        options: ["В <body>", "В <head>", "В <header>", "Вне <html>"],
        correct: 1
      },
      {
        text: "Какой тег создаёт горизонтальную линию?",
        options: ["<line>", "<hr>", "<br>", "<divider>"],
        correct: 1
      },
      {
        text: "Какой тег используется для ввода текста?",
        options: ["<input type='text'>", "<text>", "<textbox>", "<field>"],
        correct: 0
      },
      {
        text: "Какой тег определяет таблицу?",
        options: ["<table>", "<tab>", "<grid>", "<data>"],
        correct: 0
      }
    ]
  },
  css: {
    title: "Тест по CSS",
    questions: [
      {
        text: "Какой селектор выбирает все элементы <p>?",
        options: ["p", ".p", "#p", "*"],
        correct: 0
      },
      {
        text: "Как задать цвет фона элемента?",
        options: ["background-color", "color", "bg-color", "font-color"],
        correct: 0
      },
      {
        text: "Какой единицей измерения задаётся размер шрифта относительно родителя?",
        options: ["px", "em", "rem", "pt"],
        correct: 1
      },
      {
        text: "Как выровнять текст по центру?",
        options: ["text-align: center;", "align: center;", "center-text: true;", "text-center: yes;"],
        correct: 0
      },
      {
        text: "Какой псевдокласс применяется при наведении?",
        options: [":hover", ":focus", ":active", ":visit"],
        correct: 0
      },
      {
        text: "Как скрыть элемент, но оставить его место в потоке?",
        options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hide: true;"],
        correct: 1
      },
      {
        text: "Как задать отступы со всех сторон: 10px?",
        options: ["margin: 10px;", "padding: 10px;", "space: 10px;", "border: 10px;"],
        correct: 0
      },
      {
        text: "Какой селектор выбирает элемент с классом 'btn'?",
        options: ["#btn", ".btn", "btn", "*btn"],
        correct: 1
      },
      {
        text: "Как сделать элемент абсолютно позиционированным?",
        options: ["position: absolute;", "layout: absolute;", "absolute: true;", "fixed: absolute;"],
        correct: 0
      },
      {
        text: "Какой свойство задаёт плавный переход?",
        options: ["animation", "transition", "smooth", "ease"],
        correct: 1
      }
    ]
  },
  js: {
    title: "Тест по JavaScript",
    questions: [
      {
        text: "Какой метод используется для вывода сообщения в консоль?",
        options: ["print()", "log()", "console.log()", "alert()"],
        correct: 2
      },
      {
        text: "Как объявить переменную в современном JS?",
        options: ["var", "let", "const", "все перечисленные"],
        correct: 3
      },
      {
        text: "Какой тип данных возвращает typeof []?",
        options: ["array", "object", "list", "undefined"],
        correct: 1
      },
      {
        text: "Как добавить элемент в конец массива?",
        options: ["push()", "append()", "add()", "insert()"],
        correct: 0
      },
      {
        text: "Какой цикл выполняется хотя бы один раз?",
        options: ["for", "while", "do...while", "loop"],
        correct: 2
      },
      {
        text: "Как получить элемент по id?",
        options: [
          "document.getElementById('id')",
          "document.querySelector('#id')",
          "оба варианта верны",
          "document.find('id')"
        ],
        correct: 2
      },
      {
        text: "Что вернёт выражение: 5 + '5'?",
        options: ["10", "'55'", "ошибка", "NaN"],
        correct: 1
      },
      {
        text: "Как объявить функцию?",
        options: [
          "function myFunc() {}",
          "const myFunc = () => {}",
          "оба варианта верны",
          "def myFunc():"
        ],
        correct: 2
      },
      {
        text: "Какой метод преобразует объект в JSON?",
        options: ["JSON.stringify()", "JSON.parse()", "toJSON()", "serialize()"],
        correct: 0
      },
      {
        text: "Что такое замыкание (closure)?",
        options: [
          "Функция внутри функции, имеющая доступ к внешним переменным",
          "Ошибка памяти",
          "Способ шифрования",
          "Тип данных"
        ],
        correct: 0
      }
    ]
  },
  git: {
    title: "Тест по Git",
    questions: [
      {
        text: "Какая команда инициализирует репозиторий?",
        options: ["git start", "git init", "git create", "git new"],
        correct: 1
      },
      {
        text: "Как добавить изменения в индекс?",
        options: ["git add", "git commit", "git push", "git save"],
        correct: 0
      },
      {
        text: "Какая команда отправляет изменения на удалённый репозиторий?",
        options: ["git send", "git upload", "git push", "git commit"],
        correct: 2
      },
      {
        text: "Как посмотреть историю коммитов?",
        options: ["git log", "git history", "git show", "git commits"],
        correct: 0
      },
      {
        text: "Как создать новую ветку?",
        options: ["git branch new", "git create branch", "git new-branch", "git checkout -b new"],
        correct: 3
      },
      {
        text: "Что делает команда git clone?",
        options: [
          "Создаёт копию удалённого репозитория локально",
          "Удаляет репозиторий",
          "Объединяет ветки",
          "Сохраняет изменения"
        ],
        correct: 0
      },
      {
        text: "Как отменить последний коммит (сохраняя изменения)?",
        options: [
          "git reset --soft HEAD~1",
          "git undo",
          "git revert",
          "git delete commit"
        ],
        correct: 0
      },
      {
        text: "Что такое 'origin' в Git?",
        options: [
          "Локальная ветка",
          "Удалённый репозиторий по умолчанию",
          "Имя пользователя",
          "Файл конфигурации"
        ],
        correct: 1
      },
      {
        text: "Как посмотреть текущее состояние репозитория?",
        options: ["git status", "git info", "git check", "git state"],
        correct: 0
      },
      {
        text: "Как объединить ветку feature в main?",
        options: [
          "git merge feature",
          "git join feature",
          "git combine feature",
          "git add feature"
        ],
        correct: 0
      }
    ]
  }
};

// DOM-элемент
const container = document.getElementById('test-container');

// Показ списка тестов
function showTestList() {
  container.innerHTML = `
    <header class="page-header">
      <h1>📚 Тестирование</h1>
      <p>Выберите тест для прохождения</p>
    </header>
    <main class="content">
      <div class="tests-list">
        <button class="test-btn" data-test="html">Тест по HTML</button>
        <button class="test-btn" data-test="css">Тест по CSS</button>
        <button class="test-btn" data-test="js">Тест по JavaScript</button>
        <button class="test-btn" data-test="git">Тест по Git</button>
      </div>
    </main>
  `;

  // Навешиваем обработчики
  document.querySelectorAll('.test-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const testKey = btn.getAttribute('data-test');
      loadTest(testKey);
    });
  });
}

// Загрузка теста
function loadTest(testKey) {
  const test = testDatabase[testKey];
  if (!test) return;

  const questionsToShow = test.questions.slice(0, 10);

  let questionsHTML = questionsToShow.map((q, index) => `
    <div class="question" data-index="${index}" data-correct="${q.correct}">
      <h3>${index + 1}. ${q.text}</h3>
      <div class="options">
        ${q.options.map((opt, i) => `
          <div class="option" data-option="${i}">${opt}</div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <header class="page-header">
      <h1>📝 ${test.title}</h1>
      <p>Ответьте на вопросы и нажмите «Проверить»</p>
      <a href="#" class="back-to-tests">← К выбору тестов</a>
    </header>
    <main class="content">
      ${questionsHTML}
      <button class="submit-btn">Проверить результаты</button>
    </main>
  `;

  // Обработчик кнопки "К выбору тестов"
  document.querySelector('.back-to-tests').addEventListener('click', (e) => {
    e.preventDefault();
    showTestList();
  });

  // Обработчики выбора ответов
  document.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
      const question = opt.closest('.question');
      question.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Проверка результата
  document.querySelector('.submit-btn').addEventListener('click', () => {
    let correctCount = 0;
    document.querySelectorAll('.question').forEach(q => {
      const selected = q.querySelector('.option.selected');
      const correctIndex = parseInt(q.getAttribute('data-correct'));
      if (selected && parseInt(selected.getAttribute('data-option')) === correctIndex) {
        correctCount++;
      }
    });

    const total = questionsToShow.length;
    alert(`Ваш результат: ${correctCount} из ${total}`);
  });
}

// Инициализация: показываем список тестов при загрузке
document.addEventListener('DOMContentLoaded', () => {
  showTestList();
});