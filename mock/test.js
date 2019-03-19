function* _testYieldExpression(){
    let value = '';
    value = yield 'yield value';
    console.info(`1 value is: ${value}`);//输出1

    value = yield 'yield value';
    console.info(`2 value is: ${value}`);//输出2
    return 'over';
}

let _testIterator = _testYieldExpression();
let _res = _testIterator.next();
console.info(`1:no params to next, result is: ${_res.value}`);//输出3

_res = _testIterator.next('params from next');
console.info(`2:params to next, result is: ${_res.value}`);//输出4

_res = _testIterator.next();
console.info(`3:params to next, result is: ${_res.value}`);//输出5