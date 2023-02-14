import {suite, add, cycle, complete } from 'benny'
import { escapeHtml as escapeHtmlRs } from '../index'
import  escapeHtml  from 'escape-html'
import  { escapeHTML as escape } from '@napi-rs/escape'
import html from './html'
suite(
  'escape html',

  add('js', () => {
    escapeHtml(html)
  }),

  add('rs', () => {
    escapeHtmlRs(html)
  }),
  
  add('@napi-rs/escape-html', () => {
    escape(html)
  }),

  cycle(),
  complete(),
)