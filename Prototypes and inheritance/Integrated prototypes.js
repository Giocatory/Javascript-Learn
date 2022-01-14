'use strict';

// Built-in prototypes can be changed.

String.prototype.showInConsole = function() { console.log(this); }
    // Will work for any lines

"I'm Giocatory".showInConsole(); // I'm Giocatory




if (!String.prototype.repeat) { // Если такого метода нет
    // добавляем его в прототип

    String.prototype.repeat = function(n) {
        // повторить строку n раз

        // на самом деле код должен быть немного более сложным
        // (полный алгоритм можно найти в спецификации)
        // но даже неполный полифил зачастую достаточно хорош для использования
        return new Array(n + 1).join(this);
    };
}

console.log("Mi".repeat(4)); // MiMiMiMi