import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  page1 = List(page1);
  page2 = List(page2);

  return page1.concat(page2);
}

export function mergeElements(page1, page2) {
  page1 = Map(page1);
  page2 = Map(page2);

  return page1.merge(page2);
}
