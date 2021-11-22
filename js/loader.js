class WasmLoader {
    constructor() {}

    async wasm(path){
        console.log('fetching wasm from: ', path);

        if (!WebAssembly.instantiateStreaming)
        {
            return this.wasmFallback(path);
        }

        const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

        return instance?.exports;
    }

    async wasmFallback(path){
        console.log('using fallback');

        const response = await fetch(path);
        const bytes = response?.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes);

        return instance?.exports;
    }
}