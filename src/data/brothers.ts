export interface BrotherProfile {
  id: string;
  name: string;
  alias: string;
  role: string;
  quote: string;
  description: string;
  tags: string[];
  color: string;
}

export const BROTHERS_LIST: BrotherProfile[] = [
  {
    id: "MAXX",
    name: "Maxx",
    alias: "The Maximum Conviction",
    role: "Team",
    quote: "Zero user acquisition cost when passion is maximum. We build for decades, not days.",
    description: "Core Team leadership driving the Starknet Brother cultural movement and strategic ecosystem expansion.",
    tags: ["Team", "Core", "Conviction"],
    color: "#ef4444"
  },
  {
    id: "ODIN",
    name: "Odin",
    alias: "The All-Brother",
    role: "Council Elder",
    quote: "A brother alone is strong. Brothers together are unstoppable.",
    description: "Council Elder offering strategic wisdom, governance balance, and steadfast guidance across market cycles.",
    tags: ["Council Elder", "Leadership", "Wisdom"],
    color: "#a855f7"
  },
  {
    id: "SAM",
    name: "Sam",
    alias: "The Architect",
    role: "TechGod",
    quote: "Technology serves the community, not vice versa. Cairo contracts and proof-backed memes.",
    description: "The TechGod behind bots, infrastructure, automation tooling, and on-chain Starknet integrations.",
    tags: ["TechGod", "Builder", "Cairo"],
    color: "#22c55e"
  },
  {
    id: "YOYO",
    name: "Yoyo",
    alias: "The Momentum Walker",
    role: "OGs",
    quote: "Rise by lifting others. When one brother wins, the whole brotherhood wins.",
    description: "Original Gangster radiating infectious conviction, camaraderie, and relentless community presence.",
    tags: ["OGs", "Vibes", "Community"],
    color: "#f97316"
  },
  {
    id: "LYSKEY",
    name: "Lyskey",
    alias: "The Starknet Archivist",
    role: "Historian",
    quote: "Every transaction etched in STARK history is a permanent testament to our collective journey.",
    description: "Guardian of the Brother lore, documenting historic milestones, cultural memes, and manifesto roots.",
    tags: ["Historian", "Lore", "Archive"],
    color: "#eab308"
  },
  {
    id: "CUDAN",
    name: "Cudan",
    alias: "The Liquidity Whisperer",
    role: "OGs",
    quote: "Locked liquidity isn't just safety, it's our foundational pact with the brotherhood.",
    description: "Original Gangster and liquidity stalwart defending the pool integrity and long-term token holding.",
    tags: ["OGs", "DeFi", "Liquidity"],
    color: "#f59e0b"
  },
  {
    id: "ONEFARMER",
    name: "OneFarmer",
    alias: "The Steady Cultivator",
    role: "OGs",
    quote: "Plant seeds in the bear, harvest brotherhood in the bull. Pure organic Starknet conviction.",
    description: "Original Gangster and tireless community cultivator, active in on-chain ecosystem participation and growth.",
    tags: ["OGs", "Farmer", "Starknet"],
    color: "#10b981"
  }
];

export const TOKEN_CONFIG = {
  name: "Starknet Brother",
  ticker: "$BROTHER",
  contractAddress: "0x03b405a98c9e795d427fe82cdeeeed803f221b52471e3a757574a2b4180793ee",
  totalSupply: "1,000,000,000,000,000",
  launchDate: "October 31, 2024",
  launchPlatform: "unruggable.meme",
  platformUrl: "https://www.unruggable.meme/",
  avnuBuyUrl: "https://app.avnu.fi/en?amount=0.1&tokenFrom=0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d&tokenTo=0x3b405a98c9e795d427fe82cdeeeed803f221b52471e3a757574a2b4180793ee",
  dexScreenerUrl: "https://dexscreener.com/starknet/0x03b405a98c9e795d427fe82cdeeeed803f221b52471e3a757574a2b4180793ee-0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d-1020847100762815390390123822295304634-5982-0x0",
  geckoTerminalUrl: "https://www.geckoterminal.com/starknet-alpha/pools/0x00d4cf27867a524d5da0eb8a9d570506c9db85ee8fce7a90e4c5f8488251360a",
  starkscanUrl: "https://starkscan.co/token/0x03b405a98c9e795d427fe82cdeeeed803f221b52471e3a757574a2b4180793ee",
  twitterUrl: "https://x.com/StarknetBro",
  telegramUrl: "http://t.me/starknetbrother",
  idPortalUrl: "https://id.supbro.fun"
};
