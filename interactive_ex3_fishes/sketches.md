## interactive_ex3
#initial concept sketches
![IMG_4947](https://github.com/user-attachments/assets/bd9e6006-8298-4969-953b-54eee98a82a0)
SWIMMING BETWEEN CONTAINERS - Voronoi classification + 3 level filters animated sorting through d3 force
1. Sorting by Oceans (Geospatial Clustering)
Ocean zones (e.g., Pacific, Atlantic, Indian) act as centers or seeds for Voronoi cells.
Fish species are associated with these ocean zones based on their primary distribution.
Outcome: Each Voronoi region will represent the geographical boundaries of a particular ocean, helping to classify which fish species belong to which ocean.
Example: A species that lives primarily in the Atlantic Ocean will be associated with the Voronoi cell generated around the "Atlantic Ocean" seed point.

2. Sorting by Archetypes (Ecological Roles or Morphology)
Archetypes refer to classifications such as predators, prey or others.
The Voronoi diagram uses these archetypes as centers, partitioning fish species into regions.
Each fish species is classified by the archetype it is most similar to, based on traits like body structure.
Example: If a species exhibits traits of both predator and scavenger, it would fall within the Voronoi cell closest to the “Predator” archetype but could also lie near the boundary with “Scavenger.”

3. Sorting by Depth Preferences (Vertical Partitioning)
Depth preferences of fish (e.g., epipelagic, mesopelagic, bathypelagic) can be modeled with Voronoi regions along the vertical axis (water column).
Depth zones serve as the centers, and fish species are grouped based on which depth range they inhabit most frequently.
Outcome: Fish that live in similar depth ranges are classified into the same Voronoi region.
Example: A swordfish, known to travel between epipelagic and mesopelagic zones, will be classified in the Voronoi cell closest to these depths.

![IMG_4949](https://github.com/user-attachments/assets/3bb518cf-a103-4ab3-9359-2a9011cbcb5c)
GENERATIONAL LEAF - Structure of a Word Tree Diagram for Fish Classification. 
Central Node - The root or starting point of the diagram is labeled “Fish Species.”
From this node, branches lead into the three major categories:
Oceans (where the species are found)
Archetypes (their ecological roles or body types)
Depths (their preferred depth ranges)

1. Branching by Oceans (Geographical Distribution)
From the “Oceans” node, the branches extend to different oceans:
Pacific Ocean
Tuna
Marlin
Atlantic Ocean
Atlantic Cod
Anglerfish
Indian Ocean
Whale Shark
Manta Ray
*Each ocean has sub-branches listing fish species commonly found in that particular body of water.

2. Branching by Archetypes (Ecological Roles or Morphologies)
From the “Archetypes” node, the branches represent ecological roles or body types:
Predators
Shark
Barracuda
Scavengers
Hagfish
Goblin Shark
Filter Feeders
Whale Shark
Manta Ray
*This section captures the ecological niches of fish species, helping us understand their roles in marine ecosystems.

3. Branching by Depths (Vertical Zones of the Ocean)
From the “Depths” node, the branches extend to different water column zones:
Epipelagic Zone (0-200m)
Mahi-mahi
Sailfish
Mesopelagic Zone (200-1000m)
Lanternfish
Swordfish
Bathypelagic Zone (1000-4000m)
Anglerfish
Gulper Eel
*This part of the tree organizes fish species by the depths they inhabit, from surface waters to deep-sea zones.

![IMG_4948](https://github.com/user-attachments/assets/ed336695-d9f7-44f8-a170-6caccaefb70f)
SCROLLYTELLING - Life at Different Ocean Levels
Visual: A vertical scrolling animation through the ocean's water column (from surface to deep-sea zones).
Scroll-through Example:
Epipelagic Zone (0-200m): Sailfish and Mahi-mahi swim under sunlight.
Mesopelagic Zone (200-1000m): Lanternfish and Swordfish flash bioluminescence as the light dims.
Bathypelagic Zone (1000-4000m): Anglerfish and Gulper Eel appear, thriving in the abyss.

Key Insight: Each fish species adapts to specific depth zones based on pressure, temperature, and light availability.

Scroll Effect: As the user scrolls vertically, each png image representing a fish exudes differences in opacity and scroll speed, presenting a smooth fade in and out transition in different environment (background) and depth (through parallax effect).
