import {suite, add, cycle, complete } from 'benny'
import { escapeHtml as escapeHtmlRs } from '../index'
import  escapeHtml  from 'escape-html'
suite(
  'Example',

  add('rust', () => {
    escapeHtml(`<template>
    <Mafs :viewBox="{x:[-7, 7], y:[-3, 3], padding: 1 }">
        <CartesianCoordinates></CartesianCoordinates>
    </Mafs>
    </template>`
    )
  }),

  add('js', () => {
    escapeHtmlRs(`<template>
    <Mafs :viewBox="{x:[-7, 7], y:[-3, 3], padding: 1 }">
        <CartesianCoordinates></CartesianCoordinates>
    </Mafs>
</template>`)
  }),

  cycle(),
  complete(),
)