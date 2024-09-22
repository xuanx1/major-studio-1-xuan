// sort depths -> limit between 0-100m -> allocate png for every 20m/species fish -> randomise result upon click -> populate at position of reefs -> limit until before deep sea 

//  run sorting and load it on page length for "depth" as y axis = "depth" and for x axis use math.random to position png files of fish thumbnails on the page width

// consider minimum scales(readability) - max scales(to fit into screen but at the same time give ratio to smaller fishes) / a title / a legend / scales / units


const allDepth = [];
const filteredDepths = [];

// Function to display sorted depths
function displaySortedDepths(Depth) {
  console.log('Sorted Depths:', Depth);
}

// load depth data
async function loadData() {
  try {
    const response = await fetch('data-depth.json');
    const data = await response.json();
    console.log('Data loaded successfully:', data);

    // Log the structure of the data
    console.log('Data Structure:', JSON.stringify(data, null, 2));

    // Check if data is an array
    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }

    // Assuming data is an array of objects with a 'depth' property
    allDepth.push(...data.map(item => {
      if (item.Depth === undefined) {
        console.warn('Item does not have a depth property:', item);
        return null;
      }
      return item.Depth;
    }).filter(Depth => Depth !== null));

    // Log the loaded depths
    console.log('All Depths:', allDepth);

    // Filter depths between 0 and 100 meters and sort them
    const filtered = allDepth.filter(Depth => Depth >= 5 && Depth <= 15).sort((a, b) => a - b);
    console.log('Filtered and Sorted Depths:', filtered);

    // Push filtered depths to the global array
    filteredDepths.push(...filtered);

    // Display sorted depths
    displaySortedDepths(filteredDepths);

    // Allocate PNG for 5m interval of depth
    const depthGroups = {};
    filteredDepths.forEach(Depth => {
      const group = Math.floor(Depth / 5) * 5;
      if (!depthGroups[group]) {
      depthGroups[group] = [];
      }
      depthGroups[group].push(Depth);
    });

    // Log the depth groups
    console.log('Depth Groups:', depthGroups);

    // Populate at position of reefs
    const reefContainer = document.getElementById('reefContainer');

// Limit to 50 images
const limitedDepths = filteredDepths.slice(0, 40);

// Create and append anchor elements to each randomized image
limitedDepths.forEach(depth => {
  const anchorElement = document.createElement('a');

  const correspondingItem = data.find(item => item.Depth === depth);
  if (correspondingItem && correspondingItem.link) {
    anchorElement.href = correspondingItem.link;
    anchorElement.target = '_blank';
  } else {
    anchorElement.href = '#';
  }

  anchorElement.style.position = 'absolute';
  anchorElement.style.top = `${depth}px`;
  anchorElement.style.left = `${Math.random() * window.innerWidth}px`;

  const fishElement = document.createElement('img');
  const possiblePaths = [
    `https://github.com/user-attachments/assets/cd20375b-6246-4af2-ac05-82a7c6d82719`,
    `https://github.com/user-attachments/assets/a598e241-1452-436a-a9cd-427b5a0f0e67`,
    `https://github.com/user-attachments/assets/5e380432-852d-4f0c-8d8c-a3d65ee23a95`,
    `https://github.com/user-attachments/assets/132901dd-eeeb-4711-89d1-c77b6c1113c9)`,
    `https://github.com/user-attachments/assets/b309da2e-eb60-4333-ba9c-ced71e8b6cb4)`

  ];
  fishElement.src = possiblePaths[Math.floor(Math.random() * possiblePaths.length)];
  fishElement.style.position = 'absolute';
  fishElement.style.top = '0';
  fishElement.style.left = '0';

  // Randomize color
  fishElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

  // Randomize size
  const randomSize = Math.random() * 50 + 50; // Size between 50px and 100px
  fishElement.style.width = `${randomSize}px`;
  fishElement.style.height = 'auto';

  // Append fish element to anchor element
  anchorElement.appendChild(fishElement);

  // Disperse in y axis + restrict to window width
  anchorElement.style.top = `${1320 + depth + Math.random() * 1000}px`; // Randomize y position within a range
  anchorElement.style.left = `${145 + Math.random() * (window.innerWidth - fishElement.width + 450)}px`; // Randomize x position within window width
  anchorElement.style.zIndex = 10;

  // Append anchor element to reef container
  reefContainer.appendChild(anchorElement);
});

  } catch (error) {
    console.error('Error loading data:', error);
  }
}

// Call loadData to start the process
loadData();