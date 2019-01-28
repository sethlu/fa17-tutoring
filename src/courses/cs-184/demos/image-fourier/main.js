// References:
// https://github.com/turbomaze/JS-Fourier-Image-Analysis
// https://homepages.inf.ed.ac.uk/rbf/HIPR2/fourier.htm
// http://lpsa.swarthmore.edu/Fourier/Series/DerFS.html#Equiv
// https://www.reed.edu/physics/courses/Physics331.f08/pdf/Fourier.pdf

window.addEventListener("load", () => {

    const canvases = {
        spatial: document.querySelector("#spatial"),
        spatial0: document.querySelector("#spatial-0"),
        spatial1: document.querySelector("#spatial-1"),
        spatial2: document.querySelector("#spatial-2"),
        freq0: document.querySelector("#freq-0"),
        freq1: document.querySelector("#freq-1"),
        freq2: document.querySelector("#freq-2"),
        kernel: document.querySelector("#kernel"),
        freqFiltered0: document.querySelector("#freq-filtered-0"),
        freqFiltered1: document.querySelector("#freq-filtered-1"),
        freqFiltered2: document.querySelector("#freq-filtered-2"),
        spatialReconstruct0: document.querySelector("#spatial-reconstruct-0"),
        spatialReconstruct1: document.querySelector("#spatial-reconstruct-1"),
        spatialReconstruct2: document.querySelector("#spatial-reconstruct-2"),
        spatialReconstruct: document.querySelector("#spatial-reconstruct"),
    }

    const contexts = {
        spatial: canvases.spatial.getContext("2d"),
        spatial0: canvases.spatial0.getContext("2d"),
        spatial1: canvases.spatial1.getContext("2d"),
        spatial2: canvases.spatial2.getContext("2d"),
        freq0: canvases.freq0.getContext("2d"),
        freq1: canvases.freq1.getContext("2d"),
        freq2: canvases.freq2.getContext("2d"),
        kernel: canvases.kernel.getContext("2d"),
        freqFiltered0: canvases.freqFiltered0.getContext("2d"),
        freqFiltered1: canvases.freqFiltered1.getContext("2d"),
        freqFiltered2: canvases.freqFiltered2.getContext("2d"),
        spatialReconstruct0: canvases.spatialReconstruct0.getContext("2d"),
        spatialReconstruct1: canvases.spatialReconstruct1.getContext("2d"),
        spatialReconstruct2: canvases.spatialReconstruct2.getContext("2d"),
        spatialReconstruct: canvases.spatialReconstruct.getContext("2d"),
    };

    const spatialDatasets = [
        makeDataset2([], canvases.spatial0.width, canvases.spatial0.height),
        makeDataset2([], canvases.spatial1.width, canvases.spatial1.height),
        makeDataset2([], canvases.spatial2.width, canvases.spatial2.height)
    ];
    const freqDatasets = [
        makeDataset2([], canvases.freq0.width, canvases.freq0.height),
        makeDataset2([], canvases.freq1.width, canvases.freq1.height),
        makeDataset2([], canvases.freq2.width, canvases.freq2.height)
    ];
    const kernelDataset = makeDataset2([], canvases.kernel.width, canvases.kernel.height);
    const freqFilteredDatasets = [
        makeDataset2([], canvases.freqFiltered0.width, canvases.freqFiltered0.height),
        makeDataset2([], canvases.freqFiltered1.width, canvases.freqFiltered1.height),
        makeDataset2([], canvases.freqFiltered2.width, canvases.freqFiltered2.height)
    ];
    const spatialReconstructDatasets = [
        makeDataset2([], canvases.spatialReconstruct0.width, canvases.spatialReconstruct0.height),
        makeDataset2([], canvases.spatialReconstruct1.width, canvases.spatialReconstruct1.height),
        makeDataset2([], canvases.spatialReconstruct2.width, canvases.spatialReconstruct2.height)
    ];

    function spatialToFreqStep() {

        // Spatial channels

        for (let channel = 0; channel < 3; channel++) {
            const spatialDataset = spatialDatasets[channel];

            // Series subject to analysis
            Array.from(contexts.spatial.getImageData(0, 0, canvases.spatial.width, canvases.spatial.height).data)
                .filter((_, i) => i % 4 == channel)
                .forEach((x, i) => spatialDataset.series[i] = x / 255);

            // Visualize spatial

            // console.log("Spatial", spatialDataset.series);

            const spatialImageData = new ImageData(spatialDataset.width, spatialDataset.height);
            spatialDataset.series.forEach((x, i) => {
                spatialImageData.data[i * 4 + channel] = x * 255;
                spatialImageData.data[i * 4 + 3] = 255;
            });
            contexts[`spatial${channel}`].putImageData(spatialImageData, 0, 0);

        }

        // Spatial to frequency

        for (let channel = 0; channel < 3; channel++) {
            const spatialDataset = spatialDatasets[channel];
            const freqDataset = freqDatasets[channel];

            FT.ft2(spatialDataset, freqDataset);

            // Visualize frequency

            // console.log("Freq", freqDataset.series);

            const offsetFreqDataset = freqDataset.offset(freqDataset.width / 2, freqDataset.height / 2);
            const freqImageData = new ImageData(freqDataset.width, freqDataset.height);
            for (let y = 0; y < freqDataset.height; y++) {
                for (let x = 0; x < freqDataset.width; x++) {
                    freqImageData.data[(y * freqDataset.width + x) * 4 + channel] = offsetFreqDataset(x, y).val.mag() * 10;
                    freqImageData.data[(y * freqDataset.width + x) * 4 + 3] = 255;
                }
            }
            contexts[`freq${channel}`].putImageData(freqImageData, 0, 0);

        }

    }

    function kernelStep() {

        // Filtering

        for (let channel = 0; channel < 3; channel++) {
            const freqDataset = freqDatasets[channel];
            const freqFilteredDataset = freqFilteredDatasets[channel];

            for (let y = 0; y < freqDataset.height; y++) {
                for (let x = 0; x < freqDataset.width; x++) {
                    freqFilteredDataset(x, y).set(freqDataset(x, y).val.clone().mul(kernelDataset(x, y).val));
                }
            }

            // Visualize frequency filtered

            // console.log("FreqFiltered", freqDataset.series);

            const offsetFreqFilteredDataset = freqFilteredDataset.offset(freqFilteredDataset.width / 2, freqFilteredDataset.height / 2);
            const freqFilteredImageData = new ImageData(freqFilteredDataset.width, freqFilteredDataset.height);
            for (let y = 0; y < freqFilteredDataset.height; y++) {
                for (let x = 0; x < freqFilteredDataset.width; x++) {
                    freqFilteredImageData.data[(y * freqFilteredDataset.width + x) * 4 + channel] = offsetFreqFilteredDataset(x, y).val.mag() * 10;
                    freqFilteredImageData.data[(y * freqFilteredDataset.width + x) * 4 + 3] = 255;
                }
            }
            contexts[`freqFiltered${channel}`].putImageData(freqFilteredImageData, 0, 0);

        }

    }
    
    function reconstructStep() {

        // Reconstruct spatial from frequency

        for (let channel = 0; channel < 3; channel++) {
            const freqFilteredDataset = freqFilteredDatasets[channel];
            const spatialReconstructDataset = spatialReconstructDatasets[channel];

            FT.ift2(freqFilteredDataset, spatialReconstructDataset);

            // Visualize spatial reconstructed

            // console.log("Spatial reconstruct", spatialReconstructDataset.series);

            const spatialReconstructImageData = new ImageData(spatialReconstructDataset.width, spatialReconstructDataset.height);
            spatialReconstructDataset.series.forEach((x, i) => {
                spatialReconstructImageData.data[i * 4 + channel] = x.mag() * 255;
                spatialReconstructImageData.data[i * 4 + 3] = 255;
            });
            contexts[`spatialReconstruct${channel}`].putImageData(spatialReconstructImageData, 0, 0);

        }

        // Visualize spatial reconstructed

        {
            const spatialReconstructImageData = new ImageData(canvases.spatialReconstruct.width, canvases.spatialReconstruct.height);
            
            for (let i = 0, n = canvases.spatialReconstruct.width * canvases.spatialReconstruct.height; i < n; i++) {
                spatialReconstructImageData.data[i * 4 + 3] = 255;
            }

            for (let channel = 0; channel < 3; channel++) {
                const spatialReconstructDataset = spatialReconstructDatasets[channel];
                spatialReconstructDataset.series.forEach((x, i) => {
                    spatialReconstructImageData.data[i * 4 + channel] = x.mag() * 255;
                });
            }

            contexts.spatialReconstruct.putImageData(spatialReconstructImageData, 0, 0);
        }

    }

    function visualizeKernel() {
        const offsetKernelDataset = kernelDataset.offset(kernelDataset.width / 2, kernelDataset.height / 2);
        const kernelImageData = new ImageData(kernelDataset.width, kernelDataset.height);
        for (let y = 0; y < kernelDataset.height; y++) {
            for (let x = 0; x < kernelDataset.width; x++) {
                const intensity = offsetKernelDataset(x, y).val * 255;
                kernelImageData.data[(y * kernelDataset.width + x) * 4 + 0] = intensity;
                kernelImageData.data[(y * kernelDataset.width + x) * 4 + 1] = intensity;
                kernelImageData.data[(y * kernelDataset.width + x) * 4 + 2] = intensity;
                kernelImageData.data[(y * kernelDataset.width + x) * 4 + 3] = 255;
            }
        }
        contexts.kernel.putImageData(kernelImageData, 0, 0);
    }

    function pageToCanvas(name, x, y) {
        const canvas = canvases[name];
        return [
            (x - canvas.offsetLeft) / canvas.offsetWidth * canvas.width,
            (y - canvas.offsetTop) / canvas.offsetHeight * canvas.height
        ];
    }

    function touchToDraw(name) {
        let mouseDown = false;

        function draw(clientX, clientY) {
            contexts[name].fillRect(...pageToCanvas(name, clientX, clientY).map(Math.floor), 1, 1);
        }

        function handleMouseDown() {
            mouseDown = true;
        }

        function handleMouseUp(event) {
            mouseDown = false;
            draw(event.clientX, event.clientY);
        }

        function handleMouseMove(event) {
            if (mouseDown) {
                draw(event.clientX, event.clientY);
            }
        }

        canvases[name].addEventListener("mousedown", handleMouseDown);
        canvases[name].addEventListener("mouseup", handleMouseUp);
        canvases[name].addEventListener("mousemove", handleMouseMove);
    }

    // Initialize the kernel (in frequency domain)

    function generateKernel(low, high) {
        const centerX = kernelDataset.width / 2;
        const centerY = kernelDataset.height / 2;

        const offsetKernelDataset = kernelDataset.offset(kernelDataset.width / 2, kernelDataset.height / 2);
        for (let y = 0; y < kernelDataset.height; y++) {
            for (let x = 0; x < kernelDataset.width; x++) {
                const distance = Math.sqrt(Math.pow(x + 0.5 - centerX, 2) + Math.pow(y + 0.5 - centerY, 2));
                offsetKernelDataset(x, y).set(low <= distance && distance < high ? 1 : 0);
            }
        }
    }

    // Initialize the default freq look
    let kernelApertureA = 0;
    let kernelApertureB = 30;
    generateKernel(Math.min(kernelApertureA, kernelApertureB), Math.max(kernelApertureA, kernelApertureB));
    visualizeKernel();

    spatialToFreqStep();
    kernelStep();
    reconstructStep();

    // Interactive stuff

    document.querySelector("#file-input").addEventListener("change", (event) => {
        document.querySelector("#file-selection").value = "";

        const imageFile = event.target.files[0];
        const image = new Image();
        image.src = URL.createObjectURL(imageFile);
        image.addEventListener("load", () => {
            contexts.spatial.drawImage(image, 0, 0, canvases.spatial.width, canvases.spatial.height);

            spatialToFreqStep();
            kernelStep();
            reconstructStep();
        });
    });

    document.querySelector("#file-selection").addEventListener("change", (event) => {
        document.querySelector("#file-input").value = "";

        const image = new Image();
        image.src = event.target.value;
        image.addEventListener("load", () => {
            contexts.spatial.drawImage(image, 0, 0, canvases.spatial.width, canvases.spatial.height);

            spatialToFreqStep();
            kernelStep();
            reconstructStep();
        });
    });

    document.querySelector("#kernel-aperture-a").value = kernelApertureA;
    document.querySelector("#kernel-aperture-b").value = kernelApertureB;

    document.querySelector("#kernel-aperture-a").addEventListener("input", (event) => {
        kernelApertureA = event.target.value;
        generateKernel(Math.min(kernelApertureA, kernelApertureB), Math.max(kernelApertureA, kernelApertureB));
        visualizeKernel();

        kernelStep();
        reconstructStep();
    });
    document.querySelector("#kernel-aperture-b").addEventListener("input", (event) => {
        kernelApertureB = event.target.value;
        generateKernel(Math.min(kernelApertureA, kernelApertureB), Math.max(kernelApertureA, kernelApertureB));
        visualizeKernel();

        kernelStep();
        reconstructStep();
    });

});

