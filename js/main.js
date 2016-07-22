/**
 * Main module
 *
 * @author victor li
 * @date 2016/07/22
 * @version 1.0.0
 */

'use strict';

window.onload = function() {

    init();

};

var editor;

function registerEvents() {
    var editorTimer = null;
    editor.on('change', function(ins, chgs) {
        clearTimeout(editorTimer);
        editorTimer = setTimeout(function() {
            saveCode(editor.getValue())();
        }, 500);
    });
};

/**
 * Initialize code editor
 * @param {config} codeMirror config
 */
function initCodeMirror(config) {
    editor = CodeMirror.fromTextArea(document.querySelector('#editor'), {
        lineNumbers: true,
        mode: 'javascript'
    });
};

function init() {
    initCodeMirror();
    registerEvents();

    var code = retrieveCode();
    editor.setValue(code);
};

function retrieveCode() {
    return localStorage.getItem('jjj_temp_code');
};

function saveCode(code) {
    return function(remote) {
        if (remote)
            return save(code);

        return saveTemporary(code);
    }
};

function save(code) {
    // TODO
};

function saveTemporary(code) {
    if (undefined !== code)
        localStorage.setItem('jjj_temp_code', code);
};

function _extend(o1, o2) {
    var o = o1;
    for (var k in o2) {
        o[k] = o2[k];
    }

    return o;
}

