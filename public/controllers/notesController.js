/**
 * Created by Vishw on 12/27/2016.
 */

(function () {
    angular.module('myApp')
        .controller('NotesController',NotesController);

    function NotesController () {
            var nc = this;
            nc.form = false;
            nc.notes = {};
            nc.allNotes = [];
            nc.showFormShow = function () {
                nc.form = true;
            }
            nc.showFormHide = function () {
                nc.form = false;
            }
            nc.addNote = function () {
              nc.notes.title =  nc.title;
              nc.notes.note =  nc.note;
              nc.allNotes.push(nc.notes);
                console.log(nc.allNotes);
            }
    }
})();