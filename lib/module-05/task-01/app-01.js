"use strict";
// За основу возьми домашнее задание из модуля №4, но теперь необходимо написать функцию-конструктор Notepad для создания объекта управляющего коллекцией заметок.
'use strics'; // Конструктор Notepad при инициализации принимает массив заметок
// Перенеси свойства и методы объекта notepad в конструктор

var Notepad = function Notepad() {
  var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  this.notes = notes;

  this.getNotes = function () {
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
    return this.notes;
  };

  this.findNoteById = function (id) {
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.notes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var note = _step.value;

        if (note.id === id) {
          return note;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  this.saveNote = function (note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    this.notes.push(note);
    return note;
  };

  this.deleteNote = function (id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    // const deleteId = this.findNoteById(id);
    // const deleteIndex = this.notes.indexOf(deleteId);
    // this.notes.splice(deleteIndex, 1);
    this.notes.splice(this.notes.indexOf(this.findNoteById(id)), 1);
  };

  this.updateNoteContent = function (id, updatedContent) {
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
    var updateNote = this.findNoteById(id);
    Object.assign(updateNote, updatedContent);
    return updateNote;
  };

  this.updateNotePriority = function (id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
    var updateNote = this.findNoteById(id);
    updateNote.priority = priority;
    return updateNote;
  };

  this.filterNotesByQuery = function (query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    var noteValues = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.notes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var note = _step2.value;

        if (note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query)) {
          noteValues.push(note);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return noteValues;
  };

  this.filterNotesByPriority = function (priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    var filterValues = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this.notes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var filter = _step3.value;

        if (filter.priority === priority) {
          filterValues.push(filter);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return filterValues;
  };
}; // Добавляем статическое свойство, в котором храним приоритеты.


Notepad.Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
}; // Далее идет код для проверки работоспособности конструктора и созданного экземпляра, вставь его в конец скрипта. Твоя реализация конструктора Notepad должна проходить этот тест.

var initialNotes = [{
  id: 'id-1',
  title: 'JavaScript essentials',
  body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Notepad.Priority.HIGH
}, {
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Notepad.Priority.NORMAL
}];
var notepad = new Notepad(initialNotes);
/*
 * Смотрю что у меня в заметках после инициализации
 */

console.log('Все текущие заметки: ', notepad.getNotes());
/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL
});
notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW
});
console.log('Все текущие заметки: ', notepad.getNotes());
/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */

notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);
console.log('Заметки после обновления приоритета для id-4: ', notepad.getNotes());
/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */

notepad.updateNotePriority('id-3', Notepad.Priority.LOW);
console.log('Заметки после обновления приоритета для id-3: ', notepad.getNotes());
/*
 * Решил отфильтровать заметки по слову html
 */

console.log('Отфильтровали заметки по ключевому слову "html": ', notepad.filterNotesByQuery('html'));
/*
 * Решил отфильтровать заметки по слову javascript
 */

console.log('Отфильтровали заметки по ключевому слову "javascript": ', notepad.filterNotesByQuery('javascript'));
/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */

console.log('Отфильтровали заметки по нормальному приоритету: ', notepad.filterNotesByPriority(Notepad.Priority.NORMAL));
/*
 * Обновим контент заметки с id-3
 */

notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js'
});
console.log('Заметки после обновления контента заметки с id-3: ', notepad.getNotes());
/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */

notepad.deleteNote('id-2');
console.log('Заметки после удаления с id-2: ', notepad.getNotes());