import test from 'ava'

import { escapeHtml } from '../index'

test('sync function from native code', (t) => {
    t.is(escapeHtml(`<template><Mafs><Point></Point><Text>"I love coding!"</Text></Mafs></template>`), "&lt;template&gt;&lt;Mafs&gt;&lt;Point&gt;&lt;/Point&gt;&lt;Text&gt;&quot;I love coding!&quot;&lt;/Text&gt;&lt;/Mafs&gt;&lt;/template&gt;")
})
