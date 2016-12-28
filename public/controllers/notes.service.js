/**
 * Created by Vishw on 12/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .service('notesService', function () {
            var notes = [];
            this.addNotes = function (note) {
                notes.push(note);
            };
            this.getNotes = function () {
                return notes;
            }
        })
})();