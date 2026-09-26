const skeleton = document.querySelector('.skeleton-wrapper');
const dataList = document.getElementById('data-list');
const emptyState = document.querySelector('.state-empty');
const errorState = document.querySelector('.state-error');
const retryBtn = document.getElementById('retry-btn');

function showState(state) {
  skeleton.hidden    = state !== 'loading';
  dataList.hidden    = state !== 'loaded';
  emptyState.hidden  = state !== 'empty';
  errorState.hidden  = state !== 'error';
}

async function loadData() {
  showState('loading');
  try {
    // simulate fetch
    const data = await fakeFetch();
    if (data.length === 0) {
      showState('empty');
    } else {
      renderData(data);
      showState('loaded');
    }
  } catch (err) {
    showState('error');
  }
}

retryBtn.addEventListener('click', loadData);

loadData();