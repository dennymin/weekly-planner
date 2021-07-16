var data = {
  day: {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
  },
  editing: null,
  nextEntryId: 1
};
var previousDataJSON = localStorage.getItem('week-planner-local-storage');
var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal-window');
var $submitButton = document.querySelector('.submit-button');
var $entryFormElements = document.forms[0];

window.addEventListener('beforeunload', storeData);
$entryButton.addEventListener('click', toggleModal);
$submitButton.addEventListener('click', handleSubmit);

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function storeData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-local-storage', dataJSON);
}

function toggleModal(event) {
  $modal.classList.toggle('hidden');
}

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

var $weekDayEntries = document.querySelector('.entry-days');
var $weekDayButton = document.querySelectorAll('button[day]');
var $tableDay = document.querySelectorAll('.table-day');
$weekDayEntries.addEventListener('click', daySelect);
function daySelect(event) {
  event.preventDefault();
  for (var daysInAWeek = 0; daysInAWeek < $weekDayButton.length; daysInAWeek++) {
    if ($weekDayButton[daysInAWeek].getAttribute('day') === event.target.getAttribute('day')) {
      // $tableDay.textContent = 'Schedule Events For' + event.target.getAttribute('day');
      $tableDay.textContent.value = 'hi';
    }
  }
}
