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
  newObjectEntry.time = $entryFormElements.elements.time.value;
  newObjectEntry.task = $entryFormElements.elements.task.value;
  var optionDay = $entryFormElements.elements.day.value;
  data.day..push(newObjectEntry);
  toggleModal();
}

var $weekDayEntries = document.querySelector('.entry-days');
var $weekDayButton = document.querySelectorAll('button[day]');
var $tableDay = document.querySelector('.table-day');
$weekDayEntries.addEventListener('click', daySelect);
function daySelect(event) {
  for (var daysInAWeek = 0; daysInAWeek < $weekDayButton.length; daysInAWeek++) {
    if ($weekDayButton[daysInAWeek].getAttribute('day') === event.target.getAttribute('day')) {
      $tableDay.textContent = 'Schedule Events For ' + event.target.getAttribute('day');
    }
  }
}
