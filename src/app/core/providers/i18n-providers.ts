import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Session } from '../index';

export function getTranslationProviders(): Promise<Object[]> {
  // Get the locale id from the global
  const locale = Session.get('locale'); // document['locale'] as string;

  // return no providers if fail to get translation file for locale
  const noProviders: Object[] = [];

  // No locale or U.S. English: no translation providers
  if (!locale || locale === 'en-US') {
    return Promise.resolve(noProviders);
  }

  // Ex: 'locale/messages.es.xlf`
  const translationFile = `./app/i18n/messages.${locale}.xlf`;

  return getTranslationsWithSystemJs(translationFile)
    .then((translations: string) => [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale }
    ])
    .catch(() => noProviders); // ignore if file not found
}

declare var System: any;

function getTranslationsWithSystemJs(file: string) {
  // return System.import(file + '!text'); // relies on text plugin
  // changes Start here 
  let text = '';
  let fileRequest = new XMLHttpRequest();
  fileRequest.open('GET', file, false);
  fileRequest.onerror = function (err) {
    console.log(err);
  };
  fileRequest.onreadystatechange = function () {
    if (fileRequest.readyState === 4) {
      if (fileRequest.status === 200 || fileRequest.status == 0) {
        text = fileRequest.responseText;
      }
    }
  };
  fileRequest.send()
  let observable = Observable.of(text);
  let prom = observable.toPromise();
  return prom;
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
