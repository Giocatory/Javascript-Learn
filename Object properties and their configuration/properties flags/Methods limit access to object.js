Object.preventExtensions(obj) // Запрещает добавлять новые свойства в объект.

Object.seal(obj) // Запрещает добавлять / удалять свойства.Устанавливает configurable: false для всех существующих свойств.

Object.freeze(obj) // Запрещает добавлять/удалять/изменять свойства.Устанавливает configurable: false, writable: false для всех существующих свойств.



/* А также есть методы для их проверки: */

Object.isExtensible(obj) // Возвращает false, если добавление свойств запрещено, иначе true.

Object.isSealed(obj) // Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.

Object.isFrozen(obj) // Возвращает true, если добавление/удаление/изменение свойств запрещено,
    // и для всех текущих свойств установлено configurable: false, writable: false.