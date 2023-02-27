AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/scene.gltf" }
    },
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y:37, z: 80 };
      const rotation = { x: 0, y: -90, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale",{x:0.8,y:0.8,z:0.8})
    }
  });