let pastCount = 0;

function getVideos() {
  let videoCount = document.getElementsByTagName('video').length;
  for (let i = 0; i < videoCount; i++) {
    findReactionsID(i);
  }
}

function findReactionsID(i) {
  let videoTAg = document.getElementsByTagName('video')[i];
  let videoUrl = videoTAg.getAttribute('src').replace(/\s/g, '');
  let parentNode =
    videoTAg.parentElement.parentElement.parentElement.parentElement
      .parentElement.parentElement.parentElement;
  let lastChild = parentNode.lastElementChild.firstElementChild.children[2];
  addButton(lastChild.id, videoUrl);
  // console.log(videoTAg);
}

function addButton(id, videoUrl) {
  //create elements

  let span = document.createElement('span');
  let icon = document.createElement('li-icon');
  let path = document.createElement('path');
  let buttonText = document.createElement('a');
  let svg = document.createElement('svg');
  let downloadButton = document.createElement('Button');
  let node = document.createTextNode('Download');

  //adding classlists
  span.classList.add('comment', 'ember-view');
  icon.classList.add('artdeco-button__icon');
  buttonText.classList.add('artdeco-button__text');

  downloadButton.classList.add(
    'artdeco-button',
    'comment-button',
    'artdeco-button--muted',
    'artdeco-button--4',
    'artdeco-button--tertiary',
    'ember-view'
  );

  svg.setAttribute('data-supported-dps', '24x24');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  path.setAttribute(
    'd',
    'M24 12a1.18 1.18 0 00-.36-.84L14 2v6h-3A10 10 0 001 18v4h1.87A6.11 6.11 0 019 16h5v6l9.63-9.14A1.18 1.18 0 0024 12zm-8 5.54V14H9a8.15 8.15 0 00-6 2.84A8 8 0 0111 10h5V6.48L21.81 12z'
  );
  buttonText.setAttribute('download', '');
  buttonText.setAttribute('href', videoUrl);

  let videoPost = document.getElementById(id);

  //append children
  svg.appendChild(path);
  icon.appendChild(svg);
  buttonText.appendChild(node);
  downloadButton.appendChild(icon);
  downloadButton.appendChild(buttonText);
  span.appendChild(downloadButton);
  videoPost.appendChild(span);

  span.addEventListener('click', function () {
    // console.log(videoUrl)
  });
}
const targetNode = document.getElementsByClassName('core-rail')[0];

const config = { attributes: false, childList: true, subtree: true };

const callback = function (mutationsList) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
	  console.table(mutationsList)
    if (mutation.addedNodes.length) {
		
		if (mutation.addedNodes[0].tagName === 'VIDEO') {
        console.log(mutation.addedNodes[0].tagName);
      }
		
     // console.log(mutation.addedNodes[0]);
      /*if (pastCount != document.getElementsByTagName('video').length) {
        getVideos();
        pastCount = document.getElementsByTagName('video').length;
        //   console.log(pastCount);
      }*/
	
  }
}
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
//observer.disconnect();

document.getElementById('addnode').addEventListener('click', function () {
  let input = document.createElement('input');
  let body = document.getElementsByTagName('body')[0];
  body.appendChild(input);
});
