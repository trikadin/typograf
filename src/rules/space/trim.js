Typograf.rule({
    title: 'Удаление пробелов в начале и в конце текста',
    name: 'space:trim',
    sortIndex: 530,
    func: function(text) {
        return text.trim();
    }
});
