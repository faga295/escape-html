import test from 'ava'

import { escapeHtml } from '../index'

test('sync function from native code', (t) => {
    t.is(escapeHtml("<template><Mafs><Point></Point><Text>I love coding!</Text></Mafs></template>"), "&amp;lt;div&gt;")
})
