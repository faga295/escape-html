import test from 'ava'

import { escapeHtml } from '../index'

test('sync function from native code', (t) => {
    t.is(escapeHtml("<div>"), "&lt;div&gt;")
})
