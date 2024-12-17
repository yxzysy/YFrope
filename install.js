module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Hillobar/Rope app",
        ]
      }
    },
    // get models
    {
      "method": "fs.download",
      "params": {
        "uri":  ["https://github.com/Hillobar/Rope/releases/download/Sapphire/2d106det.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/79999_iter.pth",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/codeformer_fp16.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/det_10g.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/epoch_16_best.ckpt",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/faceparser_fp16.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/GFPGANv1.4.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/GPEN-BFR-256.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/GPEN-BFR-512.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/inswapper_128.fp16.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/occluder.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/rd64-uni-refined.pth",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/res50.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/scrfd_2.5g_bnkps.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/w600k_r50.onnx",
        "https://github.com/Hillobar/Rope/releases/download/Sapphire/yoloface_8n.onnx"
      ],
        "dir": "app/models"
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install opencv-python",
          "pip install gradio devicetorch",
          "pip install -r requirements.txt"          
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}
