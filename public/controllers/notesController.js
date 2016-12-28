/**
 * Created by Vishw on 12/27/2016.
 */

(function () {
    angular.module('myApp')
        .controller('NotesController',NotesController);

    NotesController.$inject = ['notesService'];

    function NotesController (notesService) {
            var nc = this;
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

                angular.forEach(nc.allNotes,function (x) {
                    console.log(x.title);
                })
            }
            nc.deleteNote = function (id) {
                nc.allNotes.splice(id,1);
            }

    }
})();