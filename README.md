# Boilerplate for WebAssembly using React and C++
*Based on the following tutorial: https://neoquest.xyz/c++-to-webassembly-with-react-from-scratch/*

### Prerequisites
- Node.js and npm
- emscripten to compile C++ to Wasm

### How To
#### Run application
```batch
# clone this repository
git clone https://github.com/emanu-dev/wasm-playground.git

cd wasm-playground

# install packages (check the webpack version, more info on "known issues")
npm install

# start webpack
npm start
```

#### Install emscripten
*Instructions from https://emscripten.org/docs/getting_started/downloads.html*
```batch
    # Install Python
    sudo apt-get install python3

	# Get the emsdk repo
	git clone https://github.com/emscripten-core/emsdk.git
        
	# Enter that directory
	cd emsdk
	
	# Fetch the latest version of the emsdk (not needed the first time you clone)
	git pull
    
	# Download and install the latest SDK tools.
	./emsdk install latest
    
	# Make the "latest" SDK "active" for the current user. (writes .emscripten file)
	./emsdk activate latest
    
	# Activate PATH and other environment variables in the current terminal
	source ./emsdk_env.sh
```

#### Compile C++ to Wasm module
```batch
emcc --bind bindings/SampleBindings.cpp -Icpp/ cpp/*.cpp -s WASM=1 -s MODULARIZE=1 -o Sample.js
```

### Known Issues
- Apparently newer versions of webpack 5 have flagged wasm as experimental (might work with futureDefaults set to true?)
- Parsing for the divide function is wrong. Both inputs are int inside C++, so result is always int