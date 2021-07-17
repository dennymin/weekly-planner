var data = {
  day: {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  },
  editing: null
};
var previousDataJSON = localStorage.getItem('week-planner-local-storage');
var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal-window');
var $submitButton = document.querySelector('.submit-button');
var $entryFormElements = document.forms[0];
var $weekDayEntries = document.querySelector('.entry-days');
var $weekDayButton = document.querySelectorAll('button[day]');
var $tableDay = document.querySelector('.table-day');
var $table = document.querySelector('table');

window.addEventListener('beforeunload', storeData);
$entryButton.addEventListener('click', toggleModal);
$submitButton.addEventListener('click', handleSubmit);
$weekDayEntries.addEventListener('click', daySelect);

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
  newObjectEntry.time = $entryFormElements.elements.time.value;
  newObjectEntry.task = $entryFormElements.elements.task.value;
  var optionDay = $entryFormElements.elements.day.value;
  data.day[optionDay].push(newObjectEntry);
  toggleModal();
}

function daySelect(event) {
  for (var daysInAWeek = 0; daysInAWeek < $weekDayButton.length; daysInAWeek++) {
    if ($weekDayButton[daysInAWeek].getAttribute('day') === event.target.getAttribute('day')) {
      $tableDay.textContent = 'Schedule Events For ' + event.target.getAttribute('day');
    }
  }
}

function organizeEntriesOldestToYoungest(date) {
  var organizedData = [];
  var oldestEntry = 0;
  for (var dayEntryIndex = 0; dayEntryIndex < date.length; dayEntryIndex++) {
    if (date[dayEntryIndex] > oldestEntry) {

    }
  }
}
