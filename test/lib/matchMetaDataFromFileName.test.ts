import {
  AudioTagMeta, matchMetaDataFromFileName
} from '@lib/matchMetaDataFromFileName';


type TestCase = [string, AudioTagMeta & {
    base: string;
  }
];

const problemMatches: TestCase[] = [
  [
    '/path/to/file/Giash, Til Yali - My Little Lady Birds (Remix).mp3',
    {
      trackNumber: 0,
      artist: "Giash, Til Yali",
      title: "My Little Lady Birds (Remix)",
      key: undefined,
      bpm: undefined,
      base: 'Giash, Til Yali - My Little Lady Birds (Remix)',
    },
  ],
  [
    '/path/to/file/Moonbeam - Cocoon (Moon Mix).mp3',
    {
      trackNumber: 0,
      artist: 'Moonbeam',
      title: 'Cocoon (Moon Mix)',
      key: undefined,
      bpm: undefined,
      base: 'Moonbeam - Cocoon (Moon Mix)',
    },
  ],
  [
    '/path/to/file/D*Note - Shed My Skin - 9A - 123.m4a',
    {
      trackNumber: 0,
      artist: 'D*Note',
      title: 'Shed My Skin',
      key: '9A',
      bpm: '123',
      base: 'D*Note - Shed My Skin - 9A - 123',
    },
  ],
  [
    '/path/to/file/Motorcycle - As the Rush Comes (Above & Beyond Dynaglide Remix) - 10A - 139.m4a',
    {
      trackNumber: 0,
      artist: 'Motorcycle',
      title: 'As the Rush Comes (Above & Beyond Dynaglide Remix)',
      key: '10A',
      bpm: '139',
      base: 'Motorcycle - As the Rush Comes (Above & Beyond Dynaglide Remix) - 10A - 139',
    },
  ],
  [
    '/path/to/file/Orbital - Halcyon + On + On - 11A - 127.m4a',
    {
      trackNumber: 0,
      artist: 'Orbital',
      title: 'Halcyon + On + On',
      key: '11A',
      bpm: '127',
      base: 'Orbital - Halcyon + On + On - 11A - 127',
    },
  ],
  [
    '/path/to/file/A Made Up Sound - On & On - 3A - 122.mp3',
    {
      trackNumber: 0,
      artist: 'A Made Up Sound',
      title: 'On & On',
      key: '3A',
      bpm: '122',
      base: 'A Made Up Sound - On & On - 3A - 122',
    },
  ],
  [
    "/path/to/file/Just_Me - Dubster's Lab - 4A - 121.m4a",
    {
      trackNumber: 0,
      artist: 'Just_Me',
      title: "Dubster's Lab",
      key: '4A',
      bpm: '121',
      base: "Just_Me - Dubster's Lab - 4A - 121",
    },
  ],

]

describe('matchMetaDataFromFileName', () => {
  describe.each(problemMatches)('%s', (filename, expected) => {
    const matches = matchMetaDataFromFileName(filename);

    test(`trackNumber should be ${expected.trackNumber}`, () => {
      expect(matches.trackNumber).toBe(expected.trackNumber);
    });
    test(`artist should be ${expected.artist}`, () => {
      expect(matches.artist).toBe(expected.artist);
    });
    test(`title should be ${expected.title}`, () => {
      expect(matches.title).toBe(expected.title);
    });
    test(`key should be ${expected.key}`, () => {
      expect(matches.key).toBe(expected.key);
    });
    test(`bpm should be ${expected.bpm}`, () => {
      expect(matches.bpm).toBe(expected.bpm);
    });
  });
});
