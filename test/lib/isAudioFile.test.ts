import { isAudioFile } from '@lib/isAudioFile';

const extensionTests = [
  ['mp3', true],
  ['aif', true],
  ['aiff', true],
  ['wav', true],
  ['flac', true],
  ['m4a', true],
  ['', false],
  ['txt', false],
  ['html', false],
];

describe('isAudioFile file extensions', () => {
  it.each(extensionTests)(`".%s" should be "%s"`, (ext, expected) => {
    expect(isAudioFile(ext ? `filename.${ext}` : 'filename'))
      .toBe(expected);
  });
});