function makeDataset1(series) {
    const dataset = (x) => {
        return {
            val: series[i],
            set: (val) => series[i] = val,
        };
    };
    dataset.series = series;
    dataset.length = series.length;
    return dataset;
}

function makeDataset2(series, width, height) {
    const dataset = (x, y) => {
        while (x < 0) x += width;
        while (y < 0) y += height;
        x %= width;
        y %= height;

        const i = width * y + x;
        return {
            val: series[i],
            set: (val) => series[i] = val,
        };
    };
    dataset.series = series;
    dataset.width = width;
    dataset.height = height;

    dataset.offset = (ox, oy) => {
        const odataset = (x, y) => dataset(ox + x, oy + y);
        odataset.width = dataset.width;
        odataset.height = dataset.height;
        return odataset;
    };

    return dataset;
}

const FT = {};

FT.ft2 = (spatial, freq) => {
    for (let k = 0; k < freq.width; k++) {
        for (let l = 0; l < freq.height; l++) {
            let sum = new Complex();

            for (let i = 0; i < spatial.width; i++) {
                for (let j = 0; j < spatial.height; j++) {
                    sum.add(Complex.eti(-2 * Math.PI * (k * i / spatial.width + l * j / spatial.height)).mul(spatial(i, j).val));
                }
            }

            freq(k, l).set(sum);
        }
    }
};

