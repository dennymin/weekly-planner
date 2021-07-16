var data = {
  entries: [],
  editing: null,
  nextEntryId: 1,
  view: 'entry-form'
};

var previousDataJSON = localStorage.getItem('week-planner-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function storeData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-local-storage', dataJSON);
}

window.addEventListener('beforeunload', storeData);

var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal-window');
function toggleModal(event) {
  $modal.classList.toggle('hidden');
}
$entryButton.addEventListener('click', toggleModal);

var $submitButton = document.querySelector('.submit-button');
var $entryFormElements = document.forms[0];
function handleSubmit(event) {
  event.preventDefault();
  var newObjectEntry = {};
  newObjectEntry.day = $entryFormElements.elements.day.value;
  newObjectEntry.time = $entryFormElements.elements.time.value;
  newObjectEntry.task = $entryFormElements.elements.task.value;
  newObjectEntry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.push(newObjectEntry);
  toggleModal();
}
$submitButton.addEventListener('click', handleSubmit);
