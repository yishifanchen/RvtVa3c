{
  "geometries": [
    {
      "uuid": "79910fa3-1a37-4cb0-9e6f-9941ac1df153-0004ec4a-4f464566-5c26-11d4-9217-0000863f27ad-0000500b",
      "type": "Geometry",
      "data": {
        "vertices": [-175.0,4000.0,156.0,-175.0,0.0,156.0,-4175.0,0.0,156.0,-4175.0,4000.0,156.0,-4175.0,4000.0,356.0,-4175.0,0.0,356.0,-175.0,0.0,356.0,-175.0,4000.0,356.0],
        "normals": [],
        "uvs": [],
        "faces": [0,0,1,2,0,2,3,0,0,4,5,6,0,6,7,4,0,2,1,6,0,6,5,2,0,3,2,5,0,5,4,3,0,0,3,7,0,4,7,3,0,1,0,7,0,7,6,1],
        "scale": 1.0,
        "visible": true,
        "castShadow": true,
        "receiveShadow": false,
        "doubleSided": true
      }
    }
  ],
  "materials": [
    {
      "uuid": "4f464566-5c26-11d4-9217-0000863f27ad-0000500b",
      "type": "MeshPhongMaterial",
      "color": 11166825,
      "ambient": 11166825,
      "emissive": 0,
      "specular": 11166825,
      "shininess": 128,
      "opacity": 1.0,
      "transparent": false,
      "wireframe": false
    }
  ],
  "metadata": {
    "type": "Object",
    "version": 4.3,
    "generator": "RvtVa3c Revit vA3C exporter"
  },
  "object": {
    "uuid": "a8918851-e15b-4935-bed9-e6df4950fa3a-0004ec65",
    "name": "BIM wall_brick.rvt",
    "type": "Object3D",
    "matrix": [0.01,0.0,0.0,0.0,0.0,0.01,0.0,0.0,0.0,0.0,0.01,0.0,0.0,0.0,0.0,0.01],
    "children": [
      {
        "uuid": "79910fa3-1a37-4cb0-9e6f-9941ac1df153-0004ec4a",
        "name": "Wall Walls <322634 Generic - 200mm>",
        "type": "RevitElement",
        "matrix": [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0],
        "children": [
          {
            "uuid": "79910fa3-1a37-4cb0-9e6f-9941ac1df153-0004ec4a-4f464566-5c26-11d4-9217-0000863f27ad-0000500b",
            "name": "Wall Walls <322634 Generic - 200mm>",
            "type": "Mesh",
            "matrix": [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0],
            "geometry": "79910fa3-1a37-4cb0-9e6f-9941ac1df153-0004ec4a-4f464566-5c26-11d4-9217-0000863f27ad-0000500b",
            "material": "4f464566-5c26-11d4-9217-0000863f27ad-0000500b"
          }
        ],
        "userData": {
          "Structural": "No",
          "Enable Analytical Model": "No",
          "Structural Usage": "Non-bearing",
          "Location Line": "Wall Centerline",
          "Image": "<None>",
          "Phase Created": "New Construction",
          "Phase Demolished": "None",
          "Base Constraint": "Level 1",
          "Base Offset": "0",
          "Base is Attached": "No",
          "Base Extension Distance": "0",
          "Top Constraint": "Up to level: Level 2",
          "Unconnected Height": "4000",
          "Top Offset": "0",
          "Top is Attached": "No",
          "Top Extension Distance": "0",
          "Room Bounding": "Yes",
          "Length": "4000",
          "Area": "16 m²",
          "Volume": "3.20 m³",
          "Related to Mass": "No",
          "Type Wrapping at Inserts": "Do not wrap",
          "Type Wrapping at Ends": "None",
          "Type Width": "200",
          "Type Type Image": "<None>",
          "Type Structural Material": "<By Category>",
          "Type Cost": "0.00",
          "Type Function": "Exterior",
          "Type Heat Transfer Coefficient (U)": "2.7000 W/(m²·K)",
          "Type Thermal Resistance (R)": "0.3704 (m²·K)/W",
          "Type Thermal mass": "24.19 kJ/K",
          "Type Absorptance": "0.7",
          "Type Roughness": "3"
        }
      }
    ]
  }
}
