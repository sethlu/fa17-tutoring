if (!Number.prototype.clamp) Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};

window.addEventListener("DOMContentLoaded", function () {

    let container = document.querySelector("#bary-line.canvas-container");
    let canvas = container.querySelector("canvas");
    let gl = canvas.getContext("webgl");
    let positionBuffer = gl.createBuffer(), colorBuffer = gl.createBuffer(), indexBuffer = gl.createBuffer();
    let controls = container.querySelectorAll(".circle-control");
    let baryStats = container.querySelector(".canvas-stats");

    let aspectRatio = 1 / 0.5;

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
            "  gl_PointSize = 5.0;" +
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

        // Positions
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        let positionIndex = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionIndex);
        gl.vertexAttribPointer(positionIndex, 2, gl.FLOAT, false, 0, 0);

        // Colors
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        let colorIndex = gl.getAttribLocation(program, "color");
        gl.enableVertexAttribArray(colorIndex);
        gl.vertexAttribPointer(colorIndex, 3, gl.FLOAT, false, 0, 0);

        // Control handlers
        controls.forEach(function (element) {
            element.addEventListener("mousedown", mouseStartHandler);
            container.addEventListener("mousemove", mouseMoveHandler);
            window.addEventListener("mouseup", mouseEndHandler);
        });

        shuffle();
    }

    function update() {

        let count = 0;
        let positions = [];
        let colors = [];

        let ox = controls[0].circle_control_x * container.offsetWidth;
        let oy = controls[0].circle_control_y * container.offsetHeight;

        let dx = controls[1].circle_control_x * container.offsetWidth - ox;
        let dy = controls[1].circle_control_y * container.offsetHeight - oy;

        let rdx = dy;
        let rdy = -dx;

        for (let x = 5; x < container.offsetWidth; x += 10) {
            for (let y = 5; y < container.offsetHeight; y += 10) {
                let x_ = x / container.offsetWidth;
                let y_ = y / container.offsetHeight;
                count++;
                positions.push(x_, 1 - y_);

                let px = x - ox;
                let py = y - oy;

                if (rdx * px + rdy * py >= 0) {
                    colors.push(0, 0, 0);
                } else {
                    colors.push(0.9, 0.9, 0.9);
                }
            }
        }

        controls.forEach(function (element) {
            let x = element.circle_control_x * container.offsetWidth,
                y = element.circle_control_y * container.offsetHeight;
            element.style.transform = "translate(" + (x - element.offsetWidth / 2) + "px, " + (y - element.offsetHeight / 2) + "px)";
        });

        // Clear canvas
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Update buffers

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

        // Draw triangle
        gl.drawArrays(gl.POINTS, 0, count);

    }

    function resize() {
        let width = canvas.parentNode.offsetWidth * 2;
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
        if (container.circle_control) {
            let element = container.circle_control;
            element.circle_control_x = (element.circle_control_x_ +
                (event.clientX - element.circle_control_client_x) / container.offsetWidth).clamp(0.1, 0.9);
            element.circle_control_y = (element.circle_control_y_ +
                (event.clientY - element.circle_control_client_y) / container.offsetHeight).clamp(0.1, 0.9);
            update();
        }
    }

    function mouseEndHandler() {
        container.circle_control = undefined;
    }

    window.addEventListener("resize", function () {
        resize();
    });

    init();

});
