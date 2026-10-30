> const newParentId = await conn.relayMessage(
  m.chat,
  {
    imageMessage: {
      url: "https://mmg.whatsapp.net/o1/v/t24/f2/m232/AQOujAg3jLXgdPDL9Frdso3-Iqe02GSNf7ZoJS62xupgwwFYCrp3rpWj7zk1UhBtDearesNym586_ha8dq-gCqWnmnxc6fX9wM0d_1QjuQ?ccb=9-4&oh=01_Q5Aa5wGl8U1GkwNb3DPPUO4KWlykTqt7tv7c119hpRCyNycP5w&oe=6B0BEDBA&_nc_sid=e6ed6c&mms3=true",
      mimetype: "image/jpeg",
      caption: "",
      fileSha256: "BS4Ef0KR5w0Ymt4eHHQzFtI7YpqJUqO4t4/of8N8hbI=",
      fileLength: 4867,
      height: 271,
      width: 95,
      mediaKey: "nJLwckQ4HJqx5beAFlM/Gf0en1/B71ZlJPuoROUJfa4=",
      fileEncSha256: "TbKg4HgDMQtOKi8J3yNDK2lR+OP+neJ9bEwDZa76f58=",
      directPath: "/o1/v/t24/f2/m232/AQOujAg3jLXgdPDL9Frdso3-Iqe02GSNf7ZoJS62xupgwwFYCrp3rpWj7zk1UhBtDearesNym586_ha8dq-gCqWnmnxc6fX9wM0d_1QjuQ?ccb=9-4&oh=01_Q5Aa5wGl8U1GkwNb3DPPUO4KWlykTqt7tv7c119hpRCyNycP5w&oe=6B0BEDBA&_nc_sid=e6ed6c",
      mediaKeyTimestamp: 1793364514,
      jpegThumbnail: "/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCABbACADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAABQQDAgYB/8QAKxAAAgEDBAEEAQMFAAAAAAAAAQIDAAQRBRIhQTETIlFhFDIzcXKBkaHB/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAHhEAAgMAAgMBAAAAAAAAAAAAAQIAAxEhMQQSIhP/2gAMAwEAAhEDEQA/ALwqhv1MR456rQgALxk54PdY/lDbkjn+KO1XW5LcCK1RTKRyzDO2iZmPZi1RR0J8e3EeujyBKhcD4Oea71xSwhY+QCD90GuqX/5CzyEOwBUbl6pOa6W9so5QMe4hgejWQsyUC5IAwY3z4KnxWVrGlzdvJOoJJx/yoI7d4SWBHjHB4pOwdVjCsMuGHjulv1G1DTLJ7S2eJwiDK8EY7oSCP0bKQHuQkf4r0NzcRR2sjAcsMnjmhL+ZTBlQVXgAViHmHcBk3tbR70e0YQHljSsWiqBuEjLKOzWunx/i2SA9AEn77pJSDXm3eS4fB1OrRXTR3DzpXqRlJXGG8tnJNG6torNG4gBZfIVvP9jXpOBWTyICORjnNAPKs35h/mO3MlniA3qBtYtxiqYz7c/Jqa9lX149jqW3AkDmquOAOqVcdMHxl9VnT5Kn4qK8YBgiqFLdA5xVwzjmoL0qlxExbaozkmsqYg5GWrqmF6cm6SNVbbuU5x3g0uqFhkyHP+q8xaagbd42C52ffmm7O+S6LtFwRztPVX2VjdIkVruD8niJbJE4EnH8UZq29Y1kVz2Dn7pBJfUi3HqjtXkHoKvwMmhRFB4EWtjswBMNfSdvuRhjsVxpTi11eMvgJyH+CMUp5BB+KHvFHqyceFqg8jJY6jI1ZX0dxdXUUOPSU5jPyKj1XeZCpI9y8CstA/em/pFVaooKI2PcHAzS+mySKfWyf//Z",
      contextInfo: {
        stanzaId: "A57053DEC47952F368FAB4CE17CB687F",
        participant: "172310464069862@lid",
        quotedMessage: {
          extendedTextMessage: {
            text: ".rvo",
            previewType: 0,
            contextInfo: {},
            inviteLinkGroupTypeV2: 0
          }
        }
      }
    },
    messageContextInfo: {
      messageSecret: "T24D1oj0dBJG6jCwnQw1lI8CKssBhakQbU06oO6d8a8="
    }
  },
  {}
);

const id_0 = await conn.relayMessage(
  m.chat,
  {
    protocolMessage: {
      key: {
        remoteJid: m.chat,
        fromMe: true,
        id: newParentId
      },
      type: 0
    }
  },
  {
    additionalAttributes: {
      edit: "8"
    }
  }
);

return newParentId;