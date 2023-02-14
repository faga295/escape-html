#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use regex::Regex;

#[napi]
pub fn escape_html(input: String) -> String {
  let re = Regex::new(r#"[&"'<>]"#).unwrap();
  let mut html = String::from("");
  let mut last_index = 0;
  for matches in re.find_iter(&input) {
    let escape = match &input[matches.start()..matches.end()] {
      "&" => "&amp;",
      "\"" => "&quot;",
      "'" => "&#39",
      "<" => "&lt;",
      ">" => "&gt;",
      _ => "",
    };
    html += &input[last_index..matches.start()];
    html += escape;
    last_index = matches.end();
  }
  html
}
