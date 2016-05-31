/*
binaryen
--------
git clone git@github.com:WebAssembly/binaryen.git
git checkout 31dd39a
make -j8

sexpr-wasm-prototype
--------------------
git clone git@github.com:WebAssembly/sexpr-wasm-prototype.git
git checkout binary_0xa
git submodule update --init
make -j8
out/sexpr-wasm /home/bgardner/projects/binaryen/test/hello_world.wast -o  /home/bgardner/projects/binaryen/test/hello_world.wasm

Node
----
git clone git@github.com:nodejs/node.git
git checkout vee-eight-5.1
./configure
make -j8
./node --expose-wasm
 */

const fs = require('fs');

const buffer = fs.readFileSync('hello_world.wasm');

function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}

console.log(buffer);
const ab = toArrayBuffer(buffer);

const mod = Wasm.instantiateModule(ab);

const res = mod.exports.add(2, 2);
console.log(res);

process.exit();