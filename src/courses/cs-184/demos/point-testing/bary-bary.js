if (!Number.prototype.clamp) Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};

window.addEventListener("DOMContentLoaded", function () {

    let container = document.querySelector("#bary-bary.canvas-container");
    let canvas = container.querySelector("canvas");
    let gl = canvas.getContext("webgl");
    let positionBuffer = gl.createBuffer(), colorBuffer = gl.createBuffer(), indexBuffer = gl.createBuffer();
    let controls = container.querySelectorAll(".circle-control");
    let baryStats = container.querySelector(".canvas-stats");

    let aspectRatio = 1 / 0.5;
    let x = 0.5, y = 0.5; // The cursor

    function init() {

        // WebGL prgram
        let program = gl.createProgram();
        let vertShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertShader,
            "precision mediump float;" +
            "attribute vec2 position;" +
            "attribute vec3 color;" +
            "varying vec3 vColor;" +
            "void main(void) {" +
            "  gl_Position = mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.5, -0.5, 0, 0.5) * vec4(position, 0.0, 1.0);" +
            "  vColor = color;" +
            "}");
        gl.compileShader(vertShader);
        let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragShader,
            "precision mediump float;" +
            "varying vec3 vColor;" +
            "void main(void) {" +
            "  gl_FragColor = vec4(vColor, 1.0);" +
            "}");
        gl.compileShader(fragShader);
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        // Indices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), gl.STATIC_DRAW);

        // Colors
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), gl.STATIC_DRAW);
        let colorIndex = gl.getAttribLocation(program, "color");
        gl.vertexAttribPointer(colorIndex, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(colorIndex);

        // Positions
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        let positionIndex = gl.getAttribLocation(program, "position");
        gl.vertexAttribPointer(positionIndex, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(positionIndex);

        // Control handlers
        controls.forEach(function (element) {
            element.addEventListener("mousedown", mouseStartHandler);
            container.addEventListener("mousemove", mouseMoveHandler);
            window.addEventListener("mouseup", mouseEndHandler);
        });

        shuffle();
    }

    function update() {

        let pos_ = [];
        let pos = [];

        controls.forEach(function (element) {
            pos_.push(element.circle_control_x, 1 - element.circle_control_y);
            let x = element.circle_control_x * container.offsetWidth,
                y = element.circle_control_y * container.offsetHeight;
            pos.push(x, y);
            element.style.transform = "translate(" + (x - element.offsetWidth / 2) + "px, " + (y - element.offsetHeight / 2) + "px)";
        });

        let invDenom = 1 / (pos[0] * (pos[3] - pos[5]) +
            pos[1] * (pos[4] - pos[2]) +
            pos[2] * pos[5] - pos[3] * pos[4]);
        let a = invDenom * ((pos[3] - pos[5]) * x * container.offsetWidth +
            (pos[4] - pos[2]) * y * container.offsetHeight +
            (pos[2] * pos[5] - pos[3] * pos[4]));
        let b = invDenom * ((pos[5] - pos[1]) * x * container.offsetWidth +
            (pos[0] - pos[4]) * y * container.offsetHeight +
            (pos[1] * pos[4] - pos[0] * pos[5]));
        let c = 1 - a - b;

        // Clear canvas
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Should be bound to position
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos_), gl.STATIC_DRAW);

        // Draw triangle
        gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);

        baryStats.textContent = "(" +
            "a=" + (a > 0 ? " " : "") + a.toFixed(3) + ", " +
            "b=" + (b > 0 ? " " : "") + b.toFixed(3) + ", " +
            "c=" + (c > 0 ? " " : "") + c.toFixed(3) + ")";

    }

    function resize() {
        let width = canvas.parentNode.offsetWidth;
        canvas.width = width;
        canvas.height = width / aspectRatio;

        gl.viewport(0, 0, canvas.width, canvas.height);

        update();
    }

    function shuffle() {
        controls.forEach(function (element) {
            element.circle_control_x = Math.random().clamp(0.2, 0.8);
            element.circle_control_y = Math.random().clamp(0.2, 0.8);
        });

        resize();
    }

    function mouseStartHandler(event) {
        event.stopPropagation();
        event.preventDefault();

        this.circle_control_x_ = this.circle_control_x;
        this.circle_control_y_ = this.circle_control_y;
        this.circle_control_client_x = event.clientX;
        this.circle_control_client_y = event.clientY;
        container.circle_control = this;
    }

    function mouseMoveHandler(event) {
        let rect = container.getBoundingClientRect();
        x = (event.clientX - rect.x) / container.offsetWidth;
        y = (event.clientY - rect.y) / container.offsetHeight;

        if (container.circle_control) {
            let element = container.circle_control;
            element.circle_control_x = (element.circle_control_x_ +
                (event.clientX - element.circle_control_client_x) / container.offsetWidth).clamp(0.1, 0.9);
            element.circle_control_y = (element.circle_control_y_ +
                (event.clientY - element.circle_control_client_y) / container.offsetHeight).clamp(0.1, 0.9);
        }
        
        update();
    }

    function mouseEndHandler() {
        container.circle_control = undefined;
    }

    window.addEventListener("resize", function () {
        resize();
    });

    init();

});