FT.ift2 = (freq, spatial) => {
    const invsize = 1 / (spatial.width * spatial.height);

    for (let i = 0; i < spatial.width; i++) {
        for (let j = 0; j < spatial.height; j++) {
            let sum = new Complex();

            for (let k = 0; k < freq.width; k++) {
                for (let l = 0; l < freq.height; l++) {
                    sum.add(Complex.eti(2 * Math.PI * (k * i / freq.width + l * j / freq.height)).mul(freq(k, l).val));
                }
            }

            spatial(i, j).set(sum.mul(invsize));
        }
    }
};

function Complex(real = 0, im = 0) {
    this.real = real;
    this.im = im;
}

/**
 * e^ix
 */
Complex.eti = (x) => new Complex(Math.cos(x), Math.sin(x));

Complex.prototype.mag2 = function () {
    return Math.pow(this.real, 2) + Math.pow(this.im, 2);
}

Complex.prototype.mag = function () {
    return Math.sqrt(this.mag2());
}

Complex.prototype.add = function (a) {
    this.real += a.real;
    this.im += a.im;
    return this;
}

Complex.prototype.neg = function () {
    this.real *= -1;
    this.im *= -1;
    return this;
}

Complex.prototype.mul = function (a) {
    if (a instanceof Complex) {
        const real = this.real * a.real - this.im * a.im;
        const im = this.real * a.im + this.im * a.real;
        this.real = real;
        this.im = im;
        return this;
    }
    this.real *= a;
    this.im *= a;
    return this;
}

Complex.prototype.clone = function () {
    return new Complex(this.real, this.im);
}
