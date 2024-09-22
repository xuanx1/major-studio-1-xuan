// sort depths -> limit between 0-100m -> allocate png for every 20m/species fish -> randomise result upon click -> populate at position of reefs -> limit until before deep sea 

//  run sorting and load it on page length for "depth" as y axis = "depth" and for x axis use math.random to position png files of fish thumbnails on the page width

// consider minimum scales(readability) - max scales(to fit into screen but at the same time give ratio to smaller fishes) / a title / a legend / scales / units

const allDepth = [];

// load depth data
d3.json('data-depth.json').then(depthData => {
  depthData.forEach(fish => {
    if (fish.depth) {
      allDepth.push(fish.depth);
    }
  });

  // Filter depths between 0 and 100 meters
  const filteredDepths = allDepth.filter(depth => depth >= 0 && depth <= 100);

  // Sort depths in ascending order
  filteredDepths.sort((a, b) => a - b);
  displaySortedDepths(filteredDepths);

  // Allocate PNG for every 20m/species fish
  const depthGroups = {};
  filteredDepths.forEach(depth => {
    const group = Math.floor(depth / 20) * 20;
    if (!depthGroups[group]) {
      depthGroups[group] = [];
    }
    depthGroups[group].push(depth);
  });

  // Randomize result upon click
  document.addEventListener('click', () => {
    const randomDepths = filteredDepths.sort(() => Math.random() - 0.5);
    console.log('Randomized Depths:', randomDepths);
  });

  // Populate at position of reefs
  const reefContainer = document.getElementById('reefContainer');
  filteredDepths.forEach(depth => {
    const fishElement = document.createElement('img');
    const group = Math.floor(depth / 20) * 20;
    const possiblePaths = [
      `path/to/fish_${group}_1.png`,
      `path/to/fish_${group}_2.png`,
      `path/to/fish_${group}_3.png`
    ];
    fishElement.src = possiblePaths[Math.floor(Math.random() * possiblePaths.length)];
    fishElement.style.position = 'absolute';
    fishElement.style.top = `${depth}px`;
    fishElement.style.left = `${Math.random() * window.innerWidth}px`;

    // Randomize color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    fishElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

    // Randomize size
    const randomSize = Math.random() * 50 + 50; // Size between 50px and 100px
    fishElement.style.width = `${randomSize}px`;
    fishElement.style.height = 'auto';

    reefContainer.appendChild(fishElement);
  });
});


// Function to display sorted depths
function displaySortedDepths(depths) {
  console.log('Sorted Depths:', depths);




  
  // define dimensions and margins for the graphic
  const margin = ({top: 100, right: 50, bottom: 100, left: 80});
  const width = 1400;
  const height = 700;



  // scrolling scale
  // Function to translate scrolling distance to meters
  function scrollToMeters(scrollDistance) {
    // Assuming 1 pixel scroll equals 1 meter for simplicity
    return scrollDistance;
  }

  // Add scroll event listener to the window
  window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    const meters = scrollToMeters(scrollDistance);
    console.log(`Scrolled distance in meters: ${meters}`);

    // Update the text showing the scrolled distance
    let scrollText = document.getElementById('scrollText');
    if (!scrollText) {
      scrollText = document.createElement('div');
      scrollText.id = 'scrollText';
      scrollText.style.position = 'fixed';
      scrollText.style.top = '10px';
      scrollText.style.right = '10px';
      scrollText.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      scrollText.style.padding = '5px';
      scrollText.style.borderRadius = '5px';
      scrollText.style.transition = 'transform 0.2s ease-out';
      document.body.appendChild(scrollText);
      scrollText.style.top = '10px';
      scrollText.style.right = '10px';
      scrollText.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      scrollText.style.padding = '5px';
      scrollText.style.borderRadius = '5px';
      document.body.appendChild(scrollText);
    }
    scrollText.textContent = `Scrolled distance in meters: ${meters}`;
  });