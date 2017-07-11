import test from 'ava';
import awaitTo from '../src/index';

const n = () => Promise.resolve(1);
const s = () => Promise.resolve('2');
const f = () => Promise.reject(new Error('Error'))

async function fn() {
    return Promise.resolve('foo');
}

test('should return a number', async (t) => {
    t.plan(2);
    const [err, res] = await awaitTo(n());
    t.is(err, null);
    t.is(res, 1);
});

test('should return a string', async (t) => {
    t.plan(2);
    const [err, res] = await awaitTo(s());
    t.is(err, null);
    t.is(res, '2');
});

test('should return errors', async (t) => {
    t.plan(2);
    const [err, res] = await awaitTo(f());
    t.is(err.message, 'Error');
    t.is(res, null);
});