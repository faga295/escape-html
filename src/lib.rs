#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn escape_html(html: String) -> String {
  html
    .replace('"', "&quot;")
    .replace('&', "&amp;")
    .replace("'", "&#39;")
    .replace('<', "&lt;")
    .replace(">", "&gt;")
}
