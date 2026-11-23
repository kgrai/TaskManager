const test = require('node:test');
const assert = require('node:assert/strict');
const { createTask } = require('./tasks.js');
test('creates a trimmed pending task', () => assert.deepEqual(createTask('  Read  ', '1'), {id:'1', title:'Read', done:false}));
test('rejects blank and overlong names', () => { assert.throws(() => createTask('   ', '1')); assert.throws(() => createTask('a'.repeat(101), '1')); });
