/**
 * =========================================================================
 * SONU FF STORE - LIVE ACCOUNT DATABASE
 * =========================================================================
 * All images 100% verified against existing files on disk.
 * =========================================================================
 */

const ACCOUNTS_DATA = [
  {
    "code": "01",
    "server": "INDIA \ud83c\uddee\ud83c\uddf3",
    "serverRegion": "India",
    "uid": "2242394439",
    "primeLevel": 6,
    "accountAge": "6 Years",
    "level": 72,
    "evoGuns": 5,
    "price": "\u20b94,000",
    "priceNum": 4000,
    "priceIDR": "Rp 760.000",
    "priceNumIDR": 760000,
    "previewImage": "images/accounts/acc01/preview.jpg",
    "whatsappChannelUrl": "https://whatsapp.com/channel/0029Vb9HF2yJpe8hnGS0fr3P/169",
    "verified": true,
    "badges": [
      "Serious Buyers Only",
      "Verified ID"
    ],
    "highlights": [
      "5 Max Evo Guns",
      "Level 72 Veteran",
      "6-Year Old ID",
      "Rare Bundles"
    ],
    "images": [
      "images/accounts/acc01/preview.jpg"
    ]
  },
  {
    "code": "02",
    "server": "INDIA \ud83c\uddee\ud83c\uddf3",
    "serverRegion": "India",
    "uid": "2169353890",
    "primeLevel": 5,
    "accountAge": "6 Years",
    "level": 70,
    "evoGuns": 4,
    "price": "\u20b93,000",
    "priceNum": 3000,
    "priceIDR": "Rp 570.000",
    "priceNumIDR": 570000,
    "previewImage": "images/accounts/acc02/preview.jpg",
    "whatsappChannelUrl": "https://whatsapp.com/channel/0029Vb9HF2yJpe8hnGS0fr3P/184",
    "verified": true,
    "badges": [
      "Serious Buyers Only",
      "Verified ID"
    ],
    "highlights": [
      "4 Evo Guns",
      "Level 70 Veteran",
      "Prime Level 5",
      "Elite Passes"
    ],
    "images": [
      "images/accounts/acc02/preview.jpg"
    ]
  },
  {
    "code": "03",
    "server": "INDONESIA \ud83c\uddee\ud83c\udde9",
    "serverRegion": "Indonesia",
    "uid": "1799726267",
    "primeLevel": 7,
    "accountAge": "6 Years",
    "level": 72,
    "evoGuns": 9,
    "price": "\u20b97,000",
    "priceNum": 7000,
    "priceIDR": "Rp 1.330.000",
    "priceNumIDR": 1330000,
    "previewImage": "images/accounts/acc03/preview.jpg",
    "whatsappChannelUrl": "https://whatsapp.com/channel/0029Vb9HF2yJpe8hnGS0fr3P/198",
    "verified": true,
    "badges": [
      "Serious Buyers Only",
      "Verified ID"
    ],
    "highlights": [
      "9 Max Evo Guns",
      "Prime Level 7",
      "Level 72 Godly ID",
      "Mythic Emotes"
    ],
    "images": [
      "images/accounts/acc03/preview.jpg"
    ]
  },
  {
    "code": "04",
    "server": "INDONESIA \ud83c\uddee\ud83c\udde9",
    "serverRegion": "Indonesia",
    "uid": "4158072378",
    "primeLevel": 7,
    "accountAge": "5 Years",
    "level": 65,
    "evoGuns": 10,
    "price": "\u20b96,900",
    "priceNum": 6900,
    "priceIDR": "Rp 1.300.000",
    "priceNumIDR": 1300000,
    "previewImage": "images/accounts/acc04/preview.jpg",
    "whatsappChannelUrl": "https://whatsapp.com/channel/0029Vb9HF2yJpe8hnGS0fr3P/214",
    "verified": true,
    "badges": [
      "Serious Buyers Only",
      "Verified ID"
    ],
    "highlights": [
      "10 Evo Guns (Arsenal Max)",
      "Prime 7",
      "Collector Special",
      "Max Emotes"
    ],
    "images": [
      "images/accounts/acc04/preview.jpg"
    ]
  },
  {
    "code": "05",
    "server": "INDONESIA \ud83c\uddee\ud83c\udde9",
    "serverRegion": "Indonesia",
    "uid": "8528192618",
    "primeLevel": 6,
    "accountAge": "5 Years",
    "level": 70,
    "evoGuns": 8,
    "price": "\u20b94,000",
    "priceNum": 4000,
    "priceIDR": "Rp 760.000",
    "priceNumIDR": 760000,
    "previewImage": "images/accounts/acc05/preview.jpg",
    "whatsappChannelUrl": "https://whatsapp.com/channel/0029Vb9HF2yJpe8hnGS0fr3P/232",
    "verified": true,
    "badges": [
      "Serious Buyers Only",
      "Verified ID"
    ],
    "highlights": [
      "8 Evo Guns",
      "Level 70",
      "Prime Level 6",
      "Exclusive Outfits"
    ],
    "images": [
      "images/accounts/acc05/preview.jpg"
    ]
  },
  {
    "code": "06",
    "server": "INDONESIA \ud83c\uddee\ud83c\udde9",
    "serverRegion": "Indonesia",
    "uid": "368136314",
    "primeLevel": 7,
    "accountAge": "8 Years",
    "level": 79,
    "evoGuns": 7,
    "price": "\u20b98,000",
    "priceNum": 8000,
    "priceIDR": "Rp 1.520.000",
    "priceNumIDR": 1520000,
    "previewImage": "images/accounts/acc06/preview.jpg",
    "whatsappChannelUrl": "https://whatsapp.com/channel/0029Vb9HF2yJpe8hnGS0fr3P/249",
    "verified": true,
    "badges": [
      "Serious Buyers Only",
      "Verified ID"
    ],
    "highlights": [
      "8 Years Ultra Veteran",
      "Level 79 Master",
      "Prime 7",
      "7 Max Evo Guns"
    ],
    "images": [
      "images/accounts/acc06/preview.jpg"
    ]
  }
];

// Configuration Constants
const STORE_CONFIG = {
  storeName: "SONU FF STORE",
  subtitle: "Premium Free Fire Account Store",
  whatsAppNumber: "7209168825",
  whatsAppCountryCode: "91",
  getWhatsAppUrl: (accountCode = null) => {
    const base = "https://wa.me/917209168825";
    if (accountCode) {
      const text = encodeURIComponent("Hello Sonu FF Store, I am interested in Account #" + accountCode);
      return base + "?text=" + text;
    }
    const generalText = encodeURIComponent("Hello Sonu FF Store, I am interested in buying a Free Fire account.");
    return base + "?text=" + generalText;
  }
};
