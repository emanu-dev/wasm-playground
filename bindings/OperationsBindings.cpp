#include <emscripten.h>
#include <emscripten/bind.h>
#include "Operations.h"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(Operations) {
    function("add", optional_override([](int a, int b) -> int {
        return Operations::add(a, b);
    }));

    function("subtract", optional_override([](int a, int b) -> int {
        return Operations::subtract(a, b);
    }));

    function("multiply", optional_override([](int a, int b) -> int {
        return Operations::multiply(a, b);
    }));

    function("divide", optional_override([](int a, int b) -> float {
        return Operations::divide(a, b);
    }));

}