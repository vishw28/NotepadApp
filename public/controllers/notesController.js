/**
 * Created by Vishw on 12/27/2016.
 */

(function () {
    angular.module('myApp')
        .controller('NotesController',NotesController);

    NotesController.$inject = ['notesService'];

    function NotesController (notesService) {
            var nc = this;
            var save_id;
            nc.form = false;
            nc.notes = {};
            nc.allNotes = notesService.getNotes();
            nc.showFormShow = function () {
                nc.form = true;
            }
            nc.showFormHide = function () {
                nc.form = false;
            }
            nc.addNote = function () {
                notesService.addNotes(nc.notes);
                nc.notes = {};
            }
            nc.deleteNote = function (delete_id) {
                nc.allNotes.splice(delete_id,1);
            }
            nc.editNote =function (edit_id) {
                nc.edit = true;
                nc.notes.title = nc.allNotes[edit_id].title;
                nc.notes.note = nc.allNotes[edit_id].note;
                save_id = edit_id;
            }

            nc.saveNote = function () {
                nc.allNotes.splice(save_id,1,nc.notes);
                nc.notes={};
                nc.edit = false;
            }

    }
})();