var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal-window');
function openModal(event) {
  $modal.classList.toggle('hidden');
}
$entryButton.addEventListener('click', openModal);

var $submitButton = document.querySelector('.submit-button');
var $entryFormElements = document.forms[0];
function handleSubmit(event) {
  var newObjectEntry = {};
  newObjectEntry.day = $entryFormElements.elements.day.value;
  newObjectEntry.time = $entryFormElements.elements.time.value;
  newObjectEntry.task = $entryFormElements.elements.task.value;
  newObjectEntry.entryId = data.nextEntryId;
  data.entries.unshift(newObjectEntry);
}
$submitButton.addEventListener('click', handleSubmit);
