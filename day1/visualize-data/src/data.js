// Where the data lives!

const data = {
  results: [
    {
      gender: "male",
      name: {
        title: "mr",
        first: "oskari",
        last: "autio"
      },
      location: {
        street: "7863 hatanpään valtatie",
        city: "säkylä",
        state: "northern savonia",
        postcode: 32671,
        coordinates: {
          latitude: "-10.9587",
          longitude: "-85.2766"
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      email: "oskari.autio@example.com",
      login: {
        uuid: "b07c2d74-b25d-4a80-8cc5-25e6d9c33c64",
        username: "silverfrog229",
        password: "sapper",
        salt: "Qkv2PHab",
        md5: "b1f7a76a9009e4a08547a1a0a822f5e5",
        sha1: "853ebae45f2e330f789fc7c8063e634cf695b0b0",
        sha256:
          "6b5584a006c1d64056aad9e36ec5e7ca3440bc008ade8be1ebbb381fe32b6341"
      },
      dob: {
        date: "1962-03-21T23:33:31Z",
        age: 57
      },
      registered: {
        date: "2017-02-03T17:22:56Z",
        age: 2
      },
      phone: "08-581-274",
      cell: "042-344-14-53",
      id: {
        name: "HETU",
        value: "NaNNA197undefined"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/39.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/39.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg"
      },
      nat: "FI"
    },
    {
      gender: "female",
      name: {
        title: "madame",
        first: "veronika",
        last: "laurent"
      },
      location: {
        street: "7352 rue principale",
        city: "oberdiessbach",
        state: "bern",
        postcode: 3475,
        coordinates: {
          latitude: "-30.3894",
          longitude: "-29.2036"
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands"
        }
      },
      email: "veronika.laurent@example.com",
      login: {
        uuid: "626862fb-39f7-466b-b93e-4906745544ab",
        username: "brownostrich773",
        password: "deeznuts",
        salt: "tMczEpvt",
        md5: "7b4a69b4b12b28631aee541fe717cc6c",
        sha1: "6445d4ce1795766983f68d77aaab1401d85f6cd1",
        sha256:
          "bb24aa0d27617d7d2e8da88556f68cb1b95a160c3a8f173cd94a7b782b537ab6"
      },
      dob: {
        date: "1946-04-21T15:54:49Z",
        age: 73
      },
      registered: {
        date: "2007-02-18T16:21:32Z",
        age: 12
      },
      phone: "(525)-857-9161",
      cell: "(759)-826-3729",
      id: {
        name: "AVS",
        value: "756.2082.0709.16"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg"
      },
      nat: "CH"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "john",
        last: "gimenez"
      },
      location: {
        street: "9767 calle de argumosa",
        city: "santa cruz de tenerife",
        state: "castilla y león",
        postcode: 68723,
        coordinates: {
          latitude: "-84.3640",
          longitude: "-71.0352"
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands"
        }
      },
      email: "john.gimenez@example.com",
      login: {
        uuid: "ae4838e8-cf2b-42c9-bd4a-5c3e41d40c1e",
        username: "orangefrog130",
        password: "beef",
        salt: "i8GGJceQ",
        md5: "96357a3f805f3a10d295faa659acb82c",
        sha1: "b5db419d592bf955561a6a405a7ca717640dd2f6",
        sha256:
          "c89632f143f02120939593f7bd9bc9b95de6e3f4b2d95c44ac4f6e962481d9d8"
      },
      dob: {
        date: "1991-03-14T23:41:00Z",
        age: 28
      },
      registered: {
        date: "2015-12-05T11:45:27Z",
        age: 3
      },
      phone: "989-594-926",
      cell: "624-321-159",
      id: {
        name: "DNI",
        value: "75703544-X"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/30.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg"
      },
      nat: "ES"
    },
    {
      gender: "male",
      name: {
        title: "mr",
        first: "romain",
        last: "barbier"
      },
      location: {
        street: "695 rue de l'abbé-carton",
        city: "besançon",
        state: "moselle",
        postcode: 80587,
        coordinates: {
          latitude: "-56.3182",
          longitude: "56.5619"
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      email: "romain.barbier@example.com",
      login: {
        uuid: "52956f5c-5a2f-4889-81a2-850ed4ef8e7f",
        username: "redladybug155",
        password: "pajero",
        salt: "Dnrh7CBn",
        md5: "56f5420ee3dd7e26b83b81b9f75a6f45",
        sha1: "93aaf69ced7b0f6a9e007bac7b1a6f9bf6af8ab4",
        sha256:
          "9c540ae7faa40de9ff23aa701c9d72f4cdd220763c94cdcdb743bebb153d35d8"
      },
      dob: {
        date: "1971-10-13T07:56:19Z",
        age: 47
      },
      registered: {
        date: "2018-03-09T05:32:36Z",
        age: 1
      },
      phone: "05-77-89-10-08",
      cell: "06-06-16-56-00",
      id: {
        name: "INSEE",
        value: "1NNaN00109098 34"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/38.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg"
      },
      nat: "FR"
    },
    {
      gender: "female",
      name: {
        title: "ms",
        first: "آوین",
        last: "یاسمی"
      },
      location: {
        street: "6847 میدان حر",
        city: "نجف‌آباد",
        state: "فارس",
        postcode: 40708,
        coordinates: {
          latitude: "-40.4150",
          longitude: "39.2774"
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa"
        }
      },
      email: "آوین.یاسمی@example.com",
      login: {
        uuid: "3744129e-b8b0-4586-ae70-d0d182bc7341",
        username: "brownpanda814",
        password: "lucky13",
        salt: "EfFDWk49",
        md5: "10553260e6d9e381411579f5f80cd6e3",
        sha1: "ae2b211b0b45e843fc22b0f507b9443d30135764",
        sha256:
          "1c4d23cac07237bd8081d69f89d22c8892b33038bdf6334cd8f1e96d9777bf41"
      },
      dob: {
        date: "1956-02-14T08:15:28Z",
        age: 63
      },
      registered: {
        date: "2004-09-02T16:17:25Z",
        age: 14
      },
      phone: "062-20280184",
      cell: "0911-767-2722",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/28.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      },
      nat: "IR"
    }
  ],
  info: {
    seed: "65f8d5369e7795ad",
    results: 5,
    page: 1,
    version: "1.2"
  }
};

// const list = data.results;

const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then(response => response.json())
  .then(json => {
    createArray(json);
  });
