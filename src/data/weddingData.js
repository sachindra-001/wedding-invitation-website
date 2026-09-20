export const weddingDetails = {
  invitation: {
    welcomeText:
      "Two individuals, one collective direction. Finding a rhythm that feels like home. No matter where the road leads or how it turns. Everything feels right when standing side by side.",
    eventDateTime: "2026-10-31T10:45:00",
    rsvpContact: "+91 6364469555"
  },
  bride: {
    name: "Ananya Sharma",
    parents: "D/o Mr. Rajesh & Mrs. Sunita Sharma",
    bio: "A free spirit wrapped in grace, Ananya moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.",
    photoUrl: "/assets/bride_photo.jpg",
    familyPhotoUrl: "/assets/bride_family_photo.jpg"
  },
  groom: {
    name: "Aarav Verma",
    parents: "S/o Mr. Anand & Mrs. Kavitha Verma",
    bio: "A gentle soul with a poet's heart and an architect's mind, Aarav finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.",
    photoUrl: "/assets/groom_photo.jpg",
    familyPhotoUrl: "/assets/groom_family_photo.jpg"
  },
  venue: {
    name: "Hall Complex",
    address: "Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India",
    mapsUrl:
      "https://maps.google.com/?cid=3260281787863214776&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=apiv3"
  },
  schedule: [
    {
      id: "ring-ceremony",
      title: "Ring Ceremony",
      time: "11:00 AM",
      iconType: "ring",
      description: "Exchange of engagement rings and blessings."
    },
    {
      id: "cake-cutting",
      title: "Cake Cutting",
      time: "11:30 AM",
      iconType: "cake",
      description: "Celebrating sweet beginnings with family and friends."
    },
    {
      id: "lunch",
      title: "Lunch",
      time: "01:00 PM",
      iconType: "restaurant",
      description: "A lavish banquet of traditional delicacies."
    }
  ],
  music: {
    trackUrl: "/assets/music_track.mp3"
  },
  wishes: [
    {
      id: 1,
      message:
        "May your journey together be full of love, happiness, and unforgettable moments. Wishing you a lifetime of joy and togetherness!",
      author: "Pooja & Rohan Mehra"
    },
    {
      id: 2,
      message:
        "Heartiest congratulations Ananya & Aarav! Watching you two grow together has been pure joy. Here's to love, laughter, and your forever happily ever after.",
      author: "Vikram & Neha Singhania"
    },
    {
      id: 3,
      message:
        "May your ring ceremony mark the beginning of an endless adventure filled with warmth, mutual dreams, and boundless love.",
      author: "Uncle Suresh & Family"
    },
    {
      id: 4,
      message:
        "Two beautiful souls meant to be. Wishing you infinite blessings, sparkling smiles, and harmonious companionship always!",
      author: "Ritu & Aditi (College Squad)"
    },
    {
      id: 5,
      message:
        "May god shower his divine blessings upon you both as you begin this lovely chapter. Looking forward to celebrating with you!",
      author: "Sharma Family"
    }
  ]
};

export const weddingAssets = {
  floralTopLeft: "/assets/topleft.svg",
  floralTopRight: "/assets/topright.svg",
  floralBottomLeft: "/assets/bottomleft.svg",
  floralBottomRight: "/assets/bottomright.svg",
  coupleArtwork: "/assets/herocouple.webp",
  countdownFloralLeft: "/assets/countflowerleft.svg",
  countdownFloralRight: "/assets/countflowerright.svg",
  paperTexture: "/assets/texture.svg",
  aboutCornerLeft: "/assets/aboutleft.svg",
  aboutCornerRight: "/assets/aboutright.svg",
  brideOrnament: "/assets/brideside.svg",
  groomOrnament: "/assets/groomside.svg",
  brideLeaf: "/assets/brideleaf.svg",
  groomLeaf: "/assets/groomleaf.svg",
  wishesBorderTop: "/assets/wishestop.svg",
  wishesBorderBottom: "/assets/wishesbottom.svg",
  wishesBorderLeft: "/assets/wishesleft.svg",
  wishesBorderRight: "/assets/wishesright.svg",
  quoteEmblem: "/assets/quotes.svg",
  lotusFlower: "/assets/wishesflower.svg",
  sendWishesBorderTop: "/assets/bordershort.svg",
  sendWishesBorderSide: "/assets/borderlong.svg",
  sendWishesFloralCorner: "/assets/leftflower.svg"
};

// Aliases for seamless compatibility
export const weddingData = weddingDetails;
export const assetImages = weddingAssets;
